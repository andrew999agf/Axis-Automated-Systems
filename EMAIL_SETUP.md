# Email Service Setup Guide

Your contact form is configured to send emails to: **andrewbergeron999@gmail.com**

Right now, form submissions are logged to the console. To receive actual emails, follow this guide.

## Option 1: Resend (Recommended - Easiest & Free)

**Why Resend?**
- Free tier: 100 emails/day, 3,000/month
- Simple setup (5 minutes)
- No credit card required for free tier
- Reliable delivery

### Setup Steps:

1. **Sign up for Resend:**
   - Go to: https://resend.com/signup
   - Sign up with your email

2. **Get your API key:**
   - After signing in, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name like "Axis Automated Systems"
   - Copy the API key (starts with `re_...`)

3. **Add to your server:**

   **On your AWS server via SSH:**
   ```bash
   cd ~/Axis-Automated-Systems
   nano .env
   ```

   **Add this line:**
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

   **Save and exit:**
   - Press `Ctrl + X`
   - Press `Y`
   - Press `Enter`

4. **Restart your app:**
   ```bash
   pm2 restart axis-automated-systems
   ```

5. **Test it:**
   - Go to your website
   - Fill out the contact form
   - Submit
   - Check andrewbergeron999@gmail.com for the email!

**Note:** With Resend's free tier, emails will come from `onboarding@resend.dev`. To use your own domain (like `contact@yourdomain.com`), you'll need to verify your domain (takes 5 more minutes).

---

## Option 2: SendGrid (Alternative)

**Free tier:** 100 emails/day

### Setup Steps:

1. Sign up: https://signup.sendgrid.com/
2. Get API key from Settings → API Keys
3. Add to `.env`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```
4. Install package:
   ```bash
   npm install @sendgrid/mail
   ```
5. Update `app/api/contact/route.ts` to use SendGrid (see comments in file)
6. Rebuild and restart:
   ```bash
   npm run build
   pm2 restart axis-automated-systems
   ```

---

## Option 3: Gmail SMTP (Use Your Gmail)

**Good for:** Testing and low volume

### Setup Steps:

1. **Enable 2-Step Verification on your Gmail:**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Install nodemailer:**
   ```bash
   cd ~/Axis-Automated-Systems
   npm install nodemailer
   ```

4. **Add to `.env`:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=andrewbergeron999@gmail.com
   SMTP_PASS=your_16_char_app_password
   ```

5. **Update the API route** (you'll need to modify `app/api/contact/route.ts`)

6. **Rebuild and restart:**
   ```bash
   npm run build
   pm2 restart axis-automated-systems
   ```

---

## Testing

After setup, test your contact form:

1. Go to your website
2. Fill out the contact form with test data
3. Submit
4. Check your email (andrewbergeron999@gmail.com)
5. Check server logs: `pm2 logs axis-automated-systems`

---

## Troubleshooting

**Form submits but no email received:**
- Check PM2 logs: `pm2 logs axis-automated-systems`
- Verify API key in `.env` file
- Make sure you restarted the app after adding the API key

**"Failed to submit form" error:**
- Check the API key is correct
- Check PM2 logs for specific error
- Try testing with curl to see the actual error

**Still not working?**
- Contact forms will still log to console with PM2
- Check logs: `pm2 logs axis-automated-systems --lines 50`

---

## Current Status

**Without email service configured:**
- Form submissions work
- Data is logged to PM2 console
- User sees success message
- No email is sent

**After configuring email service:**
- Form submissions work
- Data is logged to PM2 console
- Email is sent to andrewbergeron999@gmail.com
- User sees success message

---

## Recommended: Resend

**I strongly recommend Option 1 (Resend)** because:
- Takes 5 minutes to set up
- Free and reliable
- No need to modify code
- Just add one line to `.env` and restart

The API route is already set up to work with Resend automatically!
