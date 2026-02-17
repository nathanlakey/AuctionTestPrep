import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import { createClient } from '@libsql/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { Resend } from 'resend';

// ─── Resend Email ─────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);
const CLIENT_URL = process.env.CLIENT_URL || 'https://www.auctionacademyprep.com';

// ─── Config ───────────────────────────────────────────────────────
const JWT_SECRET = process.env.JWT_SECRET || 'auction-academy-secret-key-change-in-production';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Admin emails — these always have admin access
const ADMIN_EMAILS = ['hello@auctionacademy.com', 'nathan@auctionacademy.com', 'admin@auctionacademy.com'];

// ─── Turso Cloud Database ─────────────────────────────────────────
if (!process.env.TURSO_DATABASE_URL) {
  console.warn('⚠️  WARNING: TURSO_DATABASE_URL not set! Using local file (data will be lost on restart)');
}
const tursoToken = (process.env.TURSO_AUTH_TOKEN || '').trim();
const db = createClient({
  url: (process.env.TURSO_DATABASE_URL || 'file:users.db').trim(),
  authToken: tursoToken || undefined,
});

// Create tables on startup
async function initDatabase() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      first_name TEXT DEFAULT '',
      last_name TEXT DEFAULT '',
      phone TEXT DEFAULT '',
      has_paid INTEGER DEFAULT 0,
      is_admin INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS reset_tokens (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at TEXT NOT NULL,
      used INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS test_results (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      state TEXT NOT NULL,
      mode TEXT NOT NULL,
      topic TEXT DEFAULT 'All Topics',
      score_correct INTEGER NOT NULL,
      score_total INTEGER NOT NULL,
      score_percentage REAL NOT NULL,
      time_seconds INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS study_streaks (
      user_id TEXT PRIMARY KEY,
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_study_date TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS bookmarked_questions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      state TEXT NOT NULL,
      question_id INTEGER NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id),
      UNIQUE(user_id, state, question_id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS exam_dates (
      user_id TEXT PRIMARY KEY,
      exam_date TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS reported_questions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      question_id INTEGER NOT NULL,
      question_text TEXT NOT NULL,
      reason TEXT DEFAULT '',
      state TEXT DEFAULT '',
      component TEXT DEFAULT '',
      status TEXT DEFAULT 'open',
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS feedback (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT DEFAULT '',
      email TEXT DEFAULT '',
      message TEXT NOT NULL,
      status TEXT DEFAULT 'new',
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  console.log('Database initialized');
}

// ─── Helpers ──────────────────────────────────────────────────────
function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });
}

function sanitizeUser(row) {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    firstName: row.first_name || '',
    lastName: row.last_name || '',
    phone: row.phone || '',
    hasPaid: !!row.has_paid,
    isAdmin: !!row.is_admin || ADMIN_EMAILS.includes(row.email?.toLowerCase()),
    createdAt: row.created_at || '',
  };
}

// Auth middleware
async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [decoded.id] });
    if (result.rows.length === 0) return res.status(401).json({ error: 'User not found.' });
    req.user = result.rows[0];
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

// Admin middleware
function adminMiddleware(req, res, next) {
  const user = req.user;
  if (!user.is_admin && !ADMIN_EMAILS.includes(user.email?.toLowerCase())) {
    return res.status(403).json({ error: 'Admin access required.' });
  }
  next();
}

// ─── Express App ──────────────────────────────────────────────────
const app = express();

