# 🔨 Auctioneer Exam Prep - Auction Academy

A comprehensive web application designed to help auctioneer students prepare for their state licensing exams. Built with React and modern web technologies.

## 🚀 Simplest Way to Open This Website

### 🍎 Mac Users
**Use our automated setup script:**
```bash
cd Auction-Academy-Test-Prep
chmod +x setup-unix.sh
./setup-unix.sh
```
📘 **[Mac Setup Guide](MAC-SETUP.md)** - Complete guide for macOS users

### 🪟 Windows Users
**Double-click:** `setup-windows.bat`

Or in Command Prompt:
```cmd
cd Auction-Academy-Test-Prep
setup-windows.bat
```

### 🐧 Linux Users
```bash
cd Auction-Academy-Test-Prep
chmod +x setup-unix.sh
./setup-unix.sh
```

---

### Manual Setup (All Platforms)

**First, open Terminal (Mac/Linux) or Command Prompt (Windows)**

Then run these commands:

```bash
# 1. Navigate INTO the downloaded folder (IMPORTANT!)
cd Auction-Academy-Test-Prep

# 2. Install dependencies
npm install

# 3. Start the app
npm run dev
```

Then open your browser to: **http://localhost:5173**

> **Don't have Node.js?** [Download it here](https://nodejs.org/) (takes 2 minutes to install)

> ⚠️ **Common mistake:** Make sure you `cd` into the project folder first! If you get an error about "package.json not found", you're in the wrong directory.

---

## ⚠️ Important: How to Run This App

**This is a React web application that CANNOT be opened directly by double-clicking `index.html`.** 

