# Decora Portfolio - Quick Start Guide

## ⚡ 30-Second Setup

```bash
# 1. Go to project directory
cd /Users/affanzahir/code/archihtml-625/portfolio-nextjs

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:3000
```

**That's it!** Your site is now running. ✅

## 🎯 First 10 Minutes

### What to Test

1. **Open home page** - http://localhost:3000
   - See hero section
   - Scroll through all sections
   - Click navigation links

2. **Test navigation**
   - Click "Services" in header
   - Click "Projects" in header
   - Click "About" in header
   - Click "Contact" in header
   - Test mobile menu (resize browser to <640px)

3. **Try a service page**
   - http://localhost:3000/services/furniture-layouts
   - See service details
   - Click related services

4. **Try a project page**
   - http://localhost:3000/projects/eco-green-interior
   - See project gallery
   - Check testimonial

5. **Test contact form**
   - http://localhost:3000/contact
   - Try submitting the form

## 📝 First Changes (5 minutes)

### Update Company Name

**File**: `/app/page.tsx`

```typescript
// Find this line (around line 7):
subtitle="Interior Design Studio"

// Change to:
subtitle="Your Company Name"
```

### Add Your Images

1. Replace logo: `/public/logo/logo.jpeg`
2. Replace service images: `/public/images/services/`
3. Replace project images: `/public/images/portfolio-general/`

### Update Services

**File**: `/lib/data/services.ts`

```typescript
// Find the services array and edit:
{
  id: '1',
  slug: 'furniture-layouts',
  title: 'Furniture Layouts',
  shortDescription: 'Your description here', // ← EDIT THIS
  fullDescription: 'Your full description here', // ← EDIT THIS
  // ... rest of service
}
```

### Update Projects

**File**: `/lib/data/projects.ts`

```typescript
// Find the projects array and edit:
{
  id: '1',
  slug: 'project-name',
  title: 'Your Project Title', // ← EDIT THIS
  shortDescription: 'Your project description', // ← EDIT THIS
  // ... rest of project
}
```

## 🎨 10-Minute Customization

### Change Colors

**File**: `/tailwind.config.ts`

```typescript
colors: {
  primary: '#ffd500',  // ← CHANGE THIS (yellow to your color)
  dark: '#18191B',     // ← OR CHANGE THIS
}
```

### Update Contact Info

**File**: `/app/contact/page.tsx`

Find these sections and update:

```typescript
href="tel:1800899900"  // ← Change phone
"info@decora.com"       // ← Change email
"Monday - Friday"       // ← Change hours
"08:00 - 16:00"        // ← Change times
```

### Update Social Links

**File**: `/components/Header.tsx` and `/components/Footer.tsx`

```typescript
<a href="#">  // ← Replace # with your social links
  <i className="fab fa-facebook-f"></i>
</a>
```

## 📱 Testing on Mobile

### Option 1: Browser DevTools
1. Press `F12` (or `Cmd+Option+I` on Mac)
2. Click device toggle (mobile icon)
3. Test responsiveness

### Option 2: Real Device
1. Run: `npm run dev`
2. Get local IP: `ipconfig getifaddr en0` (Mac)
3. Visit: `http://YOUR_IP:3000` on phone

## 🚀 Ready for Production?

### Build for Production

```bash
npm run build
npm start
```

Server runs on http://localhost:3000

### Deploy to Vercel (FREE)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click "Deploy"
5. Done! 🎉

### Deploy to Netlify (FREE)

1. Build: `npm run build`
2. Go to https://netlify.com
3. Drag & drop `.next` folder
4. Done! 🎉

## 🔧 Common Quick Tasks

### Add a New Service

1. Open `/lib/data/services.ts`
2. Copy a service object
3. Update id, slug, title, description
4. Add image file to `/public/images/services/`
5. **Page auto-created!** Visit `/services/your-slug`

### Add a New Project

1. Open `/lib/data/projects.ts`
2. Copy a project object
3. Update id, slug, title, description
4. Add image to `/public/images/portfolio-general/`
5. **Page auto-created!** Visit `/projects/your-slug`

### Change Hero Image

**File**: `/app/page.tsx` (line 4)

```typescript
image="/images/hero/bg/1.jpg"  // ← CHANGE THIS
```

Available images:
- `/images/hero/bg/1.jpg` (default)
- `/images/hero/bg/2.jpg`
- `/images/background/` (many more)

### Disable Mobile Menu

**File**: `/components/Header.tsx`

Find and remove this section:
```typescript
{/* Mobile Menu Button */}
```

## 📚 File Reference

Quick file locations for common tasks:

| Task | File |
|------|------|
| Change colors | `tailwind.config.ts` |
| Update logo | `/public/logo/logo.jpeg` |
| Edit services | `/lib/data/services.ts` |
| Edit projects | `/lib/data/projects.ts` |
| Edit testimonials | `/lib/data/testimonials.ts` |
| Change home copy | `/app/page.tsx` |
| Change about page | `/app/about/page.tsx` |
| Update contact info | `/app/contact/page.tsx` |
| Add CSS | `/app/globals.css` |
| Component updates | `/components/*.tsx` |

## ❓ Troubleshooting

### Port 3000 already in use

```bash
# Kill process on port 3000
kill -9 $(lsof -t -i:3000)

# Or use different port
npm run dev -- -p 3001
```

### Styles not updating

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Images not showing

1. Check image path is correct
2. Verify file exists in `/public/images/`
3. Use correct path: `/images/folder/file.jpg`
4. Don't use `../` paths - use absolute from `/public`

### Build fails

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎓 Next Steps

1. **Explore** - Click around the site
2. **Customize** - Edit your content
3. **Test** - Try on mobile/desktop
4. **Deploy** - Push to Vercel/Netlify
5. **Monitor** - Check analytics
6. **Iterate** - Add more content regularly

## 📞 Quick Help

**Need help?** Check these files:

- 📖 README.md - Full documentation
- 🛠 SETUP.md - Setup & customization
- 📊 PROJECT_STRUCTURE.md - File organization
- 📋 IMPLEMENTATION_SUMMARY.md - What was built

## ✅ Success Checklist

- [ ] Site runs at http://localhost:3000
- [ ] Navigation works
- [ ] Mobile menu works (resize to <640px)
- [ ] Can view all pages
- [ ] Contact form shows
- [ ] Logo displays
- [ ] Colors show correctly
- [ ] Images load properly

## 🎉 You're Ready!

Your Decora portfolio is now:
- ✅ Running locally
- ✅ Fully customizable
- ✅ Ready for production
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Performance optimized

**Happy building!** 🚀

---

**Quick Links**
- Local: http://localhost:3000
- GitHub: Push your repo
- Vercel: vercel.com (free hosting)
- Netlify: netlify.com (free hosting)
- Docs: See README.md

**Last Updated**: March 11, 2026