app.use(cors({
  origin: function (origin, callback) {
    const allowed = [
      'https://auction-test-prep.vercel.app',
      'https://www.auctionacademyprep.com',
      'https://auctionacademyprep.com',
      'http://localhost:5173',
      'http://localhost:3000'
    ];
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    // Allow any Vercel preview deployment
    if (origin.endsWith('.vercel.app') || allowed.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// ─── Stripe Webhook (must be before express.json() for raw body) ─
app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      event = JSON.parse(req.body.toString());
      console.warn('⚠️  STRIPE_WEBHOOK_SECRET not set — skipping signature verification');
    }
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_email;

    if (email) {
      try {
        await db.execute({ sql: 'UPDATE users SET has_paid = 1 WHERE LOWER(email) = LOWER(?)', args: [email] });
        console.log(`✅ Webhook: Marked ${email} as paid`);
      } catch (err) {
        console.error(`Webhook DB error for ${email}:`, err.message);
      }
    } else {
      console.warn('Webhook: No customer_email in checkout session');
    }
  }

  res.json({ received: true });
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Health check — shows if Turso is connected
app.get('/api/health', async (req, res) => {
  try {
    const result = await db.execute('SELECT COUNT(*) as count FROM users');
    res.json({
      status: 'ok',
      database: process.env.TURSO_DATABASE_URL ? 'turso-cloud' : 'local-file',
      tursoUrl: process.env.TURSO_DATABASE_URL ? process.env.TURSO_DATABASE_URL.substring(0, 30) + '...' : 'NOT SET',
      userCount: result.rows[0].count,
      resendKeySet: !!process.env.RESEND_API_KEY,
      resendFrom: process.env.RESEND_FROM_EMAIL || 'NOT SET',
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

// ─── Stripe ───────────────────────────────────────────────────────
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, mode, userEmail } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: mode || 'payment',
      customer_email: userEmail || undefined,
      allow_promotion_codes: true,
      success_url: `${process.env.CLIENT_URL}?payment=success`,
      cancel_url: `${process.env.CLIENT_URL}?payment=cancelled`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// ─── Auth Routes ──────────────────────────────────────────────────

// POST /api/auth/signup
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required.' });
    }

    // Check for existing email (case-insensitive)
    const existingEmail = await db.execute({ sql: 'SELECT id FROM users WHERE LOWER(email) = LOWER(?)', args: [email] });
    if (existingEmail.rows.length > 0) {
      return res.status(400).json({ error: 'An account with this email already exists.' });
    }

    // Check for existing username (case-insensitive)
    const existingUsername = await db.execute({ sql: 'SELECT id FROM users WHERE LOWER(username) = LOWER(?)', args: [username] });
    if (existingUsername.rows.length > 0) {
      return res.status(400).json({ error: 'This username is already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuidv4();
    const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase()) ? 1 : 0;

    await db.execute({
      sql: 'INSERT INTO users (id, username, email, password, is_admin) VALUES (?, ?, ?, ?, ?)',
      args: [id, username, email.toLowerCase(), hashedPassword, isAdmin]
    });

    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [id] });
    const newUser = result.rows[0];
    const token = generateToken(newUser);

    // ── Send welcome email (fire-and-forget) ──
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Auction Academy <onboarding@resend.dev>';
    resend.emails.send({
      from: fromAddress,
      to: [email.toLowerCase()],
      subject: 'Welcome to Auction Academy! 🎓',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #001829; margin: 0;">Auction Academy</h1>
            <p style="color: #666;">Test Prep</p>
          </div>
          <div style="background: #f9fafb; border-radius: 12px; padding: 30px; border: 1px solid #e5e7eb;">
            <h2 style="color: #001829; margin-top: 0;">Welcome aboard, ${username}! 🎉</h2>
            <p style="color: #374151; line-height: 1.6;">Thank you for signing up for <strong>Auction Academy</strong> — the #1 way to prepare for your auctioneer licensing exam.</p>
            <p style="color: #374151; line-height: 1.6;">Here's what you get access to:</p>
            <ul style="color: #374151; line-height: 2;">
              <li>📝 <strong>Full 75-question practice tests</strong> simulating the real exam</li>
              <li>🎯 <strong>Quick quizzes</strong> on specific topics</li>
              <li>🎴 <strong>Flashcards</strong> for fast review</li>
              <li>🎮 <strong>Study games</strong> to make learning fun</li>
              <li>📚 <strong>Comprehensive study guides</strong> for your state</li>
            </ul>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${CLIENT_URL}" style="background: #d60000; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">Start Studying Now</a>
            </div>
            <p style="color: #6b7280; font-size: 14px;">If you have any questions, just reply to this email. We're here to help you pass your exam!</p>
          </div>
          <div style="text-align: center; margin-top: 30px; color: #9ca3af; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} Auction Academy. All rights reserved.</p>
          </div>
        </div>
      `,
    }).catch(err => console.error('Welcome email failed:', err.message));

    res.status(201).json({ user: sanitizeUser(newUser), token });
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ error: 'Server error during signup.' });
  }
});

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const result = await db.execute({ sql: 'SELECT * FROM users WHERE LOWER(email) = LOWER(?)', args: [email] });
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = generateToken(user);
    res.json({ user: sanitizeUser(user), token });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Server error during login.' });
  }
});

// GET /api/auth/me — get current user from token
app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ user: sanitizeUser(req.user) });
});

// PUT /api/auth/profile — update profile
app.put('/api/auth/profile', authMiddleware, async (req, res) => {
  try {
    const { username, email, firstName, lastName, phone } = req.body;
    const userId = req.user.id;

    // Check for duplicate username (exclude self)
    if (username) {
      const existing = await db.execute({ sql: 'SELECT id FROM users WHERE LOWER(username) = LOWER(?) AND id != ?', args: [username, userId] });
      if (existing.rows.length > 0) return res.status(400).json({ error: 'This username is already taken.' });
    }

    // Check for duplicate email (exclude self)
    if (email) {
      const existing = await db.execute({ sql: 'SELECT id FROM users WHERE LOWER(email) = LOWER(?) AND id != ?', args: [email, userId] });
      if (existing.rows.length > 0) return res.status(400).json({ error: 'This email is already in use.' });
    }

    await db.execute({
      sql: `UPDATE users SET
        username = COALESCE(?, username),
        email = COALESCE(?, email),
        first_name = COALESCE(?, first_name),
        last_name = COALESCE(?, last_name),
        phone = COALESCE(?, phone)
      WHERE id = ?`,
      args: [
        username || null,
        email ? email.toLowerCase() : null,
        firstName !== undefined ? firstName : null,
        lastName !== undefined ? lastName : null,
        phone !== undefined ? phone : null,
        userId
      ]
    });

    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [userId] });
    res.json({ user: sanitizeUser(result.rows[0]) });
  } catch (error) {
    console.error('Profile update error:', error.message);
    res.status(500).json({ error: 'Server error updating profile.' });
  }
});

// PUT /api/auth/password — change password
app.put('/api/auth/password', authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current and new passwords are required.' });
    }

    const valid = await bcrypt.compare(currentPassword, req.user.password);
    if (!valid) {
      return res.status(400).json({ error: 'Current password is incorrect.' });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    await db.execute({ sql: 'UPDATE users SET password = ? WHERE id = ?', args: [hashed, req.user.id] });

    res.json({ message: 'Password updated successfully.' });
  } catch (error) {
    console.error('Password change error:', error.message);
    res.status(500).json({ error: 'Server error changing password.' });
  }
});

// POST /api/auth/forgot-password — send reset email
app.post('/api/auth/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const result = await db.execute({
      sql: 'SELECT * FROM users WHERE LOWER(email) = LOWER(?)',
      args: [email]
    });

    // Always return success (don't reveal if email exists)
    if (result.rows.length === 0) {
      return res.json({ message: 'If an account with that email exists, a reset link has been sent.' });
    }

    const user = result.rows[0];

    // Generate a secure token
    const token = crypto.randomBytes(32).toString('hex');
    const tokenId = uuidv4();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

    // Invalidate any existing tokens for this user
    await db.execute({ sql: 'DELETE FROM reset_tokens WHERE user_id = ?', args: [user.id] });

    // Store the new token
    await db.execute({
      sql: 'INSERT INTO reset_tokens (id, user_id, token, expires_at) VALUES (?, ?, ?, ?)',
      args: [tokenId, user.id, token, expiresAt]
    });

    // Build reset link
    const resetLink = `${CLIENT_URL}?reset_token=${token}`;

    // Send email via Resend
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Auction Academy <onboarding@resend.dev>';
    console.log('Sending reset email...', { from: fromAddress, to: user.email, apiKeySet: !!process.env.RESEND_API_KEY });
    const emailResult = await resend.emails.send({
      from: fromAddress,
      to: [user.email],
      subject: 'Reset Your Auction Academy Password',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #001829; margin: 0;">Auction Academy</h1>
            <p style="color: #666;">Test Prep</p>
          </div>
          <div style="background: #f9fafb; border-radius: 12px; padding: 30px; border: 1px solid #e5e7eb;">
            <h2 style="color: #001829; margin-top: 0;">Password Reset Request</h2>
            <p style="color: #374151; line-height: 1.6;">Hi <strong>${user.username}</strong>,</p>
            <p style="color: #374151; line-height: 1.6;">We received a request to reset your password. Click the button below to choose a new password:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" style="background: #d60000; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">Reset My Password</a>
            </div>
            <p style="color: #6b7280; font-size: 14px;">This link will expire in <strong>1 hour</strong>.</p>
            <p style="color: #6b7280; font-size: 14px;">If you didn't request this reset, you can safely ignore this email — your password won't be changed.</p>
          </div>
          <div style="text-align: center; margin-top: 30px; color: #9ca3af; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} Auction Academy. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    console.log('Resend response:', JSON.stringify(emailResult));
    console.log(`Password reset email sent to ${user.email}`);
    res.json({ message: 'If an account with that email exists, a reset link has been sent.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Server error sending reset email.' });
  }
});

// POST /api/auth/reset-password — reset password with token
app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Token and new password are required.' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    }

    // Find the token
    const tokenResult = await db.execute({
      sql: 'SELECT * FROM reset_tokens WHERE token = ? AND used = 0',
      args: [token]
    });
    if (tokenResult.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid or expired reset link. Please request a new one.' });
    }

    const resetToken = tokenResult.rows[0];

    // Check if expired
    if (new Date(resetToken.expires_at) < new Date()) {
      await db.execute({ sql: 'DELETE FROM reset_tokens WHERE id = ?', args: [resetToken.id] });
      return res.status(400).json({ error: 'This reset link has expired. Please request a new one.' });
    }

    // Update the password
    const hashed = await bcrypt.hash(newPassword, 10);
    await db.execute({ sql: 'UPDATE users SET password = ? WHERE id = ?', args: [hashed, resetToken.user_id] });

    // Mark token as used and clean up
    await db.execute({ sql: 'DELETE FROM reset_tokens WHERE user_id = ?', args: [resetToken.user_id] });

    res.json({ message: 'Password reset successfully! You can now sign in with your new password.' });
  } catch (error) {
    console.error('Reset password error:', error.message);
    res.status(500).json({ error: 'Server error resetting password.' });
  }
});

// DELETE /api/auth/account — delete own account
app.delete('/api/auth/account', authMiddleware, async (req, res) => {
  try {
    await db.execute({ sql: 'DELETE FROM test_results WHERE user_id = ?', args: [req.user.id] });
    await db.execute({ sql: 'DELETE FROM study_streaks WHERE user_id = ?', args: [req.user.id] });
    await db.execute({ sql: 'DELETE FROM reset_tokens WHERE user_id = ?', args: [req.user.id] });
    await db.execute({ sql: 'DELETE FROM users WHERE id = ?', args: [req.user.id] });
    res.json({ message: 'Account deleted.' });
  } catch (error) {
    console.error('Delete account error:', error.message);
    res.status(500).json({ error: 'Server error deleting account.' });
  }
});

// PUT /api/auth/mark-paid — mark current user as paid (called after Stripe success)
app.put('/api/auth/mark-paid', authMiddleware, async (req, res) => {
  try {
    await db.execute({ sql: 'UPDATE users SET has_paid = 1 WHERE id = ?', args: [req.user.id] });
    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.user.id] });
    res.json({ user: sanitizeUser(result.rows[0]) });
  } catch (error) {
    console.error('Mark paid error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// ─── Progress Tracking Routes ─────────────────────────────────────

// POST /api/results — save a test/quiz/game result
app.post('/api/results', authMiddleware, async (req, res) => {
  try {
    const { state, mode, topic, scoreCorrect, scoreTotal, scorePercentage, timeSeconds } = req.body;
    if (!state || !mode || scoreCorrect === undefined || scoreTotal === undefined || scorePercentage === undefined) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const id = uuidv4();
    await db.execute({
      sql: `INSERT INTO test_results (id, user_id, state, mode, topic, score_correct, score_total, score_percentage, time_seconds)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [id, req.user.id, state, mode, topic || 'All Topics', scoreCorrect, scoreTotal, scorePercentage, timeSeconds || 0]
    });

    // ── Update study streak ──
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const streakResult = await db.execute({ sql: 'SELECT * FROM study_streaks WHERE user_id = ?', args: [req.user.id] });

    if (streakResult.rows.length === 0) {
      // First ever result — start streak at 1
      await db.execute({
        sql: 'INSERT INTO study_streaks (user_id, current_streak, longest_streak, last_study_date) VALUES (?, 1, 1, ?)',
        args: [req.user.id, today]
      });
    } else {
      const streak = streakResult.rows[0];
      const lastDate = streak.last_study_date;

      if (lastDate === today) {
        // Already studied today — no change
      } else {
        // Check if yesterday
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        let newStreak;
        if (lastDate === yesterday) {
          newStreak = (streak.current_streak || 0) + 1;
        } else {
          newStreak = 1; // Streak broken, restart
        }
        const newLongest = Math.max(newStreak, streak.longest_streak || 0);
        await db.execute({
          sql: 'UPDATE study_streaks SET current_streak = ?, longest_streak = ?, last_study_date = ? WHERE user_id = ?',
          args: [newStreak, newLongest, today, req.user.id]
        });
      }
    }

    res.status(201).json({ message: 'Result saved.', id });
  } catch (error) {
    console.error('Save result error:', error.message);
    res.status(500).json({ error: 'Server error saving result.' });
  }
});

// GET /api/results — get all results for the logged-in user
app.get('/api/results', authMiddleware, async (req, res) => {
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM test_results WHERE user_id = ? ORDER BY created_at DESC LIMIT 100',
      args: [req.user.id]
    });

    const results = result.rows.map(row => ({
      id: row.id,
      state: row.state,
      mode: row.mode,
      topic: row.topic,
      scoreCorrect: row.score_correct,
      scoreTotal: row.score_total,
      scorePercentage: row.score_percentage,
      timeSeconds: row.time_seconds,
      createdAt: row.created_at,
    }));

    res.json({ results });
  } catch (error) {
    console.error('Get results error:', error.message);
    res.status(500).json({ error: 'Server error fetching results.' });
  }
});

