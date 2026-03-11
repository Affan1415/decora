# Decora - Interior Design Portfolio Website

A modern, fully responsive Next.js portfolio website for Decora interior design services. Built with TypeScript, Tailwind CSS, and styled with components from the Archi template.

## 🎯 Overview

Decora is a professional portfolio website showcasing interior design services and completed projects. The application features:

- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Service Pages**: 6 individual service pages with detailed information
- **Project Gallery**: Organized portfolio with project filtering and details
- **Contact Form**: Functional contact form for client inquiries
- **About Page**: Company story, values, and team information
- **Custom Branding**: Yellow color scheme and custom logo integration
- **Modern UI**: Built with React components and Tailwind CSS

## 📁 Project Structure

```
portfolio-nextjs/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   └── [slug]/
│   │       └── page.tsx        # Individual service details
│   ├── projects/
│   │   ├── page.tsx            # Projects gallery
│   │   └── [slug]/
│   │       └── page.tsx        # Project details
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   └── api/                     # API routes (if needed)
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer with links
│   ├── Hero.tsx                 # Hero section component
│   ├── StatsSection.tsx         # Experience counter
│   ├── ServicesCarousel.tsx     # Services grid
│   ├── ProjectsGrid.tsx         # Projects showcase
│   ├── TestimonialSlider.tsx    # Client testimonials
│   ├── MarqueeText.tsx          # Scrolling text animation
│   └── ui/                      # Reusable UI components
│       ├── Container.tsx        # Max-width container
│       ├── Button.tsx           # Button component
│       └── Card.tsx             # Card component
├── lib/
│   ├── data/
│   │   ├── services.ts          # Services data
│   │   ├── projects.ts          # Projects data
│   │   └── testimonials.ts      # Testimonials data
│   └── utils.ts                 # Utility functions
├── types/
│   └── index.ts                 # TypeScript interfaces
├── public/
│   ├── images/                  # All images organized by category
│   ├── css/                     # Archi template CSS files
│   ├── fonts/                   # Font files
│   └── logo/                    # Custom logo
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind CSS config
├── next.config.js              # Next.js config
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/affanzahir/code/archihtml-625/portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Features

### Pages Implemented

1. **Home** (`/`)
   - Hero section with parallax background
   - 18 Years of Experience counter
   - Services carousel grid
   - Client testimonials slider
   - Latest projects showcase
   - Scrolling marquee with capabilities
   - Call-to-action sections

2. **Services** (`/services`)
   - All 6 services displayed in a grid
   - Service cards with images and descriptions
   - Individual service pages with:
     - Full descriptions
     - Key features list
     - Benefits highlighting
     - Related services sidebar
     - Contact CTA button

3. **Projects** (`/projects`)
   - Portfolio gallery organized by category
   - Categories: Residential, Hospitality, Commercial
   - Project cards with hover effects
   - Project detail pages with:
     - Full image gallery
     - Project information and timeline
     - Client testimonials
     - Related projects
     - "Interested?" contact section

4. **About** (`/about`)
   - Company story
   - Core values with icons
   - Team member showcase
   - Company mission statement
   - Call-to-action section

5. **Contact** (`/contact`)
   - Contact form with validation
   - Company contact information
   - Working hours display
   - Social media links
   - What to expect section

### Components

All reusable React components built with modern Next.js patterns:

- **Header**: Sticky navigation with mobile menu
- **Footer**: Company info, quick links, social media
- **Hero**: Customizable hero sections with backgrounds
- **StatsSection**: Animated counter for years of experience
- **ServicesCarousel**: Responsive grid of service cards
- **ProjectsGrid**: Masonry-style portfolio display
- **TestimonialSlider**: Auto-rotating testimonials
- **MarqueeText**: Animated scrolling text
- **Button**: Reusable button with multiple variants
- **Container**: Max-width wrapper component

## 🎨 Styling

### Color Scheme

- **Primary**: Yellow (#ffd500) - Used for accents and CTAs
- **Dark**: #18191B - Background and text
- **Light**: #f5f5f5 - Light backgrounds

### CSS Files

All original Archi template CSS files are included and imported:

- `bootstrap.min.css` - Bootstrap framework
- `style.css` - Main template styles
- `plugins.css` - Plugin styles
- `custom-interior-design.css` - Theme-specific styles
- `colors/yellow.css` - Yellow color scheme

### Tailwind CSS

Tailwind utilities are used for:
- Layout and spacing
- Responsive design
- Hover states and transitions
- Typography

## 📊 Data Structure

### Services

Each service includes:
- ID and slug for routing
- Title and descriptions
- Images and icons
- Features list
- Benefits list
- Related project IDs

### Projects

Each project includes:
- ID and slug
- Title and descriptions
- Category (residential, hospitality, commercial)
- Thumbnail and gallery images
- Client information and year
- Testimonial from client
- Related project IDs

### Testimonials

Client testimonials with:
- Name and role
- Quote content
- Optional company name

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file if you need to add API endpoints or third-party services:

```env
# Example configurations
NEXT_PUBLIC_API_URL=your_api_url
CONTACT_EMAIL=your_email@example.com
```

### Customization

To customize the site:

1. **Logo**: Replace `/public/logo/logo.jpeg`
2. **Company Name**: Update "Decora" references throughout
3. **Colors**: Modify `tailwind.config.ts` and CSS files
4. **Content**: Edit data files in `lib/data/`
5. **Services**: Add/remove in `lib/data/services.ts`
6. **Projects**: Add/remove in `lib/data/projects.ts`

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will auto-deploy on every push

### Deploy to Other Platforms

The site can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

All components are optimized for each breakpoint.

## ✅ Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Mobile menu toggles correctly
- [ ] Services carousel displays properly
- [ ] Project gallery shows all projects
- [ ] Contact form validates and submits
- [ ] Images load correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All links are functional
- [ ] Footer displays correctly

## 🐛 Known Issues & Fixes

- Static build timeouts: Fixed by increasing `staticPageGenerationTimeout` in `next.config.js`
- Footer onClick handler: Fixed by making Footer a client component

## 🔮 Future Enhancements

- [ ] API integration for dynamic content
- [ ] Email form submission backend
- [ ] Blog section
- [ ] Image optimization with Next.js Image component
- [ ] SEO improvements with structured data
- [ ] Animation library integration (Framer Motion)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] User accounts and project tracking
- [ ] Payment integration

## 📄 License

This project uses the Archi template as a base. Check the original template for licensing details.

## 📧 Contact

For questions or support with this portfolio site, please reach out to info@decora.com

---

Built with ❤️ using Next.js, React, and Tailwind CSS
