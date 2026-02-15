# 🍎 Mac Setup Guide

## Mac is FULLY Supported!

This guide is specifically for macOS users. The application works perfectly on Mac!

---

## 🚀 Quick Start (3 Commands)

Open **Terminal** (Cmd+Space, type "Terminal", press Enter) and run:

```bash
cd Auction-Academy-Test-Prep
chmod +x setup-unix.sh
./setup-unix.sh
```

**That's it!** The script will:
- Check prerequisites (Git, Node.js)
- Download latest code
- Install dependencies
- Build application
- Start development server
- Open browser automatically

---

## 📋 Step-by-Step Guide

### Step 1: Install Prerequisites

**Check what you have:**
```bash
git --version
node --version
npm --version
```

**If Git is missing:**
```bash
xcode-select --install
```
This installs Git and other developer tools.

**If Node.js is missing:**

Option A - Download installer:
- Visit: https://nodejs.org/
- Download the LTS version
- Run the installer
- Restart Terminal

Option B - Use Homebrew:
```bash
brew install node
```

### Step 2: Download the Repository

**Option A - Command Line:**
```bash
cd ~/Downloads
git clone https://github.com/AuctionAcademy/Auction-Academy-Test-Prep.git
cd Auction-Academy-Test-Prep
git checkout copilot/create-auctioneer-exam-prep
```

**Option B - GitHub Desktop:**
- Download from GitHub website
- Extract the ZIP file
- Open Terminal and navigate to the folder

### Step 3: Run Setup Script

```bash
# Navigate to project folder
cd ~/Downloads/Auction-Academy-Test-Prep

# Make script executable
chmod +x setup-unix.sh

# Run the script
./setup-unix.sh
```

### Step 4: Wait for Setup

The script will show progress:
```
=== Auctioneer Exam Prep Setup ===

Checking prerequisites...
✓ Git found
✓ Node.js found
✓ npm found

Switching to feature branch...
✓ Branch switched

Installing dependencies...
✓ Dependencies installed

Building application...
✓ Build complete

Starting development server...
✓ Server starting...
```

### Step 5: Use the Application

Your browser will automatically open to:
```
http://localhost:5173
```

If it doesn't open automatically, just copy that URL into your browser.

---

## 🎯 Expected Result

You should see:
- ✅ Homepage with Auction Academy logo
- ✅ State selector (Tennessee and Texas)
- ✅ Dashboard with 5 study modes
- ✅ Study Guide button
- ✅ All features working

---

## 🔧 Manual Setup (Alternative)

If you prefer to run commands manually:

```bash
# 1. Navigate to project
cd ~/Downloads/Auction-Academy-Test-Prep

# 2. Switch to feature branch
git checkout copilot/create-auctioneer-exam-prep

# 3. Get latest code
git pull origin copilot/create-auctioneer-exam-prep

# 4. Clean old files
rm -rf node_modules dist

# 5. Install dependencies
npm install

# 6. Build application
npm run build

# 7. Start development server
npm run dev
```

Then open: http://localhost:5173

---

## ⚠️ Troubleshooting

### "Permission denied" when running script
**Solution:**
```bash
chmod +x setup-unix.sh
```

### "npm: command not found"
**Solution:** Install Node.js
```bash
# Option 1: Download from https://nodejs.org/
# Option 2: Use Homebrew
brew install node
```

### "git: command not found"
**Solution:** Install Xcode Command Line Tools
```bash
xcode-select --install
```

### Port 5173 already in use
**Solution:** Kill the process
```bash
lsof -ti:5173 | xargs kill -9
```

Or use a different port:
```bash
npm run dev -- --port 3000
```

### Script runs but browser doesn't open
**Solution:** Manually open browser to:
```
http://localhost:5173
```

### "Cannot find module" errors
**Solution:** Clean reinstall
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
npm run dev
```

---

## 💡 Tips for Mac Users

### Using Homebrew (Recommended)

If you don't have Homebrew, install it:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install everything you need:
```bash
brew install git node
```

### Keyboard Shortcuts

- **Open Terminal:** Cmd+Space, type "Terminal"
- **New Terminal Tab:** Cmd+T
- **Close Terminal:** Cmd+W
- **Stop Server:** Ctrl+C (in Terminal)
- **Hard Refresh Browser:** Cmd+Shift+R

### Where to Put the Project

Good locations:
- `~/Downloads/Auction-Academy-Test-Prep`
- `~/Documents/Auction-Academy-Test-Prep`
- `~/Developer/Auction-Academy-Test-Prep`

Avoid:
- Desktop (can get messy)
- iCloud Drive (sync issues)

---

## 🔄 Updating the Application

When there are updates:

```bash
cd Auction-Academy-Test-Prep
git pull origin copilot/create-auctioneer-exam-prep
npm install
npm run build
npm run dev
```

Or just run the setup script again:
```bash
./setup-unix.sh
```

---

## 🍎 Mac-Specific Features

### Opening Browser Automatically

The script uses the `open` command (Mac-specific) to automatically launch your default browser.

### Using Finder

You can also navigate using Finder:
1. Open Finder
2. Go to project folder
3. Right-click `setup-unix.sh`
4. Select "Open With" → "Terminal"
5. Type `chmod +x setup-unix.sh && ./setup-unix.sh`

### Apple Silicon (M1/M2/M3)

The application works perfectly on Apple Silicon Macs! No special configuration needed.

---

## 📸 What You'll See

### Terminal Output
```
=== Auctioneer Exam Prep Setup ===

[✓] Git found: git version 2.39.2
[✓] Node.js found: v20.10.0
[✓] npm found: 10.2.3

Step 1/7: Switching to feature branch...
[✓] Switched to 'copilot/create-auctioneer-exam-prep'

Step 2/7: Pulling latest changes...
[✓] Already up to date

Step 3/7: Cleaning old files...
[✓] Old files removed

Step 4/7: Installing dependencies...
added 342 packages in 14s
[✓] Dependencies installed

Step 5/7: Building application...
✓ built in 1.23s
[✓] Application built

Step 6/7: Starting development server...
  VITE v7.2.4  ready in 542 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help

[✓] Setup complete! Opening browser...
```

### Browser View
- Clean homepage with logo
- State selection dropdown
- Professional Auction Academy branding
- 5 study modes on dashboard
- All features working smoothly

---

## ✅ Success Checklist

You'll know everything is working when:

- [x] Terminal shows all green checkmarks (✓)
- [x] No error messages in Terminal
- [x] Browser opens automatically
- [x] Homepage loads with logo
- [x] Can select Tennessee or Texas
- [x] Dashboard shows **5 study modes** (not 3)
- [x] Study Guide button is visible
- [x] Practice tests load correctly
- [x] Questions display properly

---

## 🆘 Still Need Help?

1. **Read TROUBLESHOOTING.md** - Comprehensive troubleshooting guide
2. **Check Terminal for errors** - Look for red text or error messages
3. **Verify prerequisites** - Run `git --version` and `node --version`
4. **Take a screenshot** - Show what error you're seeing
5. **Check port availability** - Make sure 5173 isn't already in use

---

## 🎯 Summary

**Mac is fully supported!** ✅

- Use the `setup-unix.sh` script
- Works on all macOS versions
- Works on Intel and Apple Silicon Macs
- Same features as Windows version
- Native Mac commands (`open`, `rm -rf`, etc.)

**Quick Start:**
```bash
cd Auction-Academy-Test-Prep
chmod +x setup-unix.sh && ./setup-unix.sh
```

That's it! Enjoy studying for your auctioneer exam! 🎓
