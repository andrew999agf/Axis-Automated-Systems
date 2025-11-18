#!/bin/bash

# Axis Automated Systems - AWS Lightsail Deployment Script
# This script automates the deployment process on AWS Lightsail

set -e  # Exit on error

echo "=========================================="
echo "Axis Automated Systems Deployment"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_DIR="/home/ubuntu/axis-automated-systems"
DOMAIN="yourdomain.com"  # Change this to your actual domain
EMAIL="your-email@example.com"  # Change this for SSL certificate

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_error "Please do not run this script as root"
    exit 1
fi

# Step 1: Update system packages
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Step 2: Install Node.js (LTS version)
if ! command -v node &> /dev/null; then
    print_status "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt install -y nodejs
else
    print_status "Node.js already installed: $(node --version)"
fi

# Step 3: Install Nginx
if ! command -v nginx &> /dev/null; then
    print_status "Installing Nginx..."
    sudo apt install -y nginx
    sudo systemctl enable nginx
else
    print_status "Nginx already installed"
fi

# Step 4: Install Certbot for SSL
if ! command -v certbot &> /dev/null; then
    print_status "Installing Certbot..."
    sudo apt install -y certbot python3-certbot-nginx
else
    print_status "Certbot already installed"
fi

# Step 5: Install PM2 for process management
if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2..."
    sudo npm install -g pm2
    pm2 startup systemd -u ubuntu --hp /home/ubuntu
else
    print_status "PM2 already installed"
fi

# Step 6: Create application directory
if [ ! -d "$APP_DIR" ]; then
    print_status "Creating application directory..."
    mkdir -p $APP_DIR
fi

# Step 7: Copy application files
print_status "Deploying application files..."
# Note: This assumes you're running from the project directory
# You may need to adjust this based on your deployment method
if [ -f "package.json" ]; then
    cp -r * $APP_DIR/
    cd $APP_DIR
else
    print_warning "No package.json found. Make sure to upload your files to $APP_DIR"
    cd $APP_DIR
fi

# Step 8: Install dependencies
if [ -f "package.json" ]; then
    print_status "Installing dependencies..."
    npm install --production
else
    print_warning "Skipping npm install - no package.json found"
fi

# Step 9: Build Next.js application
if [ -f "package.json" ]; then
    print_status "Building Next.js application..."
    npm run build
else
    print_warning "Skipping build - no package.json found"
fi

# Step 10: Configure environment variables
if [ ! -f ".env" ]; then
    print_warning "No .env file found. Creating from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        print_warning "Please edit .env file with your actual configuration"
    fi
fi

# Step 11: Start application with PM2
print_status "Starting application with PM2..."
pm2 delete axis-automated-systems 2>/dev/null || true
pm2 start npm --name "axis-automated-systems" -- start
pm2 save

# Step 12: Configure Nginx
print_status "Configuring Nginx..."
sudo cp deploy/nginx.conf /etc/nginx/sites-available/axis-automated-systems

# Update domain in nginx config
sudo sed -i "s/yourdomain.com/$DOMAIN/g" /etc/nginx/sites-available/axis-automated-systems

# Enable site
sudo ln -sf /etc/nginx/sites-available/axis-automated-systems /etc/nginx/sites-enabled/

# Remove default site
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_status "Testing Nginx configuration..."
sudo nginx -t

# Reload Nginx
print_status "Reloading Nginx..."
sudo systemctl reload nginx

# Step 13: Setup SSL with Certbot
print_status "Setting up SSL certificate..."
print_warning "Make sure your domain DNS is pointing to this server!"
read -p "Press Enter to continue with SSL setup (or Ctrl+C to cancel)..."

sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m $EMAIL || {
    print_warning "SSL setup failed. You can run it manually later with:"
    print_warning "sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
}

# Step 14: Setup automatic SSL renewal
print_status "Setting up automatic SSL renewal..."
sudo systemctl enable certbot.timer

# Step 15: Configure firewall
print_status "Configuring firewall..."
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

echo ""
echo "=========================================="
echo -e "${GREEN}Deployment Complete!${NC}"
echo "=========================================="
echo ""
echo "Your application should now be running at:"
echo "  https://$DOMAIN"
echo ""
echo "Useful commands:"
echo "  pm2 status              - Check application status"
echo "  pm2 logs                - View application logs"
echo "  pm2 restart axis-automated-systems - Restart application"
echo "  sudo systemctl status nginx - Check Nginx status"
echo "  sudo nginx -t           - Test Nginx configuration"
echo ""
print_warning "Don't forget to:"
echo "  1. Update .env file with your actual configuration"
echo "  2. Configure your email service for contact form"
echo "  3. Update social media links in Footer component"
echo ""
