# Decora Portfolio - Setup & Deployment Guide

## Quick Start

### 1. Run Development Server

```bash
cd /Users/affanzahir/code/archihtml-625/portfolio-nextjs
npm run dev
```

The application will start at: **http://localhost:3000**

### 2. Build for Production

```bash
npm run build
npm start
```

## Project Structure Overview

### Key Directories

```
📦 portfolio-nextjs
├── 📂 app/              # Pages and routes
├── 📂 components/       # React components
├── 📂 lib/data/         # Content data (services, projects, testimonials)
├── 📂 public/           # Static assets (images, CSS, fonts, logo)
├── 📂 types/            # TypeScript interfaces
└── 📄 package.json      # Dependencies
```

## Pages Created

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Main landing page |
| About | `/about` | Company story & team |
| Services | `/services` | All services grid |
| Service Detail | `/services/[slug]` | Individual service pages (6 total) |
| Projects | `/projects` | Portfolio gallery |
| Project Detail | `/projects/[slug]` | Individual project pages |
| Contact | `/contact` | Contact form |

## Customization Guide

### 1. Update Company Information

**File**: `lib/data/services.ts` and `lib/data/projects.ts`

Update the data arrays with your actual:
- Service descriptions
- Project information
- Client testimonials
- Images and links

### 2. Change Logo

1. Replace the logo file: `/public/logo/logo.jpeg`
2. The Header and Footer automatically use this logo

### 3. Update Contact Email

**File**: `app/contact/page.tsx`

Look for the email configuration section and add your email service integration.

### 4. Modify Colors

**File**: `tailwind.config.ts`

Change the primary color from yellow:
```typescript
colors: {
  primary: '#your-color', // Change this
  dark: '#18191B',
}
```

### 5. Add New Pages

Create a new folder in `/app` with a `page.tsx` file:
```
/app/new-page/
├── page.tsx
```

## Available Scripts

```bash
# Development
npm run dev        # Start dev server on http://localhost:3000

# Production
npm run build      # Create optimized build
npm start          # Run production build

# Code Quality
npm run lint       # Run ESLint
```

## Technologies Used

- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Archi CSS
- **UI Components**: React 18
- **Icons**: Font Awesome 6
- **Fonts**: Poppins (from Google Fonts)

## File Organization

### Components

All reusable components are in `/components`:
- `Header.tsx` - Navigation
- `Footer.tsx` - Footer with links
- `Hero.tsx` - Hero sections
- Various section components (StatsSection, ServicesCarousel, etc.)
- UI primitives in `/ui` folder

### Data Management

Content is stored in `/lib/data/`:
- `services.ts` - 6 services
- `projects.ts` - 4 projects
- `testimonials.ts` - 3 testimonials

### Styling

- Global styles: `/app/globals.css`
- Archi CSS files: `/public/css/`
- Tailwind config: `tailwind.config.ts`

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy with one click

### Option 2: Netlify

1. Build: `npm run build`
2. Connect build folder to Netlify
3. Deploy

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create `.env.local` if needed:

```env
# API endpoints
NEXT_PUBLIC_API_URL=your_api_url

# Third-party services
CONTACT_FORM_API=your_form_service

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Performance Tips

1. **Images**: All images are in `/public/images/` - organized by category
2. **CSS**: Import only needed Archi CSS files in `globals.css`
3. **Fonts**: Using web fonts from Google Fonts (preloaded in layout)
4. **Code Splitting**: Components are automatically code-split by Next.js

## Common Customizations

### Add a New Service

1. Edit `/lib/data/services.ts`
2. Add new service object to the `services` array
3. Ensure it has all required fields (id, slug, title, image, etc.)
4. Service detail page is automatically created

### Add a New Project

1. Edit `/lib/data/projects.ts`
2. Add new project object to the `projects` array
3. Add images to `/public/images/portfolio/`
4. Project detail page is automatically created

### Update Testimonials

1. Edit `/lib/data/testimonials.ts`
2. Update testimonial content in the `testimonials` array
3. Changes reflect on home page testimonial slider

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### CSS Not Loading

Make sure all CSS files are properly imported in:
- `/app/globals.css`
- Individual component style attributes

## Contact Form Setup

Currently the contact form logs to console. To enable email notifications:

1. Choose an email service (SendGrid, Resend, Nodemailer, etc.)
2. Create API route: `/app/api/contact/route.ts`
3. Implement form submission in `/app/contact/page.tsx`

Example with SendGrid:

```typescript
// app/api/contact/route.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const data = await request.json();

  await sgMail.send({
    to: process.env.CONTACT_EMAIL!,
    from: 'noreply@decora.com',
    subject: data.subject,
    text: data.message,
  });

  return Response.json({ success: true });
}
```

## Next Steps

1. ✅ Site is running and ready
2. 📝 Update your company information in data files
3. 📸 Add your images to `/public/images/`
4. 🔧 Customize colors and branding
5. ✉️ Set up email notifications for contact form
6. 🚀 Deploy to production

---

**Need Help?**
- Check README.md for more documentation
- Review the plan file at `plan.md`
- All code is well-commented and organized

Happy building! 🚀
