#!/bin/bash

# Auctioneer Exam Prep Setup Script for Mac/Linux/Git Bash
echo ""
echo "==================================="
echo " Auctioneer Exam Prep Setup"
echo "==================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Git is installed
echo -e "${YELLOW}Checking prerequisites...${NC}"
if ! command -v git &> /dev/null; then
    echo -e "${RED}[X] ERROR: Git is not installed!${NC}"
    echo "Please install Git from: https://git-scm.com/"
    echo ""
    exit 1
fi
echo -e "${GREEN}[√] Git found: $(git --version)${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}[X] ERROR: Node.js is not installed!${NC}"
    echo "Please install Node.js from: https://nodejs.org/"
    echo ""
    exit 1
fi
echo -e "${GREEN}[√] Node.js found: $(node --version)${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}[X] ERROR: npm is not installed!${NC}"
    echo "Please install Node.js from: https://nodejs.org/ (includes npm)"
    echo ""
    exit 1
fi
echo -e "${GREEN}[√] npm found: v$(npm --version)${NC}"
echo ""

# Step 1: Switch branch
echo -e "${YELLOW}Step 1/7: Switching to feature branch...${NC}"
if git checkout copilot/create-auctioneer-exam-prep 2>/dev/null; then
    echo -e "${GREEN}[√] Branch switched${NC}"
else
    echo -e "${RED}[X] ERROR: Failed to switch branch${NC}"
    echo "Make sure you're in the correct directory"
    exit 1
fi
echo ""

# Step 2: Pull latest changes
echo -e "${YELLOW}Step 2/7: Pulling latest changes...${NC}"
if git pull origin copilot/create-auctioneer-exam-prep; then
    echo -e "${GREEN}[√] Code updated${NC}"
else
    echo -e "${YELLOW}[!] WARNING: Pull may have failed, continuing anyway...${NC}"
fi
echo ""

# Step 3: Clean old files
echo -e "${YELLOW}Step 3/7: Cleaning old files...${NC}"
if [ -d "node_modules" ]; then
    echo "Removing node_modules..."
    rm -rf node_modules
fi
if [ -d "dist" ]; then
    echo "Removing dist..."
    rm -rf dist
fi
echo -e "${GREEN}[√] Old files cleaned${NC}"
echo ""

# Step 4: Install dependencies
echo -e "${YELLOW}Step 4/7: Installing dependencies...${NC}"
echo "This may take a few minutes..."
if npm install; then
    echo -e "${GREEN}[√] Dependencies installed${NC}"
else
    echo -e "${RED}[X] ERROR: npm install failed${NC}"
    exit 1
fi
echo ""

# Step 5: Build application
echo -e "${YELLOW}Step 5/7: Building application...${NC}"
if npm run build; then
    echo -e "${GREEN}[√] Application built${NC}"
else
    echo -e "${RED}[X] ERROR: Build failed${NC}"
    exit 1
fi
echo ""

# Step 6: Start dev server
echo -e "${YELLOW}Step 6/7: Starting development server...${NC}"
echo ""
echo "==================================="
echo -e "${GREEN}Setup Complete!${NC}"
echo ""
echo "The development server will start now."
echo -e "Open your browser to: ${YELLOW}http://localhost:5173${NC}"
echo ""
echo "Press Ctrl+C to stop the server when done."
echo "==================================="
echo ""

npm run dev
