# Component Usage Guide

Quick reference for using the custom components in your Meloncholy Games website.

## Layout Components

### PageLayout
Wraps content with Header and Footer
```tsx
import PageLayout from "../shared/PageLayout";

<PageLayout>
  {/* Your page content */}
</PageLayout>
```

### ParallaxHero
Hero section with parallax scrolling effect
```tsx
import ParallaxHero from "../shared/ParallaxHero";

<ParallaxHero
  title="Your Title"
  subtitle="Optional subtitle"
  height="60vh"  // optional, default: 60vh
  backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  backgroundImage="/path/to/image.jpg"  // optional
/>
```

### Header
Sticky navigation with mobile menu (auto-included in PageLayout)

### Footer
Site footer with links and social media (auto-included in PageLayout)

## Animation Components

### AnimatedSection
Scroll-based animations with intersection observer
```tsx
import AnimatedSection from "../shared/AnimatedSection";

<AnimatedSection
  animation="fadeIn"  // fadeIn, slideUp, slideLeft, slideRight, scale
  delay={200}  // optional delay in ms
>
  {/* Content to animate */}
</AnimatedSection>
```

## Interactive Components

### NewsletterSignup
Email capture form
```tsx
import NewsletterSignup from "../shared/NewsletterSignup";

<NewsletterSignup variant="card" />  // or "inline"
```

### FeatureCard
Animated card with icon and hover effects
```tsx
import FeatureCard from "../shared/FeatureCard";

<FeatureCard
  icon={<YourIcon sx={{ fontSize: 48, color: "primary.main" }} />}
  title="Feature Title"
  description="Feature description"
  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"  // optional
/>
```

### StatsCounter
Animated counting numbers
```tsx
import StatsCounter from "../shared/StatsCounter";

const stats = [
  { value: 1000, label: "Players", suffix: "+" },
  { value: 50, label: "Levels", prefix: "" },
];

<StatsCounter stats={stats} />
```

### BlogCard
Blog post preview card
```tsx
import BlogCard from "../shared/BlogCard";

<BlogCard
  title="Post Title"
  excerpt="Post excerpt..."
  date="Nov 23, 2025"
  category="Dev Blog"
  image="/path/to/image.jpg"  // optional
  readTime="5 min read"  // optional
/>
```

### Testimonial
User review/testimonial card
```tsx
import Testimonial from "../shared/Testimonial";

<Testimonial
  quote="This game is amazing!"
  author="John Doe"
  role="Beta Tester"  // optional
  avatar="🎮"  // optional, defaults to first letter of name
  rating={5}  // optional, 1-5 stars
/>
```

### FAQ
Accordion-style FAQ component
```tsx
import FAQ from "../shared/FAQ";

const faqItems = [
  {
    question: "When will the game release?",
    answer: "We're targeting Q2 2025..."
  },
];

<FAQ items={faqItems} />
```

### LoadingSpinner
Loading state indicator
```tsx
import LoadingSpinner from "../shared/LoadingSpinner";

<LoadingSpinner
  message="Loading..."  // optional
  fullScreen={true}  // optional, default: false
/>
```

## Utility Components

### SEO
Dynamic page titles and meta tags
```tsx
import SEO from "../shared/SEO";

<SEO
  title="Page Title"
  description="Page description for SEO"
  keywords="keyword1, keyword2"  // optional
/>
```

## Custom Hooks

### useInView
Intersection observer hook
```tsx
import { useInView } from "../hooks/useInView";

const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5 });

<div ref={ref}>
  {isInView && "I'm visible!"}
</div>
```

## Constants

### Site Config
Access site-wide constants
```tsx
import { SITE_CONFIG, ROUTES, COLORS } from "../constants/siteConfig";

// Use in your components
const email = SITE_CONFIG.social.email;
const homeUrl = ROUTES.HOME;
const gradient = COLORS.gradients.purple;
```

## Common Patterns

### Grid Layout with Animation
```tsx
<Grid container spacing={4}>
  {items.map((item, index) => (
    <Grid item xs={12} md={6} key={index}>
      <AnimatedSection animation="slideUp" delay={index * 100}>
        <Card>{/* content */}</Card>
      </AnimatedSection>
    </Grid>
  ))}
</Grid>
```

### Gradient Background Box
```tsx
<Box
  sx={{
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: 4,
    p: 6,
    color: "white",
  }}
>
  {/* content */}
</Box>
```

### Responsive Typography
```tsx
<Typography
  variant="h2"
  sx={{
    fontSize: { xs: "2rem", md: "3rem" },  // responsive
    fontWeight: 700,
  }}
>
  Title
</Typography>
```

## Material-UI Tips

### Common Icons Used
```tsx
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
```

### Button Variants
```tsx
// Contained (filled)
<Button variant="contained">Click Me</Button>

// Outlined
<Button variant="outlined">Click Me</Button>

// Text (minimal)
<Button variant="text">Click Me</Button>
```

### Card with Hover Effect (pre-styled in theme)
```tsx
<Card sx={{ height: "100%", p: 2 }}>
  <CardContent>
    {/* Hover effects are automatic */}
  </CardContent>
</Card>
```

## Color Palette

Primary (Green): Used for main actions
- Light: `#b9fbb9`
- Main: `#90ee90`
- Dark: `#5cb85c`

Secondary (Pink): Used for accents
- Light: `#ffb3d9`
- Main: `#ff7eb3`
- Dark: `#c25f8a`

Gradients:
- Purple: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Pink: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- Sunset: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
