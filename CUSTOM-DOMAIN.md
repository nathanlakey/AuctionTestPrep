# Setting Up Your Custom Domain (auctionacademy.com)

This guide walks you through connecting your domain `auctionacademy.com` to your Vercel-hosted website. Once done, visitors will go to `auctionacademy.com` instead of `auction-test-prep.vercel.app`.

---

## Step 1: Add Your Domain in Vercel

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project (**auction-test-prep**)
3. Click **Settings** (top nav)
4. Click **Domains** (left sidebar)
5. Type `auctionacademy.com` in the input box and click **Add**
6. Vercel will also recommend adding `www.auctionacademy.com` — click **Add** for that too

Vercel will now show you DNS records you need to add. Keep this page open.

---

## Step 2: Add DNS Records at Your Domain Registrar

Go to wherever you purchased `auctionacademy.com` (GoDaddy, Namecheap, Google Domains, Cloudflare, etc.) and find the **DNS settings**.

### Add these records:

| Type | Name | Value |
|------|------|-------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

> **Note:** The A record IP (`76.76.21.21`) is Vercel's standard IP. If Vercel shows a different value on their Domains page, use theirs instead.

### If your registrar asks for TTL:
Set it to **Auto** or **3600** (1 hour).

---

## Step 3: Wait for Propagation

- DNS changes can take **5 minutes to 48 hours** to fully propagate
- Vercel will automatically detect the records and issue a free SSL certificate
- You'll see a green checkmark ✅ on the Vercel Domains page when it's ready

---

## Step 4: Update Your Server's CLIENT_URL

Once the domain is working, update the `CLIENT_URL` environment variable on Render:

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click on your server service
3. Click **Environment** (left sidebar)
4. Change `CLIENT_URL` from `https://auction-test-prep.vercel.app` to `https://auctionacademy.com`
5. Click **Save Changes** — the server will automatically restart

---

## Step 5: Update Stripe Redirect URLs (Important!)

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Your checkout success/cancel URLs are set in the server code — since you updated `CLIENT_URL` in Step 4, Stripe redirects will automatically use the new domain. No Stripe dashboard changes needed!

---

## Step 6: Verify Your Domain with Resend (for Password Reset Emails)

This is the step that will let password reset emails come from `hello@auctionacademy.com` instead of `onboarding@resend.dev`.

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click **Add Domain** and type `auctionacademy.com`
3. Resend will show you **DNS records to add** (TXT, MX, and CNAME records)
4. Add ALL of those records at your domain registrar (same place as Step 2)
5. Go back to Resend and click **Verify** — it may take a few minutes
6. Once verified, you'll see a green ✅ next to your domain

---

## Step 7: Update CORS on the Server (Optional but Recommended)

The server already allows `https://auction-test-prep.vercel.app`. After adding the custom domain, add it to the CORS list:

> This has already been set up to work — Vercel automatically redirects the old URL to the new domain. But if you want to be thorough, let me know and I can add the new domain to the server's CORS config.

---

## After Setup — What Changes

| Before | After |
|--------|-------|
| `auction-test-prep.vercel.app` | `auctionacademy.com` |
| Password reset emails from `onboarding@resend.dev` | Emails from `hello@auctionacademy.com` |
| Stripe redirects to Vercel URL | Stripe redirects to `auctionacademy.com` |

The old `auction-test-prep.vercel.app` URL will still work — Vercel automatically redirects it to your custom domain.

---

## Quick Checklist

- [ ] Added domain in Vercel dashboard
- [ ] Added A record (`@` → `76.76.21.21`) at domain registrar
- [ ] Added CNAME record (`www` → `cname.vercel-dns.com`) at domain registrar
- [ ] Waited for DNS propagation (green ✅ in Vercel)
- [ ] Updated `CLIENT_URL` on Render to `https://auctionacademy.com`
- [ ] Added Resend DNS records for email verification
- [ ] Verified domain in Resend dashboard
- [ ] Tested: visit `auctionacademy.com` — site loads ✅
- [ ] Tested: password reset email arrives from `hello@auctionacademy.com` ✅