// GET /api/results/summary — get summary stats for the logged-in user
app.get('/api/results/summary', authMiddleware, async (req, res) => {
  try {
    const totalResult = await db.execute({
      sql: 'SELECT COUNT(*) as total, AVG(score_percentage) as avg_score FROM test_results WHERE user_id = ?',
      args: [req.user.id]
    });

    const byModeResult = await db.execute({
      sql: `SELECT mode, COUNT(*) as count, AVG(score_percentage) as avg_score, MAX(score_percentage) as best_score
            FROM test_results WHERE user_id = ? GROUP BY mode`,
      args: [req.user.id]
    });

    const recentResult = await db.execute({
      sql: 'SELECT * FROM test_results WHERE user_id = ? ORDER BY created_at DESC LIMIT 5',
      args: [req.user.id]
    });

    // Include streak data in summary
    const streakResult = await db.execute({ sql: 'SELECT * FROM study_streaks WHERE user_id = ?', args: [req.user.id] });
    const streakData = streakResult.rows.length > 0 ? streakResult.rows[0] : null;

    // Check if streak is still active (last study was today or yesterday)
    let currentStreak = 0;
    let longestStreak = 0;
    if (streakData) {
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      longestStreak = streakData.longest_streak || 0;
      if (streakData.last_study_date === today || streakData.last_study_date === yesterday) {
        currentStreak = streakData.current_streak || 0;
      }
      // If last study was more than 1 day ago, streak is broken (currentStreak stays 0)
    }

    // Score history — last 20 tests/quizzes for the chart
    const historyResult = await db.execute({
      sql: `SELECT score_percentage, mode, created_at
            FROM test_results WHERE user_id = ?
            ORDER BY created_at ASC LIMIT 50`,
      args: [req.user.id]
    });

    // Performance by topic breakdown
    const byTopicResult = await db.execute({
      sql: `SELECT topic, COUNT(*) as count, AVG(score_percentage) as avg_score,
                   MAX(score_percentage) as best_score, MIN(score_percentage) as worst_score
            FROM test_results WHERE user_id = ? AND topic != 'All Topics'
            GROUP BY topic ORDER BY avg_score ASC`,
      args: [req.user.id]
    });

    const summary = {
      totalAttempts: totalResult.rows[0].total || 0,
      averageScore: totalResult.rows[0].avg_score ? Math.round(totalResult.rows[0].avg_score * 10) / 10 : 0,
      currentStreak,
      longestStreak,
      byMode: byModeResult.rows.map(row => ({
        mode: row.mode,
        count: row.count,
        avgScore: Math.round(row.avg_score * 10) / 10,
        bestScore: Math.round(row.best_score * 10) / 10,
      })),
      recent: recentResult.rows.map(row => ({
        id: row.id,
        state: row.state,
        mode: row.mode,
        topic: row.topic,
        scoreCorrect: row.score_correct,
        scoreTotal: row.score_total,
        scorePercentage: row.score_percentage,
        timeSeconds: row.time_seconds,
        createdAt: row.created_at,
      })),
      scoreHistory: historyResult.rows.map(row => ({
        score: row.score_percentage,
        mode: row.mode,
        date: row.created_at,
      })),
      byTopic: byTopicResult.rows.map(row => ({
        topic: row.topic,
        count: row.count,
        avgScore: Math.round(row.avg_score * 10) / 10,
        bestScore: Math.round(row.best_score * 10) / 10,
        worstScore: Math.round(row.worst_score * 10) / 10,
      })),
    };

    res.json({ summary });
  } catch (error) {
    console.error('Get summary error:', error.message);
    res.status(500).json({ error: 'Server error fetching summary.' });
  }
});

