# AWS Lightsail Deployment Guide

Complete guide for deploying Axis Automated Systems website to AWS Lightsail.

## Prerequisites

- AWS Account
- Domain name (recommended: purchased through Route 53 or any domain registrar)
- Basic knowledge of SSH and command line

## Quick Start

### 1. Create AWS Lightsail Instance

1. Log in to [AWS Lightsail Console](https://lightsail.aws.amazon.com/)
2. Click "Create instance"
3. Select instance location closest to your target audience
4. Pick your instance image:
   - Platform: Linux/Unix
   - Blueprint: OS Only → Ubuntu 22.04 LTS
5. Choose instance plan:
   - Recommended: $10/month (2 GB RAM, 1 vCPU, 60 GB SSD)
   - Minimum: $5/month for basic websites
6. Name your instance: `axis-automated-systems`
7. Click "Create instance"

### 2. Configure Networking

1. Go to your instance's "Networking" tab
2. Add firewall rules:
   - HTTP (port 80)
   - HTTPS (port 443)
   - SSH (port 22) - should be enabled by default

### 3. Setup Static IP (Recommended)

1. In Lightsail console, go to "Networking" → "Create static IP"
2. Attach it to your instance
3. Note the IP address for DNS configuration

### 4. Configure DNS

Point your domain to your Lightsail instance:

**Using Route 53:**
1. Go to Route 53 console
2. Create/select your hosted zone
3. Create A record:
   - Name: `@` (or leave blank)
   - Type: A
   - Value: Your static IP
4. Create CNAME record:
   - Name: `www`
   - Type: CNAME
   - Value: Your domain name

**Using other registrars:**
- Add an A record pointing to your Lightsail static IP
- Add a CNAME record for www subdomain

DNS propagation can take up to 48 hours but usually completes within 1-2 hours.

## Deployment Steps

### Option 1: Automated Deployment (Recommended)

1. **Connect to your instance via SSH:**
   ```bash
   ssh ubuntu@YOUR_STATIC_IP
   ```
   Or use the browser-based SSH from Lightsail console.

2. **Upload your project files:**
   ```bash
   # On your local machine
   cd /path/to/Axis-Automated-Systems

   # Create a tarball
   tar -czf axis-automated-systems.tar.gz \
     --exclude='node_modules' \
     --exclude='.next' \
     --exclude='.git' \
     *

   # Upload to server
   scp axis-automated-systems.tar.gz ubuntu@YOUR_STATIC_IP:~/
   ```

3. **Extract and deploy on server:**
   ```bash
   # SSH into server
   ssh ubuntu@YOUR_STATIC_IP

   # Extract files
   mkdir -p axis-automated-systems
   tar -xzf axis-automated-systems.tar.gz -C axis-automated-systems/
   cd axis-automated-systems

   # Update domain in deploy script
   nano deploy/deploy.sh
   # Change DOMAIN and EMAIL variables to your actual values

   # Run deployment script
   chmod +x deploy/deploy.sh
   sudo deploy/deploy.sh
   ```

4. **Configure environment variables:**
   ```bash
   cd /home/ubuntu/axis-automated-systems
   nano .env
   # Update with your actual values

   # Restart application
   pm2 restart axis-automated-systems
   ```

### Option 2: Manual Deployment

If you prefer manual control:

1. **Install dependencies:**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install Nginx
   sudo apt install -y nginx

   # Install Certbot
   sudo apt install -y certbot python3-certbot-nginx

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Setup application:**
   ```bash
   cd /home/ubuntu/axis-automated-systems
   npm install
   npm run build
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   nano .env  # Edit with your values
   ```

4. **Start with PM2:**
   ```bash
   pm2 start npm --name "axis-automated-systems" -- start
   pm2 startup systemd
   pm2 save
   ```

5. **Configure Nginx:**
   ```bash
   # Update nginx.conf with your domain
   sudo nano deploy/nginx.conf

   # Copy to nginx directory
   sudo cp deploy/nginx.conf /etc/nginx/sites-available/axis-automated-systems
   sudo ln -s /etc/nginx/sites-available/axis-automated-systems /etc/nginx/sites-enabled/
   sudo rm /etc/nginx/sites-enabled/default

   # Test and reload
   sudo nginx -t
   sudo systemctl reload nginx
   ```

6. **Setup SSL:**
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

## Email Service Setup

The contact form requires an email service. Choose one:

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env`:
   ```
   RESEND_API_KEY=your_api_key
   ```
4. Update `app/api/contact/route.ts` to use Resend
5. Install package: `npm install resend`

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Add to `.env`:
   ```
   SENDGRID_API_KEY=your_api_key
   ```
4. Install package: `npm install @sendgrid/mail`

### Option 3: AWS SES

1. Configure SES in your AWS account
2. Verify your domain
3. Create IAM credentials
4. Add to `.env`:
   ```
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   ```
5. Install package: `npm install @aws-sdk/client-ses`

## Post-Deployment

### 1. Verify Deployment

- Visit `https://yourdomain.com`
- Test contact form
- Check mobile responsiveness
- Verify SSL certificate (should show padlock)

### 2. Monitor Application

```bash
# View logs
pm2 logs axis-automated-systems

# Check status
pm2 status

# Monitor resources
pm2 monit
```

### 3. Setup Monitoring (Optional)

```bash
# PM2 monitoring
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

## Updating the Site

When you need to update your website:

```bash
# SSH into server
ssh ubuntu@YOUR_STATIC_IP

# Navigate to app directory
cd /home/ubuntu/axis-automated-systems

# Pull latest changes (if using git)
git pull

# Or upload new files via scp

# Install new dependencies (if any)
npm install

# Rebuild
npm run build

# Restart
pm2 restart axis-automated-systems
```

## Backup

### Automated Backups

Lightsail offers automatic snapshots:
1. Go to instance → "Snapshots" tab
2. Enable automatic snapshots
3. Choose frequency (daily recommended)

### Manual Backup

```bash
# Backup application files
cd /home/ubuntu
tar -czf axis-backup-$(date +%Y%m%d).tar.gz axis-automated-systems/

# Download to local machine
scp ubuntu@YOUR_STATIC_IP:~/axis-backup-*.tar.gz ./
```

## Troubleshooting

### Site Not Loading

```bash
# Check Nginx
sudo systemctl status nginx
sudo nginx -t

# Check application
pm2 status
pm2 logs axis-automated-systems
```

### SSL Issues

```bash
# Renew certificate
sudo certbot renew --dry-run

# Force renew
sudo certbot renew --force-renewal
```

### Out of Memory

If you're on the $5/month plan and experiencing issues:
1. Upgrade to $10/month plan
2. Or optimize build process
3. Monitor with: `free -h` and `htop`

### Contact Form Not Working

1. Check `.env` file has correct email API keys
2. Verify email service integration in `app/api/contact/route.ts`
3. Check logs: `pm2 logs axis-automated-systems`

## Security Best Practices

1. **Keep system updated:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Configure firewall:**
   ```bash
   sudo ufw status
   ```

3. **Regular backups:**
   - Enable automatic snapshots in Lightsail
   - Test restore process

4. **Monitor logs:**
   ```bash
   pm2 logs
   sudo tail -f /var/log/nginx/access.log
   ```

5. **Use strong passwords:**
   - For SSH keys
   - For any admin panels

## Performance Optimization

1. **Enable caching:**
   - Already configured in nginx.conf
   - Next.js handles static asset caching

2. **Monitor performance:**
   ```bash
   # CPU and memory
   htop

   # Disk usage
   df -h

   # Application metrics
   pm2 monit
   ```

3. **Optimize images:**
   - Next.js automatically optimizes images
   - Consider using WebP format

## Cost Estimate

- **Lightsail Instance:** $10/month (recommended)
- **Static IP:** Free (while attached to instance)
- **SSL Certificate:** Free (Let's Encrypt)
- **Email Service:**
  - Resend: Free tier (100 emails/day)
  - SendGrid: Free tier (100 emails/day)
  - AWS SES: $0.10 per 1000 emails

**Total:** ~$10-15/month

## Support

If you encounter issues:
1. Check logs: `pm2 logs axis-automated-systems`
2. Check Nginx: `sudo nginx -t`
3. Review this documentation
4. Contact AWS Support (if account issue)

## Additional Resources

- [AWS Lightsail Documentation](https://docs.aws.amazon.com/lightsail/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