You must either:
1. **Run the development server** (recommended for testing) - See [Quick Start](#-quick-start) below
2. **Build and serve the production version** - See [Deployment Guide](#-deployment-guide) below

📖 **[Click here for a simple 1-page guide](DEPLOYMENT.md)** if you're having trouble getting started.

📘 **[Learn about Static vs Server Hosting](HOSTING-GUIDE.md)** - Understand hosting options for this app.

🔧 **[TROUBLESHOOTING GUIDE](TROUBLESHOOTING.md)** - Not seeing the latest features? Follow this step-by-step guide.

## 🎯 Features

### State-Specific Preparation
- Select your state to access state-specific licensing exam questions
- Questions tailored to state laws and regulations
- All 50 US states supported

### Multiple Study Modes

#### 📝 Full Practice Tests
- Complete 75-question exams simulating the real licensing test
- Realistic test environment with timer
- Progress tracking and question navigation
- Comprehensive results with detailed explanations

#### 🎯 Topic Quizzes
- Focus on specific subjects like:
  - Auction Basics
  - Contract Law
  - Ethics and Professional Conduct
  - Bidding Procedures
  - UCC (Uniform Commercial Code)
  - Real Estate Auctions
  - Personal Property
  - State-Specific Laws
  - Advertising and Marketing
  - Record Keeping
  - Licensing Requirements
  - Consumer Protection
- Customizable quiz length (5, 10, 15, or 20 questions)
- Filter by topic or study all topics

#### 🎴 Flashcards
- Interactive flashcard system for quick review
- Click to flip and reveal answers
- Track cards you know
- Focus on specific topics
- Beautiful, engaging interface

#### 🎮 Study Games
- Gamified learning experience
- Score tracking and streak system
- Immediate feedback with explanations
- Make studying fun and engaging

### Smart Learning Features
- **Instant Feedback**: See correct answers immediately after submitting
- **Detailed Explanations**: Understand why each answer is correct
- **Progress Tracking**: Monitor answered vs. unanswered questions
- **Flexible Navigation**: Jump to any question in a test
- **Results Review**: Comprehensive breakdown of performance
- **Time Tracking**: Monitor how long you spend on tests

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Option 1: Run Development Server (Recommended for Testing)

1. **Download or clone the repository:**
```bash
git clone https://github.com/AuctionAcademy/Auction-Academy-Test-Prep.git
cd Auction-Academy-Test-Prep
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser** and navigate to: `http://localhost:5173`

The app will automatically reload when you make changes!

### 💳 Setting Up Stripe Payments (`.env` File)

To enable the Stripe payment feature, you need to create a `.env` file in the project root with your Stripe secret key.

**Step 1: Create the `.env` file**

Copy the example file:
```bash
cp .env.example .env
```

Or create a new file called `.env` in the project root (same folder as `package.json`) with this content:

```env
# Your Stripe secret key (starts with sk_test_ or sk_live_)
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Frontend URL (for Stripe redirect after payment)
CLIENT_URL=http://localhost:5173
```

**Step 2: Get your Stripe secret key**

1. Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Copy your **Secret key** (starts with `sk_test_`) and paste it as `STRIPE_SECRET_KEY`

**Step 3: Start both the backend and frontend servers**

```bash
# Option A: Start both together
npm run dev:all

# Option B: Start separately (in two terminal windows)
npm run server    # Terminal 1: starts the payment server on port 3001
npm run dev       # Terminal 2: starts the frontend on port 5173
```

> ⚠️ **Important:** The `.env` file contains your secret keys and is already listed in `.gitignore` — it will NOT be committed to git. Never share your secret keys publicly.

### Option 2: Build and Deploy for Production

1. **Install dependencies** (if you haven't already):
```bash
npm install
```

2. **Build the production version:**
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

3. **Serve the built files:**

You can use any static file server. Here are a few options:

**Using Node.js `serve` package (easiest):**
```bash
npm install -g serve
serve -s dist -p 3000
```
Then open `http://localhost:3000`

**Using Python (if you have Python installed):**
```bash
cd dist
python -m http.server 8000
```
Then open `http://localhost:8000`

**Using VS Code Live Server extension:**
- Install the "Live Server" extension in VS Code
- Right-click on `dist/index.html` and select "Open with Live Server"

## 📱 Usage

1. **Select Your State**: Choose the state where you'll be taking your licensing exam
2. **Choose Study Mode**: Pick from practice tests, quizzes, flashcards, or games
3. **Customize Your Experience**: Select specific topics or quiz lengths
4. **Study and Learn**: Work through questions with immediate feedback
5. **Review Results**: Analyze your performance and learn from mistakes

## 🎨 Branding

The app features Auction Academy's brand identity:
- Primary colors: Navy Blue (#1e3a8a) and Bright Blue (#3b82f6)
- Professional, clean design
- User-friendly interface optimized for learning
- Mobile-responsive layout

## 🏗️ Technology Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Custom CSS with modern design patterns
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Component-based navigation

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── StateSelector.jsx    # State selection screen
│   ├── Dashboard.jsx         # Main dashboard
│   ├── Test.jsx             # Test/Quiz component
│   ├── Flashcards.jsx       # Flashcards study mode
│   ├── Game.jsx             # Gamified study mode
│   └── *.css                # Component styles
├── data/
│   └── questionBank.js      # Question database
├── App.jsx              # Main app component
├── App.css              # App styles
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🚨 Troubleshooting

### "The app won't load when I open index.html"

**Problem:** You're trying to open the file directly using `file://` protocol (e.g., `file:///Users/username/Downloads/...index.html`)

**Why it doesn't work:**
- This is a React application that uses JavaScript modules
- Modern browsers block JavaScript modules loaded via `file://` for security reasons (CORS policy)
- The app needs to be served through a web server (HTTP/HTTPS protocol)

**Solution:** Follow the [Quick Start](#-quick-start) guide above to either:
1. Run the development server (`npm run dev`)
2. Build and serve the production version

### "I don't have Node.js installed"

**Solution:** 
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Install it (this also installs npm)
3. Restart your terminal/command prompt
4. Verify installation: `node --version` and `npm --version`

### "npm install fails"

**Solutions:**
- Make sure you're in the correct directory (where `package.json` is located)
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again
- Make sure you have a stable internet connection
- Try running with admin/sudo privileges if permission errors occur

### "Port 5173 is already in use"

**Solution:**
- Kill the process using that port, or
- Vite will automatically try the next available port
- Check the terminal output for the actual URL

## 📤 Deployment Guide

### Deploying to Web Servers

After building (`npm run build`), upload the contents of the `dist/` folder to your web server.

### Popular Hosting Options

**Netlify (Free & Easy):**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Your app is live!

**Vercel (Free & Easy):**
1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel --prod`

**GitHub Pages:**
1. Build the project: `npm run build`
2. Install gh-pages: `npm install -g gh-pages`
3. Deploy: `gh-pages -d dist`

**Traditional Web Hosting (cPanel, etc.):**
1. Build the project: `npm run build`
2. Upload everything in the `dist/` folder via FTP
3. Configure your web server to serve `index.html` for all routes (SPA configuration)

### Important Note for Production

Make sure your web server is configured to:
- Serve `index.html` for all routes (SPA configuration)
- Enable gzip compression for faster loading
- Set proper caching headers for static assets

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding Questions

Questions are stored in `src/data/questionBank.js`. To add questions for a state:

1. Add questions to the `questionBank` object using the state name as the key
2. Follow the question format:
```javascript
{
  id: 1,
  topic: 'Topic Name',
  question: 'Question text?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correctAnswer: 0, // Index of correct option (0-3)
  explanation: 'Explanation of why this is correct'
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary software owned by Auction Academy.

## 📞 Support

For questions or support, please contact Auction Academy.

---

**Auction Academy** - Preparing the next generation of professional auctioneers
