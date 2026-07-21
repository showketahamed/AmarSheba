# AmarSheba

AmarSheba is a Bangladesh citizen services platform focused on making public-service information, emergency contacts, authentication, and service workflows easier to access in one place.

This repository should be described on GitHub as a project built around:

- Next.js migration target
- Supabase
- PostgreSQL
- bilingual citizen-service experience for Bangladesh

The old XAMPP + MySQL + separate Node/Express description is outdated and does not reflect the direction of the current project.

## Project Overview

AmarSheba brings together common public service information and digital support features in a single platform. The project includes service discovery, emergency support data, bilingual content, user authentication, protected dashboards, admin tools, contact flows, and an assistant interface.

The repository is currently in a transition state: legacy Vite/Express application code is still present, while the database and migration direction have already been updated toward Next.js and Supabase PostgreSQL.

## What The Project Includes

### User-facing features

- Home page for introducing the platform
- Services listing page
- Individual service details pages
- Emergency services page
- Assistant page
- About page
- Contact page
- FAQ page
- Login and registration pages
- User dashboard
- User profile page
- Admin dashboard

### Core capabilities

- Bilingual interface with Bangla and English content
- Theme support with dark mode handling
- Authentication with protected routes
- Admin-only route protection
- OTP-based verification flow
- Citizen service catalog with categories and details
- Emergency contact directory with structured data
- Contact form and inquiry management
- Assistant/chat-style user support interface
- Scroll, page transition, and usability components

## Current Frontend Structure

The existing frontend implementation includes:

- React 19
- Vite
- React Router
- Tailwind CSS
- `lucide-react`

Main routes currently implemented in the app:

- `/`
- `/services`
- `/services/emergency`
- `/services/:serviceId`
- `/assistant`
- `/dashboard`
- `/admin`
- `/profile`
- `/login`
- `/register`
- `/about`
- `/contact`
- `/faq`

Important shared frontend pieces include:

- `Navbar`
- `Footer`
- `LanguageToggle`
- `ThemeToggle`
- `ProtectedRoute`
- `AssistantChat`
- `FloatingChatbot`
- `EmergencyManagement`
- `BackToTop`
- `ScrollToTop`
- `PageTransition`

## Current Backend And API

The current backend codebase includes:

- Express-based API structure
- JWT authentication flow
- bcrypt password hashing
- Nodemailer-based email support
- PostgreSQL connection through Supabase-compatible `DATABASE_URL`

Current API areas include:

- `/api/health`
- `/api/auth`
- `/api/services`
- `/api/applications`
- `/api/contact`
- `/api/emergency`
- `/api/admin`

## Database And Supabase

This repository now includes Supabase/PostgreSQL SQL files instead of relying on the old MySQL setup.

Use the SQL files inside `database/`:

- `supabase_schema.sql`
- `supabase_data.sql`
- `supabase_emergency.sql`

Run them in the Supabase SQL Editor in this order:

1. `supabase_schema.sql`
2. `supabase_data.sql`
3. `supabase_emergency.sql`

Main database entities include:

- `users`
- `services`
- `applications`
- `contacts`
- `email_verification_otps`
- emergency services data

## Repository State

This repository currently contains both migration-target and legacy code:

- `nextjs-app/` contains the Next.js migration report
- `database/` contains Supabase PostgreSQL schema and data files
- root `package.json` already includes Supabase packages
- `backend/config/db.js` expects `DATABASE_URL` for PostgreSQL
- `frontend/` and `backend/` are still present from the older app structure

Because of this, the repository should be presented as a Next.js migration project backed by Supabase PostgreSQL, not as an XAMPP/MySQL project.

## Environment

The database connection is expected through:

```env
DATABASE_URL=your_supabase_postgres_connection_string
```

The current backend database adapter is already configured for Supabase PostgreSQL.

## Migration Direction

The planned direction of the project is:

- move the app toward Next.js App Router
- keep Supabase PostgreSQL as the database layer
- replace old hardcoded backend URLs with app-native API access
- migrate browser-only logic carefully into client components
- remove outdated XAMPP/MySQL-only documentation and assumptions

## Migration Reference

See `nextjs-app/MIGRATION_REPORT.md` for the route mapping, architecture analysis, and migration notes.
