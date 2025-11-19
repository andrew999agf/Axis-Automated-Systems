#!/bin/bash

# Quick Update Script for Axis Automated Systems
# Run this script to pull latest changes and restart the app

echo "🚀 Updating Axis Automated Systems..."
echo ""

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull

# Install any new dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Restart the app with PM2
echo "♻️  Restarting application..."
pm2 restart axis-automated-systems

# Show status
echo ""
echo "✅ Update complete!"
echo ""
pm2 status

echo ""
echo "🌐 Your site is now updated and running!"
echo "Check it at: http://$(curl -s ifconfig.me)"
