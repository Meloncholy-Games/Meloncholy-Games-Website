# Meloncholy Games Website - Complete Scaffold

## Overview

This is a fully scaffolded, modern React website for Meloncholy Games with comprehensive pages, animations, and reusable components.

## What's Been Built

### Pages

1. **Home Page** (`/src/components/home/HomePage.tsx`)
   - Hero section with gradient background and parallax effects
   - Company values showcase with animated cards
   - Featured game promotion section
   - Call-to-action sections

2. **About Page** (`/src/components/about/About.tsx`)
   - Company story and mission
   - Core values with icon cards
   - Skills and capabilities showcase
   - Team member profiles with bios
   - Call-to-action for community engagement

3. **Project Cantaloupe Game Page** (`/src/components/cantaloupe/CantaloupePage.tsx`)
   - Game overview and description
   - Feature highlights with icons
   - Screenshot gallery placeholders
   - Story section
   - Community engagement CTAs

4. **Contact Page** (`/src/components/contact/Contact.tsx`)
   - Contact form with validation
   - Multiple contact methods (Email, Discord, Twitter, GitHub)
   - Press kit download section

5. **Enhanced 404 Page** (`/src/components/NotFound.tsx`)
   - Gradient text effect
   - Friendly error message
   - Quick navigation back to home

### Shared Components

#### Layout Components
- **Header** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with links and social icons
- **PageLayout** - Wrapper component with header and footer
- **ParallaxHero** - Parallax hero sections with gradients

#### Interactive Components
- **AnimatedSection** - Intersection observer-based scroll animations (fadeIn, slideUp, slideLeft, slideRight, scale)
- **LoadingSpinner** - Customizable loading states
- **NewsletterSignup** - Email capture form with inline/card variants
- **FeatureCard** - Animated feature cards with hover effects
- **StatsCounter** - Animated number counters with intersection observer
- **BlogCard** - Blog/news preview cards
- **Testimonial** - User testimonial/review cards
- **FAQ** - Accordion-based FAQ component

#### Utility Components
- **SEO** - Dynamic document title and meta tags

### Team Section
- **TeamSection** (`/src/components/about/TeamSection.tsx`)
  - Pre-populated with 4 team members
  - Avatar, role, bio, and skills for each member
  - Animated cards with staggered delays

### Theme & Styling

- **Custom Theme** (`/src/theme/theme.ts`)
  - Light and dark mode support
  - Custom color palette (green primary, pink secondary)
  - Multiple gradient presets
  - Enhanced component styling (buttons, cards, papers)
  - Smooth transitions and hover effects

### Hooks

- **useScrollToTop** - Auto-scroll to top on route changes (integrated in Router)
- **useInView** - Intersection observer hook for custom animations

### Constants

- **siteConfig** (`/src/constants/siteConfig.ts`)
  - Site metadata
  - Social links
  - Routes
  - Color system
  - Company information

### Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode auto-detection
- ✅ Smooth scroll animations
- ✅ Parallax effects
- ✅ Gradient backgrounds
- ✅ Icon integration (Material-UI Icons)
- ✅ Form validation
- ✅ Loading states
- ✅ Hover effects and transitions
- ✅ Sticky navigation
- ✅ Mobile-friendly hamburger menu
- ✅ SEO-friendly meta tags
- ✅ Scroll to top on navigation

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm start
# Server will run at http://localhost:3000 (or 3001 if 3000 is in use)

# Build for production
npm run build

# Run type checking
npm run types

# Format code
npm run format

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── about/
│   │   ├── About.tsx           # About page
│   │   └── TeamSection.tsx     # Team members section
│   ├── cantaloupe/
│   │   └── CantaloupePage.tsx  # Game page
│   ├── contact/
│   │   └── Contact.tsx         # Contact page
│   ├── home/
│   │   └── HomePage.tsx        # Home page
│   ├── shared/
│   │   ├── AnimatedSection.tsx
│   │   ├── BlogCard.tsx
│   │   ├── FAQ.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── NewsletterSignup.tsx
│   │   ├── PageLayout.tsx
│   │   ├── ParallaxHero.tsx
│   │   ├── SEO.tsx
│   │   ├── StatsCounter.tsx
│   │   └── Testimonial.tsx
│   ├── App.tsx                 # Main app component
│   ├── NotFound.tsx            # 404 page
│   └── Router.tsx              # Route configuration
├── constants/
│   └── siteConfig.ts           # Site-wide constants
├── hooks/
│   ├── useInView.ts
│   └── useScrollToTop.ts
├── theme/
│   └── theme.ts                # Custom MUI theme
└── index.tsx                   # App entry point
```

## Customization Guide

### Adding New Pages

1. Create a new component in the appropriate folder
2. Use the `PageLayout` wrapper for consistent header/footer
3. Add the route in `src/components/Router.tsx`
4. Update navigation in `src/components/shared/Header.tsx`

### Changing Colors

Edit `src/theme/theme.ts` to modify the color palette:
```typescript
primary: {
    main: "#your-color-here",
}
```

### Adding Team Members

Edit the `teamMembers` array in `src/components/about/TeamSection.tsx`

### Modifying Hero Sections

Each page uses `ParallaxHero` - customize with:
```tsx
<ParallaxHero
    title="Your Title"
    subtitle="Your Subtitle"
    backgroundColor="linear-gradient(...)"
/>
```

## Animation Types

The `AnimatedSection` component supports:
- `fadeIn` - Fade in animation
- `slideUp` - Slide up from bottom
- `slideLeft` - Slide in from right
- `slideRight` - Slide in from left
- `scale` - Scale up animation

Use with delay for staggered effects:
```tsx
<AnimatedSection animation="slideUp" delay={200}>
    {/* content */}
</AnimatedSection>
```

## Next Steps

1. Add real images to replace emoji placeholders in gallery sections
2. Connect contact form to backend/email service
3. Set up newsletter integration (e.g., Mailchimp, SendGrid)
4. Add blog/news functionality
5. Integrate analytics (Google Analytics, etc.)
6. Add more game content as development progresses
7. Create FAQ content for the game page
8. Add real testimonials once you have players/testers

## Dependencies

Key packages used:
- React 18
- React Router DOM 6
- Material-UI (MUI) v5
- Emotion (CSS-in-JS)
- TypeScript
- Vite (build tool)

## Notes

- The build is production-ready and optimized
- All TypeScript types are properly defined
- Components are fully responsive
- Accessibility considerations included (ARIA labels, semantic HTML)
- Performance optimized with intersection observers for animations
