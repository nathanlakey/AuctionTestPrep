import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

// ─── Config ───────────────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JWT_SECRET = process.env.JWT_SECRET || 'auction-academy-secret-key-change-in-production';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Admin emails — these always have admin access
const ADMIN_EMAILS = ['hello@auctionacademy.com', 'nathan@auctionacademy.com', 'admin@auctionacademy.com'];

// ─── Database Setup ───────────────────────────────────────────────
const db = new Database(path.join(__dirname, 'users.db'));
db.pragma('journal_mode = WAL');

db.exec(`
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
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(decoded.id);
    if (!user) return res.status(401).json({ error: 'User not found.' });
    req.user = user;
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
    const existingEmail = db.prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(?)').get(email);
    if (existingEmail) {
      return res.status(400).json({ error: 'An account with this email already exists.' });
    }

    // Check for existing username (case-insensitive)
    const existingUsername = db.prepare('SELECT id FROM users WHERE LOWER(username) = LOWER(?)').get(username);
    if (existingUsername) {
      return res.status(400).json({ error: 'This username is already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuidv4();
    const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase()) ? 1 : 0;

    db.prepare(`
      INSERT INTO users (id, username, email, password, is_admin) VALUES (?, ?, ?, ?, ?)
    `).run(id, username, email.toLowerCase(), hashedPassword, isAdmin);

    const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
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

    const user = db.prepare('SELECT * FROM users WHERE LOWER(email) = LOWER(?)').get(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

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
      const existing = db.prepare('SELECT id FROM users WHERE LOWER(username) = LOWER(?) AND id != ?').get(username, userId);
      if (existing) return res.status(400).json({ error: 'This username is already taken.' });
    }

    // Check for duplicate email (exclude self)
    if (email) {
      const existing = db.prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(?) AND id != ?').get(email, userId);
      if (existing) return res.status(400).json({ error: 'This email is already in use.' });
    }

    db.prepare(`
      UPDATE users SET
        username = COALESCE(?, username),
        email = COALESCE(?, email),
        first_name = COALESCE(?, first_name),
        last_name = COALESCE(?, last_name),
        phone = COALESCE(?, phone)
      WHERE id = ?
    `).run(
      username || null,
      email ? email.toLowerCase() : null,
      firstName !== undefined ? firstName : null,
      lastName !== undefined ? lastName : null,
      phone !== undefined ? phone : null,
      userId
    );

    const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
    res.json({ user: sanitizeUser(updated) });
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
    db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashed, req.user.id);

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

    const user = db.prepare('SELECT * FROM users WHERE LOWER(email) = LOWER(?) AND LOWER(username) = LOWER(?)').get(email, username);
    if (!user) {
      return res.status(404).json({ error: 'No account found with that email and username combination.' });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashed, user.id);

    res.json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Password reset error:', error.message);
    res.status(500).json({ error: 'Server error resetting password.' });
  }
});

// DELETE /api/auth/account — delete own account
app.delete('/api/auth/account', authMiddleware, (req, res) => {
  try {
    db.prepare('DELETE FROM users WHERE id = ?').run(req.user.id);
    res.json({ message: 'Account deleted.' });
  } catch (error) {
    console.error('Delete account error:', error.message);
    res.status(500).json({ error: 'Server error deleting account.' });
  }
});

// PUT /api/auth/mark-paid — mark current user as paid (called after Stripe success)
app.put('/api/auth/mark-paid', authMiddleware, (req, res) => {
  try {
    db.prepare('UPDATE users SET has_paid = 1 WHERE id = ?').run(req.user.id);
    const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
    res.json({ user: sanitizeUser(updated) });
  } catch (error) {
    console.error('Mark paid error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// ─── Admin Routes ─────────────────────────────────────────────────

// GET /api/admin/users — list all users
app.get('/api/admin/users', authMiddleware, adminMiddleware, (req, res) => {
  try {
    const users = db.prepare('SELECT * FROM users ORDER BY created_at DESC').all();
    res.json({ users: users.map(sanitizeUser) });
  } catch (error) {
    console.error('Admin list users error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// PUT /api/admin/users/:id/access — toggle access (hasPaid)
app.put('/api/admin/users/:id/access', authMiddleware, adminMiddleware, (req, res) => {
  try {
    const target = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (!target) return res.status(404).json({ error: 'User not found.' });

    const newStatus = target.has_paid ? 0 : 1;
    db.prepare('UPDATE users SET has_paid = ? WHERE id = ?').run(newStatus, req.params.id);

    const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    res.json({ user: sanitizeUser(updated) });
  } catch (error) {
    console.error('Toggle access error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// PUT /api/admin/users/:id/role — toggle admin role
app.put('/api/admin/users/:id/role', authMiddleware, adminMiddleware, (req, res) => {
  try {
    const target = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (!target) return res.status(404).json({ error: 'User not found.' });

    // Can't remove own admin
    if (target.id === req.user.id) {
      return res.status(400).json({ error: "You can't change your own admin status." });
    }

    const newStatus = target.is_admin ? 0 : 1;
    db.prepare('UPDATE users SET is_admin = ? WHERE id = ?').run(newStatus, req.params.id);

    const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    res.json({ user: sanitizeUser(updated) });
  } catch (error) {
    console.error('Toggle admin error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// DELETE /api/admin/users/:id — delete a user
app.delete('/api/admin/users/:id', authMiddleware, adminMiddleware, (req, res) => {
  try {
    // Can't delete yourself
    if (req.params.id === req.user.id) {
      return res.status(400).json({ error: "You can't delete your own account from admin." });
    }

    const target = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (!target) return res.status(404).json({ error: 'User not found.' });

    db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
    res.json({ message: `User ${target.username} deleted.` });
  } catch (error) {
    console.error('Admin delete user error:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// ─── Start Server ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
