# Auctioneer Exam Prep Setup Script for Windows PowerShell
Write-Host ""
Write-Host "===================================" -ForegroundColor Cyan
Write-Host " Auctioneer Exam Prep Setup" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>&1
    Write-Host "[√] Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "[X] ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if Node.js is installed
try {
    $nodeVersion = node --version 2>&1
    Write-Host "[√] Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[X] ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version 2>&1
    Write-Host "[√] npm found: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[X] ERROR: npm is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/ (includes npm)" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host ""

# Step 1: Switch branch
Write-Host "Step 1/7: Switching to feature branch..." -ForegroundColor Yellow
try {
    git checkout copilot/create-auctioneer-exam-prep 2>&1 | Out-Null
    Write-Host "[√] Branch switched" -ForegroundColor Green
} catch {
    Write-Host "[X] ERROR: Failed to switch branch" -ForegroundColor Red
    Write-Host "Make sure you're in the correct directory" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host ""

# Step 2: Pull latest changes
Write-Host "Step 2/7: Pulling latest changes..." -ForegroundColor Yellow
try {
    git pull origin copilot/create-auctioneer-exam-prep
    Write-Host "[√] Code updated" -ForegroundColor Green
} catch {
    Write-Host "[!] WARNING: Pull may have failed, continuing anyway..." -ForegroundColor Yellow
}
Write-Host ""

# Step 3: Clean old files
Write-Host "Step 3/7: Cleaning old files..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "Removing node_modules..." -ForegroundColor Gray
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
}
if (Test-Path "dist") {
    Write-Host "Removing dist..." -ForegroundColor Gray
    Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
}
Write-Host "[√] Old files cleaned" -ForegroundColor Green
Write-Host ""

# Step 4: Install dependencies
Write-Host "Step 4/7: Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
try {
    npm install
    if ($LASTEXITCODE -ne 0) { throw "npm install failed" }
    Write-Host "[√] Dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "[X] ERROR: npm install failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host ""

# Step 5: Build application
Write-Host "Step 5/7: Building application..." -ForegroundColor Yellow
try {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "Build failed" }
    Write-Host "[√] Application built" -ForegroundColor Green
} catch {
    Write-Host "[X] ERROR: Build failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host ""

# Step 6: Start dev server
Write-Host "Step 6/7: Starting development server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "The development server will start now." -ForegroundColor White
Write-Host "Open your browser to: " -NoNewline -ForegroundColor White
Write-Host "http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server when done." -ForegroundColor Yellow
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

npm run dev
