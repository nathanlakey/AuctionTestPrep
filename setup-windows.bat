@echo off
echo.
echo ===================================
echo  Auctioneer Exam Prep Setup
echo ===================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)
echo [√] Git found

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo [√] Node.js found

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not installed!
    echo Please install Node.js from: https://nodejs.org/ (includes npm)
    echo.
    pause
    exit /b 1
)
echo [√] npm found
echo.

echo Step 1/7: Switching to feature branch...
git checkout copilot/create-auctioneer-exam-prep
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to switch branch
    echo Make sure you're in the correct directory
    pause
    exit /b 1
)
echo [√] Branch switched
echo.

echo Step 2/7: Pulling latest changes...
git pull origin copilot/create-auctioneer-exam-prep
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Pull may have failed, continuing anyway...
)
echo [√] Code updated
echo.

echo Step 3/7: Cleaning old files...
if exist node_modules (
    echo Removing node_modules...
    rmdir /s /q node_modules
)
if exist dist (
    echo Removing dist...
    rmdir /s /q dist
)
echo [√] Old files cleaned
echo.

echo Step 4/7: Installing dependencies...
echo This may take a few minutes...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo [√] Dependencies installed
echo.

echo Step 5/7: Building application...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo [√] Application built
echo.

echo Step 6/7: Starting development server...
echo.
echo ===================================
echo Setup Complete!
echo.
echo The development server will start now.
echo Open your browser to: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server when done.
echo ===================================
echo.

call npm run dev