// ─── Bookmarked Questions Routes ──────────────────────────────────

// GET /api/bookmarks — get all bookmarked question IDs for the user
app.get('/api/bookmarks', authMiddleware, async (req, res) => {
  try {
    const { state } = req.query;
    let result;
    if (state) {
      result = await db.execute({
        sql: 'SELECT question_id, state FROM bookmarked_questions WHERE user_id = ? AND state = ? ORDER BY created_at DESC',
        args: [req.user.id, state]
      });
    } else {
      result = await db.execute({
        sql: 'SELECT question_id, state FROM bookmarked_questions WHERE user_id = ? ORDER BY created_at DESC',
        args: [req.user.id]
      });
    }
    res.json({ bookmarks: result.rows.map(r => ({ questionId: r.question_id, state: r.state })) });
  } catch (error) {
    console.error('Get bookmarks error:', error.message);
    res.status(500).json({ error: 'Server error fetching bookmarks.' });
  }
});

// POST /api/bookmarks — toggle bookmark on a question
app.post('/api/bookmarks', authMiddleware, async (req, res) => {
  try {
    const { questionId, state } = req.body;
    if (!questionId || !state) {
      return res.status(400).json({ error: 'questionId and state are required.' });
    }

    // Check if already bookmarked
    const existing = await db.execute({
      sql: 'SELECT id FROM bookmarked_questions WHERE user_id = ? AND state = ? AND question_id = ?',
      args: [req.user.id, state, questionId]
    });

    if (existing.rows.length > 0) {
      // Remove bookmark
      await db.execute({
        sql: 'DELETE FROM bookmarked_questions WHERE user_id = ? AND state = ? AND question_id = ?',
        args: [req.user.id, state, questionId]
      });
      res.json({ bookmarked: false });
    } else {
      // Add bookmark
      const id = uuidv4();
      await db.execute({
        sql: 'INSERT INTO bookmarked_questions (id, user_id, state, question_id) VALUES (?, ?, ?, ?)',
        args: [id, req.user.id, state, questionId]
      });
      res.json({ bookmarked: true });
    }
  } catch (error) {
    console.error('Toggle bookmark error:', error.message);
    res.status(500).json({ error: 'Server error toggling bookmark.' });
  }
});

