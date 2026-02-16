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
const CLIENT_URL = process.env.CLIENT_URL || 'https://auction-test-prep.vercel.app';

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
  origin: [
    'https://auction-test-prep.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
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
    };

    res.json({ summary });
  } catch (error) {
    console.error('Get summary error:', error.message);
    res.status(500).json({ error: 'Server error fetching summary.' });
  }
});

// ─── Admin Routes ─────────────────────────────────────────────────

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
