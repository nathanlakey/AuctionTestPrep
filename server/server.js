import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import { existsSync, copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load .env from the project root (where package.json is)
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const envPath = resolve(projectRoot, '.env');
const envExamplePath = resolve(projectRoot, '.env.example');
const isProduction = process.env.NODE_ENV === 'production';

// In production (e.g. Render), env vars are set directly — no .env file needed
if (!isProduction) {
  if (!existsSync(envPath)) {
    if (existsSync(envExamplePath)) {
      copyFileSync(envExamplePath, envPath);
      console.log('');
      console.log('============================================================');
      console.log('  .env file created from .env.example');
      console.log('============================================================');
      console.log('');
      console.log('  Please edit .env and set your Stripe secret key:');
      console.log('');
      console.log('    STRIPE_SECRET_KEY=sk_test_your_key_here');
      console.log('');
      console.log('  Get your key from: https://dashboard.stripe.com/apikeys');
      console.log('  Then restart: npm run dev:all');
      console.log('============================================================');
      console.log('');
    } else {
      console.error('');
      console.error('============================================================');
      console.error('  ERROR: No .env file found and .env.example is missing!');
      console.error('============================================================');
      console.error('');
      console.error('  Create a .env file in the project root with:');
      console.error('');
      console.error('    STRIPE_SECRET_KEY=sk_test_your_key_here');
      console.error('    CLIENT_URL=http://localhost:5173');
      console.error('');
      console.error('  Get your key from: https://dashboard.stripe.com/apikeys');
      console.error('============================================================');
      console.error('');
    }
    process.exit(1);
  }
  dotenv.config({ path: envPath });
}

const app = express();
const PORT = process.env.PORT || 3001;

// Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('');
  console.error('============================================================');
  console.error('  ERROR: STRIPE_SECRET_KEY is not set!');
  console.error('============================================================');
  console.error('');
  console.error('  To fix this, create a .env file in the project root:');
  console.error('');
  console.error('    cp .env.example .env');
  console.error('');
  console.error('  Then edit .env and set your Stripe secret key:');
  console.error('');
  console.error('    STRIPE_SECRET_KEY=sk_test_your_key_here');
  console.error('');
  console.error('  Get your key from: https://dashboard.stripe.com/apikeys');
  console.error('============================================================');
  console.error('');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// In production, derive CLIENT_URL from Render's external URL if not explicitly set
const clientUrl = process.env.CLIENT_URL
  || (process.env.RENDER_EXTERNAL_URL ? process.env.RENDER_EXTERNAL_URL : 'http://localhost:5173');

app.use(cors({ origin: clientUrl }));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Create a Stripe Checkout Session for $0.50 USD one-time payment
app.post('/api/create-checkout-session', async (req, res) => {
  const { userEmail } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: userEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Auction Academy Exam Prep - Full Access',
              description: 'One-time payment for complete auctioneer exam prep access across all 7 states',
            },
            unit_amount: 50, // $0.50 in cents (Stripe minimum for USD)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${clientUrl}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientUrl}?payment=cancelled`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe session creation error:');
    console.error('  Type:', error.type || 'unknown');
    console.error('  Code:', error.code || 'none');
    console.error('  Message:', error.message);
    if (error.statusCode) console.error('  Status:', error.statusCode);

    // Forward Stripe API error messages (they are user-safe by design)
    // For non-Stripe errors, use a generic message
    const isStripeError = error.type && error.type.startsWith('Stripe');
    const userMessage = isStripeError
      ? error.message
      : 'Failed to create checkout session. Check the server logs for details.';
    res.status(error.statusCode || 500).json({ error: userMessage });
  }
});

// Verify a completed payment session
app.get('/api/verify-session', async (req, res) => {
  const { session_id } = req.query;

  if (!session_id) {
    return res.status(400).json({ error: 'Missing session_id parameter.' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.json({
      paid: session.payment_status === 'paid',
      customerEmail: session.customer_email,
    });
  } catch (error) {
    console.error('Session verification error:', error.message);
    res.status(500).json({ error: 'Failed to verify session.' });
  }
});

// --- Production: serve the built React frontend ---
if (isProduction) {
  const distPath = resolve(projectRoot, 'dist');
  const indexHtml = resolve(distPath, 'index.html');
  app.use(express.static(distPath));

  // SPA fallback — serve index.html for any non-API route
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(indexHtml);
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${isProduction ? ' (production)' : ''}`);
});
