# Portfolio Application

## Overview

This is a modern, full-stack personal portfolio website built with React, TypeScript, Express, and PostgreSQL. The application showcases a developer's skills, projects, work experience, and provides a contact form for visitors to reach out. It features a sophisticated design system with both light and dark modes, smooth animations, and a responsive layout optimized for all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and dev server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and API data fetching

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority (CVA)** for variant-based component styling
- Custom theme system supporting light/dark modes via Context API

**Design System**
- Typography: Inter (UI/body) and Space Grotesk (display headings) from Google Fonts
- Color palette: HSL-based with CSS custom properties for theme switching
- Spacing: Tailwind's 4px-based scale (4, 6, 8, 12, 16, 20)
- Border radius: Custom values (3px, 6px, 9px)
- Restrained color usage with vibrant purple accent (265° 85% 65%) and emerald green for success states

**State Management**
- React Context for theme preferences (persisted to localStorage)
- React Hook Form with Zod validation for form state
- TanStack Query for server data caching and mutations

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for REST API endpoints
- Custom middleware for request logging and JSON response capture
- Error handling middleware with standardized error responses

**API Design**
- RESTful endpoints under `/api` prefix
- Contact form submission: `POST /api/contact`
- Message retrieval (admin): `GET /api/contact/messages`
- Zod schema validation for request payloads
- Standardized JSON responses with `success`, `message`, and `data` fields

**Development Setup**
- Vite middleware integration for HMR in development
- Static file serving for production builds
- Request logging with timing and response capture (truncated at 80 chars)

### Data Storage Solutions

**Database**
- **PostgreSQL** via Neon serverless driver
- **Drizzle ORM** for type-safe database queries and schema management
- Schema versioning with Drizzle Kit migrations

**Schema Design**
- `contact_messages` table: Stores form submissions with UUID primary keys, name, email, message, and timestamp
- Validation layer using `drizzle-zod` for runtime type checking
- Client-side data types (Skills, Projects, Experience) defined in shared schema without persistence

**Storage Abstraction**
- Interface-based storage layer (`IStorage`) for swappable implementations
- In-memory implementation (`MemStorage`) for development/testing
- Easy migration path to database-backed storage

### External Dependencies

**UI Component Libraries**
- **Radix UI**: 20+ unstyled, accessible component primitives (dialogs, dropdowns, accordions, etc.)
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component
- **cmdk**: Command palette component

**Form & Validation**
- **React Hook Form**: Performant form state management
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Zod integration for React Hook Form

**Utilities**
- **clsx** + **tailwind-merge**: Conditional className composition
- **date-fns**: Date formatting and manipulation
- **nanoid**: Unique ID generation

**Development Tools**
- **TypeScript**: Strict mode enabled for type safety
- **ESBuild**: Fast bundling for production server code
- **Replit plugins**: Runtime error overlay, cartographer, dev banner (dev only)

**Database & ORM**
- **@neondatabase/serverless**: Postgres driver optimized for serverless
- **Drizzle ORM**: Type-safe database toolkit
- **Drizzle Kit**: Schema management and migrations
- **connect-pg-simple**: Session store (configured but not actively used)

**Build & Asset Management**
- Path aliases configured: `@/` → client source, `@shared/` → shared types, `@assets/` → attached assets
- Separate build outputs: client (dist/public) and server (dist)
- Font preloading and optimization via Google Fonts CDN