# Troubleshooting Guide: Not Seeing Updated Version

## Problem
You've downloaded the code but you're not seeing the latest features (Study Guide, updated questions, etc.).

---

## ✅ Solution: Step-by-Step Fix

### Step 1: Verify You Have the Correct Branch

The latest code is on the branch: **`copilot/create-auctioneer-exam-prep`**

**Check your current branch:**
```bash
git branch
```

You should see `* copilot/create-auctioneer-exam-prep`

**If you're on the wrong branch (like `main`), switch to the correct branch:**
```bash
git checkout copilot/create-auctioneer-exam-prep
```

---

### Step 2: Pull Latest Changes

Make sure you have the absolute latest code:

```bash
git pull origin copilot/create-auctioneer-exam-prep
```

You should see "Already up to date" if you have the latest.

---

### Step 3: Verify Latest Commit

Check that you have the latest commit:

```bash
git log --oneline -5
```

You should see:
```
6735429 Clean up old questions and source files - use updated question banks
ff6bac5 Fix Dashboard topic state separation + Lightning Challenge implementation in progress
...
```

---

### Step 4: Clean Install Dependencies

Remove old dependencies and reinstall fresh:

```bash
# Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# Clean npm cache
npm cache clean --force

# Fresh install
npm install
```

---

### Step 5: Clean Build

Remove old build and create fresh:

```bash
# Remove old build
rm -rf dist

# Build fresh
npm run build
```

---

### Step 6: Start Development Server

```bash
npm run dev
```

Should start on `http://localhost:5173`

---

### Step 7: Hard Refresh Browser

Open `http://localhost:5173` and do a **hard refresh**:

- **Windows/Linux:** `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac:** `Cmd + Shift + R`

Or clear all browser cache:
1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

---

## 🔍 Verification Checklist

After following the steps above, you should see:

### ✅ Homepage
- [ ] Auction Academy logo (red icon)
- [ ] "Auctioneer Exam Prep" title
- [ ] State dropdown (Tennessee and Texas only)
- [ ] "Start Learning" button

### ✅ Dashboard (5 Study Modes)
- [ ] 📝 Full Practice Test
- [ ] 🎯 Topic Quiz (with dropdown)
- [ ] 🎴 Flashcards (with dropdown)
- [ ] 🎮 Study Games (with dropdown)
- [ ] 📚 Study Guide (with "View Study Guide" button)

### ✅ Topics Section
- [ ] "Topics Covered" section at bottom
- [ ] Tennessee: 15 topics listed
- [ ] Texas: 4 topics listed

### ✅ Study Guide
- [ ] Click "View Study Guide" button
- [ ] See study guide content
- [ ] See "Print Study Guide" button (red)
- [ ] Search bar works

### ✅ Practice Test
- [ ] Questions have detailed topics (e.g., "Definitions (T.C.A. § 62-19-101)")
- [ ] Question navigator shows 75 questions
- [ ] Timer displays
- [ ] Progress tracking works

---

## 🚨 Common Issues & Solutions

### Issue 1: Still seeing old interface (only 3 study modes)
**Solution:** You're viewing cached version or wrong branch
- Follow Steps 1-7 above
- Make sure you're on `copilot/create-auctioneer-exam-prep` branch
- Clear browser cache completely

### Issue 2: "npm install" fails
**Solution:**
```bash
# Try with legacy peer deps
npm install --legacy-peer-deps

# Or force
npm install --force
```

### Issue 3: Build fails
**Solution:**
```bash
# Clear everything and start fresh
rm -rf node_modules package-lock.json dist
npm cache clean --force
npm install
npm run build
```

### Issue 4: Port 5173 already in use
**Solution:**
```bash
# Kill process on port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F

# Or use different port:
npm run dev -- --port 5174
```

### Issue 5: Questions look old
**Solution:** 
- Verify you pulled latest code (Step 2)
- Check commit hash matches: `6735429`
- Do hard refresh (Step 7)
- Check file: `src/data/questionBank.js` should be ~2,800 lines (not 6,400)

### Issue 6: Study Guide missing
**Solution:**
- Verify files exist:
  ```bash
  ls -la src/data/*guide.json
  ls -la src/components/StudyGuide.*
  ```
- Should see:
  - `src/data/tn_study_guide.json`
  - `src/data/tx_study_guide.json`
  - `src/components/StudyGuide.jsx`
  - `src/components/StudyGuide.css`
- If missing, you're on wrong branch or haven't pulled latest

---

## 📞 Still Having Issues?

### Debug Information to Collect:

1. **Current branch:**
   ```bash
   git branch
   ```

2. **Latest commit:**
   ```bash
   git log --oneline -1
   ```

3. **File count:**
   ```bash
   ls -la *.docx | wc -l
   ```
   Should show: **4 files** (not 7)

4. **Question bank size:**
   ```bash
   wc -l src/data/questionBank.js
   ```
   Should show: **~2,800 lines** (not 6,400)

5. **Study Guide files exist:**
   ```bash
   ls src/data/*guide.json
   ls src/components/StudyGuide.*
   ```
   Should list 5 files

6. **Node and npm versions:**
   ```bash
   node --version
   npm --version
   ```

7. **Browser console errors:**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for any red errors
   - Take screenshot

---

## 🎯 Expected File Structure

After pulling latest code, you should have:

```
Auction-Academy-Test-Prep/
├── public/
│   ├── auction-academy-logo.png
│   ├── icon.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx ✓
│   │   ├── Flashcards.jsx ✓
│   │   ├── Game.jsx ✓
│   │   ├── StateSelector.jsx ✓
│   │   ├── StudyGuide.jsx ✓ (NEW - must exist!)
│   │   ├── Test.jsx ✓
│   │   └── *.css files
│   ├── data/
│   │   ├── questionBank.js ✓ (~2,800 lines)
│   │   ├── tn_study_guide.json ✓ (NEW - must exist!)
│   │   └── tx_study_guide.json ✓ (NEW - must exist!)
│   └── ...
├── Tennessee Auctioneer Exam Bank (2).docx ✓
├── tx Practice Questions and study guide (5).docx ✓
├── tx Practice Questions and study guide (2).docx ✓
├── tn Study guide.docx ✓
├── package.json
└── ...
```

**Should NOT have:**
- ❌ `Tennessee Auctioneer Exam Bank.docx` (old version)
- ❌ `extract_*.py` scripts (cleaned up)
- ❌ `*_questions*.json` files in root (cleaned up)

---

## 🚀 Quick Start Command Sequence

If you want to start completely fresh:

```bash
# Navigate to project
cd /path/to/Auction-Academy-Test-Prep

# Make sure on correct branch
git checkout copilot/create-auctioneer-exam-prep

# Pull latest
git pull origin copilot/create-auctioneer-exam-prep

# Clean everything
rm -rf node_modules package-lock.json dist

# Fresh install
npm install

# Build
npm run build

# Run
npm run dev
```

Then open `http://localhost:5173` with hard refresh (Ctrl+Shift+R).

---

## ✅ Success Indicators

You'll know you have the correct version when you see:

1. **Dashboard has 5 cards** (not 3)
2. **Study Guide button exists** (5th card)
3. **Topics section at bottom** shows 15 TN topics or 4 TX topics
4. **Questions have detailed topic labels** like "Definitions (T.C.A. § 62-19-101)"
5. **Study Guide viewer works** with search and print button
6. **Only 4 DOCX files** in root directory

---

## 📧 Contact Support

If you've followed all steps and still have issues, provide:
1. Screenshot of what you see
2. Output of debug commands above
3. Browser console errors
4. Operating system (Windows/Mac/Linux)
