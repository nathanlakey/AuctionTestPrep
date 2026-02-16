import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import { createClient } from '@libsql/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

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

// Create users table on startup
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

// POST /api/auth/reset-password — reset password (no auth needed)
app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { email, username, newPassword } = req.body;
    if (!email || !username || !newPassword) {
      return res.status(400).json({ error: 'Email, username, and new password are required.' });
    }

    const result = await db.execute({
      sql: 'SELECT * FROM users WHERE LOWER(email) = LOWER(?) AND LOWER(username) = LOWER(?)',
      args: [email, username]
    });
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No account found with that email and username combination.' });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    await db.execute({ sql: 'UPDATE users SET password = ? WHERE id = ?', args: [hashed, result.rows[0].id] });

    res.json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Password reset error:', error.message);
    res.status(500).json({ error: 'Server error resetting password.' });
  }
});

// DELETE /api/auth/account — delete own account
app.delete('/api/auth/account', authMiddleware, async (req, res) => {
  try {
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
