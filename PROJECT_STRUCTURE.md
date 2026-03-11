# Project Structure Guide

## Complete Directory Layout

```
portfolio-nextjs/
│
├── 📂 app/                                    # Next.js App Router - All pages & routing
│   ├── layout.tsx                            # Root layout (Header + Footer wrapper)
│   ├── page.tsx                              # Home page (/)
│   ├── globals.css                           # Global styles (Archi CSS imports + Tailwind)
│   │
│   ├── 📂 about/
│   │   └── page.tsx                         # About page (/about)
│   │
│   ├── 📂 services/
│   │   ├── page.tsx                         # Services listing (/services)
│   │   └── 📂 [slug]/
│   │       └── page.tsx                     # Service details (/services/[slug])
│   │
│   ├── 📂 projects/
│   │   ├── page.tsx                         # Projects gallery (/projects)
│   │   └── 📂 [slug]/
│   │       └── page.tsx                     # Project details (/projects/[slug])
│   │
│   └── 📂 contact/
│       └── page.tsx                         # Contact page (/contact)
│
├── 📂 components/                            # Reusable React components
│   ├── Header.tsx                           # Navigation bar with mobile menu
│   ├── Footer.tsx                           # Footer with links & back-to-top
│   ├── Hero.tsx                             # Hero section component
│   ├── StatsSection.tsx                     # 18 years counter section
│   ├── ServicesCarousel.tsx                 # Services grid display
│   ├── ProjectsGrid.tsx                     # Projects showcase
│   ├── TestimonialSlider.tsx               # Auto-rotating testimonials
│   ├── MarqueeText.tsx                      # Scrolling text animation
│   │
│   └── 📂 ui/                               # Basic UI components
│       ├── Button.tsx                       # Reusable button (variants: primary, secondary, white)
│       ├── Container.tsx                    # Max-width wrapper
│       └── Card.tsx                         # Card component (if used)
│
├── 📂 lib/                                   # Utilities and data
│   ├── 📂 data/
│   │   ├── services.ts                      # 6 services with full details
│   │   ├── projects.ts                      # 4 projects with images
│   │   └── testimonials.ts                  # 3 client testimonials
│   └── utils.ts                             # Helper functions
│
├── 📂 types/                                 # TypeScript interfaces
│   └── index.ts                             # All type definitions
│
├── 📂 public/                               # Static assets (served from root)
│   │
│   ├── 📂 images/                           # All image assets
│   │   ├── 📂 hero/                        # Hero section backgrounds
│   │   │   ├── bg/
│   │   │   ├── misc/
│   │   │   └── logo.png
│   │   ├── 📂 services/                    # Service images (6 images)
│   │   ├── 📂 portfolio-details/           # Portfolio details images
│   │   ├── 📂 portfolio-general/           # General portfolio images
│   │   ├── 📂 services-alt/                # Alternative service images
│   │   ├── 📂 team/                        # Team member photos (4 images)
│   │   ├── 📂 testimonial/                 # Testimonial images
│   │   └── 📂 background/                  # Background images
│   │
│   ├── 📂 css/                             # Archi template CSS files
│   │   ├── bootstrap.min.css               # Bootstrap framework
│   │   ├── style.css                       # Main template styles
│   │   ├── plugins.css                     # Plugin styles
│   │   ├── color.css                       # Color definitions
│   │   ├── custom-interior-design.css     # Interior design theme
│   │   └── 📂 colors/
│   │       └── yellow.css                  # Yellow color scheme
│   │
│   ├── 📂 fonts/                           # Font files
│   │   ├── 📂 fontawesome-pro/            # Font Awesome icons
│   │   ├── 📂 elegant/                    # Elegant font
│   │   └── 📂 etline/                     # ET Line font
│   │
│   └── 📂 logo/
│       └── logo.jpeg                       # Custom Decora logo
│
├── 📄 package.json                          # Dependencies & scripts
├── 📄 tsconfig.json                        # TypeScript configuration
├── 📄 tailwind.config.ts                   # Tailwind CSS setup
├── 📄 postcss.config.js                    # PostCSS configuration
├── 📄 next.config.js                       # Next.js configuration
├── 📄 .eslintrc.json                       # ESLint rules
│
├── 📄 README.md                            # Complete project documentation
├── 📄 SETUP.md                             # Setup & customization guide
├── 📄 IMPLEMENTATION_SUMMARY.md            # What was delivered
├── 📄 PROJECT_STRUCTURE.md                 # This file
│
├── 📂 .next/                               # Next.js build output (generated)
├── 📂 node_modules/                        # Dependencies (generated)
│
└── .gitignore                              # Git ignore patterns
```

## File Descriptions

### App Directory (Routing)

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout wrapping all pages with Header & Footer |
| `app/page.tsx` | Home page landing with hero, stats, services, etc. |
| `app/globals.css` | Global styles imported by layout |
| `app/about/page.tsx` | Company story, values, team page |
| `app/services/page.tsx` | All services grid view |
| `app/services/[slug]/page.tsx` | Dynamic service detail pages |
| `app/projects/page.tsx` | Portfolio gallery with filters |
| `app/projects/[slug]/page.tsx` | Dynamic project detail pages |
| `app/contact/page.tsx` | Contact form with company info |

### Components (React)