// ─── Exam Date Routes ─────────────────────────────────────────────

// GET /api/exam-date — get user's exam date
app.get('/api/exam-date', authMiddleware, async (req, res) => {
  try {
    const result = await db.execute({
      sql: 'SELECT exam_date FROM exam_dates WHERE user_id = ?',
      args: [req.user.id]
    });
    res.json({ examDate: result.rows.length > 0 ? result.rows[0].exam_date : null });
  } catch (error) {
    console.error('Get exam date error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// PUT /api/exam-date — set or update exam date
app.put('/api/exam-date', authMiddleware, async (req, res) => {
  try {
    const { examDate } = req.body;
    if (!examDate) {
      // Clear exam date
      await db.execute({ sql: 'DELETE FROM exam_dates WHERE user_id = ?', args: [req.user.id] });
      return res.json({ examDate: null });
    }

    const existing = await db.execute({
      sql: 'SELECT user_id FROM exam_dates WHERE user_id = ?',
      args: [req.user.id]
    });

    if (existing.rows.length > 0) {
      await db.execute({
        sql: 'UPDATE exam_dates SET exam_date = ? WHERE user_id = ?',
        args: [examDate, req.user.id]
      });
    } else {
      await db.execute({
        sql: 'INSERT INTO exam_dates (user_id, exam_date) VALUES (?, ?)',
        args: [req.user.id, examDate]
      });
    }

    res.json({ examDate });
  } catch (error) {
    console.error('Set exam date error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// ─── Report Question Routes ───────────────────────────────────────

// POST /api/report-question — report a question
app.post('/api/report-question', authMiddleware, async (req, res) => {
  try {
    const { questionId, questionText, reason, state, component } = req.body;
    if (!questionId || !questionText) {
      return res.status(400).json({ error: 'questionId and questionText are required.' });
    }

    const id = uuidv4();
    await db.execute({
      sql: 'INSERT INTO reported_questions (id, user_id, question_id, question_text, reason, state, component) VALUES (?, ?, ?, ?, ?, ?, ?)',
      args: [id, req.user.id, questionId, questionText, reason || '', state || '', component || '']
    });

    res.json({ success: true, message: 'Question reported successfully.' });
  } catch (error) {
    console.error('Report question error:', error.message);
    res.status(500).json({ error: 'Server error reporting question.' });
  }
});

// GET /api/admin/reported-questions — get all reported questions (admin only)
app.get('/api/admin/reported-questions', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await db.execute(`
      SELECT rq.*, u.username, u.email
      FROM reported_questions rq
      JOIN users u ON rq.user_id = u.id
      ORDER BY rq.created_at DESC
    `);
    res.json({ reports: result.rows });
  } catch (error) {
    console.error('Get reported questions error:', error.message);
    res.status(500).json({ error: 'Server error fetching reported questions.' });
  }
});

// PUT /api/admin/reported-questions/:id — update report status (admin only)
app.put('/api/admin/reported-questions/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['open', 'reviewed', 'dismissed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Use open, reviewed, or dismissed.' });
    }
    await db.execute({
      sql: 'UPDATE reported_questions SET status = ? WHERE id = ?',
      args: [status, req.params.id]
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Update report status error:', error.message);
    res.status(500).json({ error: 'Server error updating report.' });
  }
});

// DELETE /api/admin/reported-questions/:id — delete a report (admin only)
app.delete('/api/admin/reported-questions/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await db.execute({ sql: 'DELETE FROM reported_questions WHERE id = ?', args: [req.params.id] });
    res.json({ success: true, message: 'Report deleted.' });
  } catch (error) {
    console.error('Delete report error:', error.message);
    res.status(500).json({ error: 'Server error deleting report.' });
  }
});

// ─── Feedback / Contact Us Routes ─────────────────────────────────

// POST /api/feedback — submit feedback (authenticated user)
app.post('/api/feedback', authMiddleware, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const id = uuidv4();
    await db.execute({
      sql: 'INSERT INTO feedback (id, user_id, name, email, message) VALUES (?, ?, ?, ?, ?)',
      args: [id, req.user.id, name || '', email || '', message.trim()]
    });

    res.json({ success: true, message: 'Feedback submitted successfully.' });
  } catch (error) {
    console.error('Submit feedback error:', error.message);
    res.status(500).json({ error: 'Server error submitting feedback.' });
  }
});

// GET /api/admin/feedback — get all feedback (admin only)
app.get('/api/admin/feedback', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await db.execute(`
      SELECT f.*, u.username
      FROM feedback f
      JOIN users u ON f.user_id = u.id
      ORDER BY f.created_at DESC
    `);
    res.json({ feedback: result.rows });
  } catch (error) {
    console.error('Get feedback error:', error.message);
    res.status(500).json({ error: 'Server error fetching feedback.' });
  }
});

