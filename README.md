# Axis Automated Systems - Business Website

Professional business website for Axis Automated Systems, an AI-backed business consulting LLC specializing in building AI-coded automation tools for businesses.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Optimized for speed with Next.js 15
- 🎭 **Engaging Animations** - Framer Motion powered interactions
- 📧 **Contact Form** - Integrated with email services (Resend/SendGrid/AWS SES)
- 💬 **Auto-scrolling Reviews** - Dynamic testimonials carousel
- 🔒 **Production Ready** - Configured for AWS Lightsail deployment with SSL
- ♿ **Accessible** - WCAG compliant design patterns

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Axis-Automated-Systems
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration (optional for local development).

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
axis-automated-systems/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Services.tsx          # Services overview
│   ├── HowItWorks.tsx        # Process explanation
│   ├── UseCases.tsx          # Real-world examples
│   ├── Pricing.tsx           # Pricing tiers
│   ├── Reviews.tsx           # Testimonials carousel
│   ├── FAQ.tsx               # FAQ accordion
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer with links
├── deploy/
│   ├── nginx.conf            # Nginx configuration
│   ├── deploy.sh             # Automated deployment script
│   └── README.md             # Deployment documentation
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies
```

## Updating Content

### 1. Pricing

Edit `components/Pricing.tsx`:

```typescript
const pricingTiers = [
  {
    name: 'Basic Website',
    setupFee: 150,        // Update setup fee
    monthlyFee: 25,       // Update monthly fee
    // ...
  },
  // Update other tiers as needed
];
```

### 2. Services

Edit `components/Services.tsx`:

```typescript
const services = [
  {
    title: 'Your Service Title',
    description: 'Service description',
    features: ['Feature 1', 'Feature 2'],
    // ...
  },
];
```

### 3. Reviews/Testimonials

Edit `components/Reviews.tsx`:

```typescript
const reviews = [
  {
    name: 'Client Name',
    company: 'Company Name',
    role: 'Job Title',
    rating: 5,
    text: 'Review text here...',
    image: '👤',  // Emoji or image URL
  },
  // Add more reviews
];
```

### 4. FAQ

Edit `components/FAQ.tsx`:

```typescript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...'
  },
  // Add more FAQs
];
```

### 5. Use Cases

Edit `components/UseCases.tsx`:

```typescript
const useCases = [
  {
    industry: 'Industry Name',
    title: 'Solution Title',
    problem: 'Problem description',
    solution: 'Solution description',
    results: ['Result 1', 'Result 2'],
    // ...
  },
];
```

### 6. Contact Information

Edit `components/Footer.tsx` to update:
- Email address
- Social media links
- Company information

### 7. Company Branding

Update in `components/Hero.tsx` and `components/Footer.tsx`:
- Company name
- Logo/icon
- Tagline

### 8. Meta Tags & SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  // ...
};
```

## Email Service Integration

The contact form supports multiple email services. Choose one and configure:

### Option 1: Resend (Recommended)

1. Install package:
   ```bash
   npm install resend
   ```

2. Add to `.env`:
   ```
   RESEND_API_KEY=your_api_key
   ```

3. Update `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'contact@yourdomain.com',
     to: 'your-email@company.com',
     subject: `New Contact: ${data.serviceInterest}`,
     html: // email template
   });
   ```

### Option 2: SendGrid

1. Install package:
   ```bash
   npm install @sendgrid/mail
   ```

2. Add to `.env`:
   ```
   SENDGRID_API_KEY=your_api_key
   ```

3. Update `app/api/contact/route.ts` with SendGrid integration

### Option 3: AWS SES

1. Install package:
   ```bash
   npm install @aws-sdk/client-ses
   ```

2. Configure AWS credentials in `.env`

3. Update `app/api/contact/route.ts` with SES integration

## Deployment

### AWS Lightsail (Recommended)

Complete deployment guide available in [`deploy/README.md`](deploy/README.md).

**Quick deploy:**

1. Upload files to server
2. Run deployment script:
   ```bash
   chmod +x deploy/deploy.sh
   ./deploy/deploy.sh
   ```

See [`deploy/README.md`](deploy/README.md) for detailed instructions.

### Other Platforms

This Next.js application can also be deployed to:

- **Vercel** (easiest): `npx vercel`
- **Netlify**: Connect your git repository
- **AWS Amplify**: Use the console or CLI
- **DigitalOcean App Platform**
- **Railway**
- **Render**

## Performance Optimization

The site is already optimized with:

- ✅ Static generation where possible
- ✅ Image optimization (Next.js Image component ready)
- ✅ Code splitting
- ✅ Gzip compression (nginx config)
- ✅ Caching headers (nginx config)
- ✅ Minimal JavaScript
- ✅ CSS purging (Tailwind)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Customization

### Colors

Update color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#e6f7ff',
    // ... your color scale
  },
  accent: {
    // ... your accent colors
  }
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { Inter, YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  display: 'swap',
});
```

### Animations

Adjust animations in `tailwind.config.ts`:

```typescript
animation: {
  'your-animation': 'your-keyframes 3s ease-in-out infinite',
},
keyframes: {
  'your-keyframes': {
    '0%, 100%': { /* styles */ },
    '50%': { /* styles */ },
  },
}
```

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Development Server Issues

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Restart dev server
npm run dev
```

### Type Errors

```bash
# Regenerate TypeScript types
npx next build --no-lint
```

## Security

- Keep dependencies updated: `npm update`
- Regular security audits: `npm audit`
- Environment variables are never committed
- HTTPS enforced in production
- Security headers configured in nginx

## Contributing

When making changes:

1. Create a feature branch
2. Make your changes
3. Test locally: `npm run build && npm start`
4. Submit pull request

## Support & Maintenance

For issues or questions:

1. Check documentation
2. Review deployment logs
3. Contact support team

## License

Copyright © 2024 Axis Automated Systems LLC. All rights reserved.

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)

---

**Need help?** Refer to the [deployment guide](deploy/README.md) or contact the development team.