| File | Exports | Usage |
|------|---------|-------|
| `Header.tsx` | Header | Used in root layout |
| `Footer.tsx` | Footer | Used in root layout |
| `Hero.tsx` | Hero | Multiple pages |
| `StatsSection.tsx` | StatsSection | Home page |
| `ServicesCarousel.tsx` | ServicesCarousel | Home page |
| `ProjectsGrid.tsx` | ProjectsGrid | Home page |
| `TestimonialSlider.tsx` | TestimonialSlider | Home page |
| `MarqueeText.tsx` | MarqueeText | Home page, home bottom |
| `ui/Button.tsx` | Button | Throughout site |
| `ui/Container.tsx` | Container | Throughout site |

### Data Files

| File | Contains | Records |
|------|----------|---------|
| `services.ts` | Service objects | 6 services |
| `projects.ts` | Project objects | 4 projects |
| `testimonials.ts` | Testimonial objects | 3 testimonials |

### Type Definitions

`types/index.ts` exports:
- `Service` - Service interface
- `Project` - Project interface
- `Testimonial` - Testimonial interface
- `TeamMember` - Team member interface
- `NavigationItem` - Navigation interface
- `ContactFormData` - Form data interface

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, metadata |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind CSS theme config |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `next.config.js` | Next.js build & runtime config |
| `.eslintrc.json` | ESLint rules & configuration |

### Documentation

| File | Contains |
|------|----------|
| `README.md` | Full project documentation |
| `SETUP.md` | Setup instructions & customization |
| `IMPLEMENTATION_SUMMARY.md` | Project completion summary |
| `PROJECT_STRUCTURE.md` | This file |

### Public Assets

#### Images Organization
```
public/images/
├── hero/           (backgrounds for hero sections)
├── services/       (6 service images)
├── portfolio-*/    (project images by category)
├── team/           (4 team member photos)
├── testimonial/    (customer testimonial images)
└── background/     (additional backgrounds)
```

#### CSS Files
All Archi template CSS is imported in `globals.css`:
- Bootstrap for base styles
- Main style.css for layout
- Plugins CSS for components
- Custom interior design CSS
- Yellow color scheme

## Routing Map

```
/                          → app/page.tsx (Home)
/about                     → app/about/page.tsx
/services                  → app/services/page.tsx
/services/furniture-layouts → app/services/[slug]/page.tsx
/services/space-planning   → app/services/[slug]/page.tsx
/services/floor-plans      → app/services/[slug]/page.tsx
/services/custom-furniture → app/services/[slug]/page.tsx
/services/kitchen-bedroom  → app/services/[slug]/page.tsx
/services/preconstruction  → app/services/[slug]/page.tsx
/projects                  → app/projects/page.tsx
/projects/eco-green-interior     → app/projects/[slug]/page.tsx
/projects/modern-elegance-suite  → app/projects/[slug]/page.tsx
/projects/apartment-renovation   → app/projects/[slug]/page.tsx
/projects/office-space-design    → app/projects/[slug]/page.tsx
/contact                   → app/contact/page.tsx
```

## Component Dependencies

```
Root Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Mobile Menu
│
└── Main Content
    ├── Pages (Home, About, Services, Projects, Contact)
    └── Components
        ├── Hero
        ├── StatsSection
        ├── ServicesCarousel
        ├── ProjectsGrid
        ├── TestimonialSlider
        ├── MarqueeText
        └── UI Components
            ├── Button
            ├── Container
            └── Card

    └── Footer
        ├── Logo
        ├── Quick Links
        ├── Contact Info
        ├── Social Links
        └── Back-to-Top Button
```

## Data Flow

```
Data Sources
├── lib/data/services.ts → Services pages & components
├── lib/data/projects.ts → Projects pages & components
└── lib/data/testimonials.ts → Testimonial slider

Routes
├── Dynamic routes: [slug]
│   ├── Services: app/services/[slug]/page.tsx
│   └── Projects: app/projects/[slug]/page.tsx
└── Static routes
    ├── Home: app/page.tsx
    ├── About: app/about/page.tsx
    ├── Contact: app/contact/page.tsx
    └── Listings: app/services/page.tsx, app/projects/page.tsx

Display
├── Components render data
├── Images loaded from /public/images/
├── Styles applied from /public/css/
└── Icons from Font Awesome
```

## Import Paths

All imports use `@/` alias for cleaner paths:

```typescript
// Instead of: ../../../components/Button
import Button from '@/components/ui/Button'

// Instead of: ../../lib/data/services
import { services } from '@/lib/data/services'

// Instead of: ../../types/index
import type { Service } from '@/types'
```

## Environment

The project requires:
- Node.js 16+
- npm or yarn
- Modern browser (ES2020+)

## Build Output

After building with `npm run build`:

```
.next/
├── server/          # Server-side code
├── static/          # Static assets
│   ├── css/        # Compiled CSS
│   └── chunks/     # JavaScript chunks
└── app-build-manifest.json
```

## Total File Count

- **TypeScript/JSX Files**: 24
- **Configuration Files**: 7
- **Documentation**: 4
- **CSS Files**: 6
- **Image Directories**: 8+
- **Font Directories**: 4

## Customization Checklist

When customizing the site:

- [ ] `lib/data/services.ts` - Update services
- [ ] `lib/data/projects.ts` - Update projects
- [ ] `lib/data/testimonials.ts` - Update testimonials
- [ ] `tailwind.config.ts` - Update colors
- [ ] `public/logo/logo.jpeg` - Replace logo
- [ ] `public/images/` - Replace images
- [ ] `app/*/page.tsx` - Update copy/text
- [ ] `types/index.ts` - If adding new types

## Next Steps

1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Make changes to files
4. Files auto-reload in browser
5. Build for production: `npm run build`
6. Deploy to hosting

---

**Structure Last Updated**: March 11, 2026
**Status**: ✅ Complete and Organized