// PUT /api/admin/feedback/:id — update feedback status (admin only)
app.put('/api/admin/feedback/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'read', 'resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Use new, read, or resolved.' });
    }
    await db.execute({
      sql: 'UPDATE feedback SET status = ? WHERE id = ?',
      args: [status, req.params.id]
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Update feedback status error:', error.message);
    res.status(500).json({ error: 'Server error updating feedback.' });
  }
});

// DELETE /api/admin/feedback/:id — delete feedback (admin only)
app.delete('/api/admin/feedback/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await db.execute({ sql: 'DELETE FROM feedback WHERE id = ?', args: [req.params.id] });
    res.json({ success: true, message: 'Feedback deleted.' });
  } catch (error) {
    console.error('Delete feedback error:', error.message);
    res.status(500).json({ error: 'Server error deleting feedback.' });
  }
});

// ─── Admin Routes ─────────────────────────────────────────────────

// GET /api/admin/analytics — aggregate analytics for admin dashboard
app.get('/api/admin/analytics', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    // Total users & paid users
    const userCounts = await db.execute(`
      SELECT
        COUNT(*) as total_users,
        SUM(CASE WHEN has_paid = 1 THEN 1 ELSE 0 END) as paid_users
      FROM users
    `);

    // Signups per day (last 30 days)
    const dailySignups = await db.execute(`
      SELECT DATE(created_at) as day, COUNT(*) as count
      FROM users
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY DATE(created_at)
      ORDER BY day DESC
    `);

    // Most popular states
    const popularStates = await db.execute(`
      SELECT state, COUNT(*) as count
      FROM test_results
      GROUP BY state
      ORDER BY count DESC
      LIMIT 10
    `);

    // Average scores by mode
    const scoresByMode = await db.execute(`
      SELECT mode, COUNT(*) as attempts, AVG(score_percentage) as avg_score
      FROM test_results
      GROUP BY mode
      ORDER BY attempts DESC
    `);

    // Total tests taken
    const totalTests = await db.execute('SELECT COUNT(*) as count FROM test_results');

    // Recent activity (last 10 results with username)
    const recentActivity = await db.execute(`
      SELECT tr.*, u.username
      FROM test_results tr
      JOIN users u ON tr.user_id = u.id
      ORDER BY tr.created_at DESC
      LIMIT 10
    `);

    const row = userCounts.rows[0];
    res.json({
      analytics: {
        totalUsers: row.total_users || 0,
        paidUsers: row.paid_users || 0,
        estimatedRevenue: (row.paid_users || 0) * 100,
        totalTests: totalTests.rows[0].count || 0,
        dailySignups: dailySignups.rows.map(r => ({ day: r.day, count: r.count })),
        popularStates: popularStates.rows.map(r => ({ state: r.state, count: r.count })),
        scoresByMode: scoresByMode.rows.map(r => ({
          mode: r.mode,
          attempts: r.attempts,
          avgScore: Math.round(r.avg_score * 10) / 10,
        })),
        recentActivity: recentActivity.rows.map(r => ({
          username: r.username,
          state: r.state,
          mode: r.mode,
          score: r.score_percentage,
          createdAt: r.created_at,
        })),
      },
    });
  } catch (error) {
    console.error('Admin analytics error:', error.message);
    res.status(500).json({ error: 'Server error fetching analytics.' });
  }
});

