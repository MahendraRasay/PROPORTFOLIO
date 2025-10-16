# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from award-winning developer portfolios, Linear's typography excellence, and Stripe's color restraint, while creating a unique, memorable identity.

## Core Design Principles
- **Bold Typography First**: Let typography drive visual hierarchy, not decorative elements
- **Strategic Color Usage**: Restrained palette with purposeful accent moments
- **Interaction Showcase**: Design should highlight React capabilities through smooth, purposeful interactions
- **Professional Credibility**: Balance creativity with professionalism to inspire confidence

## Color Palette

**Dark Mode (Primary)**
- Background: 220 25% 8% (deep navy-charcoal)
- Surface: 220 20% 12% (elevated panels)
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 65%
- Accent: 265 85% 65% (vibrant purple)
- Success/Active: 160 75% 55% (emerald green)

**Light Mode**
- Background: 220 15% 98%
- Surface: 0 0% 100%
- Text Primary: 220 20% 15%
- Text Secondary: 220 10% 45%
- Accent: 265 75% 55%
- Success/Active: 160 65% 45%

## Typography
**Font Stack**: 
- Primary: 'Inter' (Google Fonts) - all UI, body text
- Display: 'Space Grotesk' (Google Fonts) - hero headlines, section titles

**Scale**:
- Hero Display: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-bold
- Subsections: text-2xl md:text-3xl, font-semibold
- Body: text-base md:text-lg, font-normal
- Small/Meta: text-sm, font-medium

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistency (e.g., p-8, gap-12, py-20)

**Container Strategy**:
- Max-width: max-w-7xl for all content sections
- Hero: Full-width with centered max-w-6xl inner content
- Padding: px-6 md:px-8 lg:px-12

## Component Design

### Navigation
Sticky header with glass-morphism effect (backdrop-blur-lg), logo left, nav center, theme toggle + CTA right. Mobile: hamburger menu with slide-in drawer.

### Hero Section
Full viewport height with large professional image (subtle gradient overlay). Split layout: left side features oversized name typography (Space Grotesk, 8xl), animated typing subtitle showcasing roles, dual CTAs ("View Projects" primary, "Contact Me" outline with blur background). Right side: professional headshot with subtle border glow effect.

### Skills Section
Category filter tabs (Frontend/Backend/Tools/All) at top using pill-style buttons. Grid layout (grid-cols-2 md:grid-cols-3 lg:grid-cols-4) of skill cards with icon, name, and proficiency indicator (subtle progress bar, not percentage). Smooth fade-in-out transitions when filtering.

### Projects Showcase
Masonry-style grid (avoid uniform rows). Each project card: large preview image, title overlay on hover, tech stack tags. Click opens full-screen modal with project gallery (carousel), detailed description, tech stack, live demo + GitHub links. Modal uses backdrop blur, smooth scale-in animation.

### Experience Timeline
Vertical timeline with alternating left/right content blocks (desktop), stacked (mobile). Each entry: company logo circle on timeline, role title, date range, expandable description. Active entry highlighted with accent color connector line.

### Contact Section
Two-column layout: left has large contact form (name, email, message) with real-time validation states (green checkmarks, red errors). Right column: contact methods (email, LinkedIn, GitHub) with icons, optional location, and availability status indicator. Form uses subtle input focus states with accent color borders.

### Footer
Three-column grid: branding + tagline left, quick links center, social icons right. Minimal, text-sm, muted colors.

## Animations & Interactions
- **Hero**: Typing animation for subtitle, subtle parallax on scroll
- **Skills**: Fade transitions between filter states, scale-on-hover for cards
- **Projects**: Smooth modal open/close with scale and fade, image carousel with swipe support
- **Timeline**: Expand/collapse with height transitions
- **Form**: Input focus rings with accent color, shake animation on validation errors
- **Theme Toggle**: Smooth color transitions (transition-colors duration-300)
- **Scroll**: Smooth scroll to sections, subtle fade-in-up for elements entering viewport

## Images

**Hero Image**: Full-height professional portrait or workspace shot. Clean background, professional attire. Positioned right side on desktop, above content on mobile. Apply subtle gradient overlay (from background color at 60% opacity) for text legibility.

**Project Images**: High-quality screenshots or mockups showcasing final work. Maintain 16:9 aspect ratio for consistency. Use subtle shadows and rounded corners (rounded-xl).

**Company Logos**: Timeline entries use circular logo containers (w-12 h-12) with white/brand background.

## Responsive Behavior
- Hero: Stacked on mobile (image top, content below), side-by-side on lg+
- Skills Grid: 2 cols mobile → 3 tablet → 4 desktop
- Projects: 1 col mobile → 2 tablet → 3 desktop (masonry)
- Timeline: Vertical mobile → alternating desktop
- Contact: Stacked mobile → 2-col desktop
- Navigation: Hamburger mobile → full nav desktop

## Accessibility & Polish
- Dark mode as default, persisted to localStorage
- Focus visible states on all interactive elements (ring-2 ring-accent)
- Smooth 60fps animations (use transform/opacity only)
- Reduced motion support (@media prefers-reduced-motion)
- Semantic HTML throughout
- ARIA labels for icon buttons and interactive elements

This portfolio should feel premium, purposeful, and demonstrate both design sensibility and technical prowess through its execution.