// GET /api/admin/users — list all users
app.get('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM users ORDER BY created_at DESC');
    res.json({ users: result.rows.map(sanitizeUser) });
  } catch (error) {
    console.error('Admin list users error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// PUT /api/admin/users/:id/access — toggle access (hasPaid)
app.put('/api/admin/users/:id/access', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.params.id] });
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found.' });
    const target = result.rows[0];

    const newStatus = target.has_paid ? 0 : 1;
    await db.execute({ sql: 'UPDATE users SET has_paid = ? WHERE id = ?', args: [newStatus, req.params.id] });

    const updated = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.params.id] });
    res.json({ user: sanitizeUser(updated.rows[0]) });
  } catch (error) {
    console.error('Toggle access error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// PUT /api/admin/users/:id/role — toggle admin role
app.put('/api/admin/users/:id/role', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.params.id] });
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found.' });
    const target = result.rows[0];

    // Can't remove own admin
    if (target.id === req.user.id) {
      return res.status(400).json({ error: "You can't change your own admin status." });
    }

    const newStatus = target.is_admin ? 0 : 1;
    await db.execute({ sql: 'UPDATE users SET is_admin = ? WHERE id = ?', args: [newStatus, req.params.id] });

    const updated = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.params.id] });
    res.json({ user: sanitizeUser(updated.rows[0]) });
  } catch (error) {
    console.error('Toggle admin error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// DELETE /api/admin/users/:id — delete a user
app.delete('/api/admin/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    // Can't delete yourself
    if (req.params.id === req.user.id) {
      return res.status(400).json({ error: "You can't delete your own account from admin." });
    }

    const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.params.id] });
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found.' });
    const target = result.rows[0];

    await db.execute({ sql: 'DELETE FROM users WHERE id = ?', args: [req.params.id] });
    res.json({ message: `User ${target.username} deleted.` });
  } catch (error) {
    console.error('Admin delete user error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// ─── Start Server ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
