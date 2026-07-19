# AmarSheba Next.js Migration Report

Generated for the existing project at `C:\xampp\htdocs\AmarSheba`.

## Phase 1 Status

Phase 1 analysis is complete. The original `frontend/`, `backend/`, and `database/` folders were inspected and were not removed or overwritten.

## Current Frontend Architecture

- Framework: React 19 with Vite.
- Routing: `react-router-dom` in `frontend/src/App.jsx`.
- Styling: Tailwind CSS with class-based dark mode.
- Icons: `lucide-react`.
- Entry point: `frontend/src/main.jsx`.
- Layout: `frontend/src/layouts/MainLayout.jsx` wraps pages with `Navbar`, `Footer`, `Disclaimer`, `BackToTop`, `FloatingChatbot`, `ScrollToTop`, and `PageTransition`.
- Providers:
  - `ThemeProvider` from `frontend/src/context/ThemeContext.jsx`
  - `LocaleProvider` from `frontend/src/context/LocaleContext.jsx`
  - `AuthProvider` from `frontend/src/context/AuthContext.jsx`
- Public assets currently used by Vite are in `frontend/public/images/`.

## Current Frontend Pages

- `Home.jsx`
- `Services.jsx`
- `ServiceDetails.jsx`
- `Emergency.jsx`
- `Assistant.jsx`
- `Dashboard.jsx`
- `AdminDashboard.jsx`
- `Profile.jsx`
- `Login.jsx`
- `Register.jsx`
- `About.jsx`
- `Contact.jsx`
- `FAQ.jsx`
- `NotFound.jsx`

## Current Components

- `Navbar.jsx`
- `Footer.jsx`
- `LanguageToggle.jsx`
- `ThemeToggle.jsx`
- `ServiceCard.jsx`
- `SearchBar.jsx`
- `PageHeader.jsx`
- `LoadingSpinner.jsx`
- `ErrorBoundary.jsx`
- `AssistantChat.jsx`
- `FloatingChatbot.jsx`
- `EmergencyManagement.jsx`
- `Disclaimer.jsx`
- `BackToTop.jsx`
- `ScrollToTop.jsx`
- `ProtectedRoute.jsx`
- `PageTransition.jsx`

## Current Frontend Utilities, Data, Hooks, and Locales

- Utilities:
  - `frontend/src/utils/servicesApi.js`
  - `frontend/src/utils/search.js`
  - `frontend/src/utils/emergencyStorage.js`
  - `frontend/src/utils/assistantEngine.js`
  - `frontend/src/utils/adminStorage.js`
- Data:
  - `frontend/src/data/serviceCatalog.js`
  - `frontend/src/data/services.js`
  - `frontend/src/data/emergencyServices.js`
- Hooks:
  - `frontend/src/hooks/usePageTitle.js`
  - `frontend/src/hooks/useScrollReveal.js`
- Locales:
  - `frontend/src/locales/en.js`
  - `frontend/src/locales/bn.js`

## Existing React Router Routes

| Current route | Current component | Next.js target |
| --- | --- | --- |
| `/` | `Home` | `src/app/page.js` |
| `/services` | `Services` | `src/app/services/page.js` |
| `/services/emergency` | `Emergency` | `src/app/services/emergency/page.js` |
| `/services/:serviceId` | `ServiceDetails` | `src/app/services/[serviceId]/page.js` |
| `/emergency` | redirect to `/services/emergency` | Next.js redirect to `/services/emergency` |
| `/assistant` | `Assistant` | `src/app/assistant/page.js` |
| `/dashboard` | protected `Dashboard` | `src/app/dashboard/page.js` |
| `/admin` | admin-protected `AdminDashboard` | `src/app/admin/page.js` |
| `/profile` | protected `Profile` | `src/app/profile/page.js` |
| `/settings` | redirect to `/profile` | Next.js redirect to `/profile` |
| `/login` | `Login` | `src/app/login/page.js` |
| `/register` | `Register` | `src/app/register/page.js` |
| `/about` | `About` | `src/app/about/page.js` |
| `/contact` | `Contact` | `src/app/contact/page.js` |
| `/faq` | `FAQ` | `src/app/faq/page.js` |
| `*` | `NotFound` | `src/app/not-found.js` |

## Current Backend Architecture

- Active backend entry point appears to be `backend/server.js`.
- Stack: Express, MySQL2, JWT, bcryptjs, Nodemailer, dotenv, cors.
- Active database config: `backend/config/db.js`.
- Active routes live under `backend/routes/`.
- Active controllers live under `backend/controllers/`.
- Active middleware lives under `backend/middleware/`.
- `backend/src/server.js`, `backend/src/routes/emergencyRoutes.js`, `backend/src/controllers/emergencyController.js`, `backend/src/db.js`, and `backend/src/middleware/requireAdmin.js` appear to be older or duplicate emergency-only backend files and should be reviewed before cleanup.

## Existing API Endpoints

| Express endpoint | Method | Protection | Next.js route handler target |
| --- | --- | --- | --- |
| `/api/health` | GET | public | `src/app/api/health/route.js` |
| `/api/auth/register` | POST | public | `src/app/api/auth/register/route.js` |
| `/api/auth/login` | POST | public | `src/app/api/auth/login/route.js` |
| `/api/auth/verify-otp` | POST | public | `src/app/api/auth/verify-otp/route.js` |
| `/api/auth/resend-otp` | POST | public | `src/app/api/auth/resend-otp/route.js` |
| `/api/auth/me` | GET | JWT | `src/app/api/auth/me/route.js` |
| `/api/services` | GET | public | `src/app/api/services/route.js` |
| `/api/services` | POST | admin | `src/app/api/services/route.js` |
| `/api/services/:id` | GET | public | `src/app/api/services/[serviceId]/route.js` |
| `/api/services/:id` | PUT | admin | `src/app/api/services/[serviceId]/route.js` |
| `/api/services/:id` | DELETE | admin | `src/app/api/services/[serviceId]/route.js` |
| `/api/applications` | GET | admin | `src/app/api/applications/route.js` |
| `/api/applications/:id` | PUT | admin | `src/app/api/applications/[applicationId]/route.js` |
| `/api/contact` | POST | public | `src/app/api/contact/route.js` |
| `/api/contact` | GET | admin | `src/app/api/contact/route.js` |
| `/api/emergency` | GET | public | `src/app/api/emergency/route.js` |
| `/api/emergency` | POST | admin check currently incomplete | `src/app/api/emergency/route.js` |
| `/api/emergency/:id` | GET | public | `src/app/api/emergency/[emergencyId]/route.js` |
| `/api/emergency/:id` | PUT | admin check currently incomplete | `src/app/api/emergency/[emergencyId]/route.js` |
| `/api/emergency/:id` | DELETE | admin check currently incomplete | `src/app/api/emergency/[emergencyId]/route.js` |
| `/api/admin/overview` | GET | admin | `src/app/api/admin/overview/route.js` |

## Authentication Flow

- Current login/register API is Express-based.
- Login accepts email or phone and returns a JWT plus user data.
- Frontend stores JWT in localStorage key `amarsheba-auth-token`.
- Frontend stores user data in localStorage key `amarsheba-current-user`.
- Auth requests use `Authorization: Bearer <token>`.
- `AuthContext.jsx` loads `/api/auth/me` on startup when a token exists.
- Logout removes `amarsheba-auth-token`, `amarsheba-current-user`, and several legacy token/user keys.

## Admin Authorization Flow

- Current frontend uses `ProtectedRoute requireAdmin`.
- Current backend `authenticate` middleware loads user by JWT from the database.
- Current backend `requireAdmin` allows access if `req.user.role === 'admin'`.
- Current backend `requireAdmin` also trusts an `x-user-role: admin` header. This is unsafe and must not be preserved in Next.js.
- Emergency admin routes currently use `requireAdmin` without `authenticate`, so `req.user` is absent and the route can depend on the unsafe `x-user-role` header. This is a migration risk and should be fixed during API route migration.

## Database Tables

From `database/amarsheba.sql`:

- `users`
  - `id`, `name`, `email`, `phone`, `password`, `role`, `is_verified`, `created_at`
- `email_verification_otps`
  - `id`, `user_id`, `email`, `otp_hash`, `expires_at`, `used_at`, `created_at`
- `services`
  - `id`, `title_en`, `title_bn`, `category`, `description_en`, `description_bn`, `required_documents`, `fee`, `processing_time`, `created_at`
- `applications`
  - `id`, `user_id`, `service_id`, `status`, `note`, `created_at`
- `contacts`
  - `id`, `name`, `email`, `phone`, `message`, `created_at`

From `database/emergency_services.sql`:

- `emergency_services`
  - `id`, `name`, `category`, `phone`, `description`, `district`, `address`, `latitude`, `longitude`, `is_active`, `created_at`

## LocalStorage Dependencies

The migration must replace or carefully isolate these browser-only dependencies:

- `amarsheba-theme`
- `amarsheba-locale`
- `amarsheba-auth-token`
- `amarsheba-current-user`
- `amarsheba_saved`
- `amarsheba_favorites`
- `amarsheba_recent`
- `amarsheba_reminders`
- `amarsheba_dismissed_notices`
- `amarsheba_checklist_{serviceId}`
- Admin/demo storage in `utils/adminStorage.js`
- Emergency local storage in `utils/emergencyStorage.js`

In Next.js, localStorage access must stay inside Client Components with `typeof window !== 'undefined'` guards where needed.

## Hardcoded API URLs

The current frontend uses `http://localhost:5000/api` in:

- `frontend/src/context/AuthContext.jsx`
- `frontend/src/utils/servicesApi.js`
- `frontend/src/pages/AdminDashboard.jsx`
- `frontend/src/pages/Contact.jsx`

These must become relative `/api` calls or server-side database calls in the Next.js app.

## Components That Require `"use client"`

These components or modules use state, effects, browser APIs, event handlers, localStorage, geolocation, routing hooks, or interactive UI and should be Client Components:

- `components/providers/AppProviders.jsx`
- `contexts/AuthContext.jsx`
- `contexts/LocaleContext.jsx`
- `contexts/ThemeContext.jsx`
- `Navbar.jsx`
- `LanguageToggle.jsx`
- `ThemeToggle.jsx`
- `SearchBar.jsx`
- `ServiceCard.jsx` if it keeps hover/click behavior beyond plain `Link`
- `AssistantChat.jsx`
- `FloatingChatbot.jsx`
- `EmergencyManagement.jsx`
- `BackToTop.jsx`
- `ScrollToTop.jsx`
- `PageTransition.jsx`
- `ErrorBoundary` replacement as `src/app/error.js`
- `Login` form component
- `Register` form component
- `Contact` form component
- `Dashboard`
- `AdminDashboard`
- `Profile`
- `Emergency` if it keeps search, favorites, WhatsApp/call actions, and geolocation
- `ServiceDetails` if it keeps save/favorite/checklist/print interactions

Likely Server Component candidates after refactor:

- Static shell of `Home`
- Static shell of `About`
- Static shell of `FAQ`
- Static data sections of `Services`
- Static data sections of `ServiceDetails`
- `Footer`
- `Disclaimer`
- `PageHeader`
- `LoadingSpinner`

## Duplicate or Unused Backend Files

Potential duplicates that need verification before cleanup:

- Active: `backend/server.js`
- Likely duplicate/older: `backend/src/server.js`
- Active: `backend/routes/emergencyRoutes.js`
- Duplicate/older: `backend/src/routes/emergencyRoutes.js`
- Active: `backend/controllers/emergencyController.js`
- Duplicate/older: `backend/src/controllers/emergencyController.js`
- Active: `backend/config/db.js`
- Duplicate/older: `backend/src/db.js`
- Active: `backend/middleware/authMiddleware.js`
- Duplicate/older: `backend/src/middleware/requireAdmin.js`

Do not delete these until the Next.js migration is verified.

## Potential Migration Risks

- Current auth stores JWT in localStorage; Next.js migration must move to HTTP-only cookies.
- Frontend and backend response formats should remain compatible while route handlers are migrated.
- `requireAdmin` currently trusts `x-user-role`; remove that trust and enforce DB/JWT role.
- Some SQL seed Bangla text appears mojibake/corrupted in `database/amarsheba.sql`; frontend catalog currently provides cleaner bilingual service text.
- Admin dashboard uses hardcoded `localhost:5000` API calls and must be migrated to `/api` or server-side database functions.
- `Contact.jsx` uses hardcoded backend URL.
- `servicesApi.js` merges backend services with local `serviceCatalog.js`; this behavior should be preserved so all 17 categories remain visible even if DB seed rows are incomplete.
- Several user dashboard features are localStorage-backed. If moved to database, new tables/migrations may be required.
- Browser-only features such as geolocation, print, localStorage, dark mode, and scroll listeners must remain in Client Components.
- Next.js hydration mismatch risk is high around locale/theme/auth initial state.
- The old `/emergency` route must redirect to `/services/emergency`.
- Public images should be migrated to `nextjs-app/public/images/` and rendered with Next.js `Image` where practical.

## Required Route Mapping

| React Router source | Next.js App Router destination |
| --- | --- |
| `frontend/src/pages/Home.jsx` | `nextjs-app/src/app/page.js` |
| `frontend/src/pages/Services.jsx` | `nextjs-app/src/app/services/page.js` |
| `frontend/src/pages/Emergency.jsx` | `nextjs-app/src/app/services/emergency/page.js` |
| `frontend/src/pages/ServiceDetails.jsx` | `nextjs-app/src/app/services/[serviceId]/page.js` |
| `frontend/src/pages/Assistant.jsx` | `nextjs-app/src/app/assistant/page.js` |
| `frontend/src/pages/Dashboard.jsx` | `nextjs-app/src/app/dashboard/page.js` |
| `frontend/src/pages/AdminDashboard.jsx` | `nextjs-app/src/app/admin/page.js` |
| `frontend/src/pages/Profile.jsx` | `nextjs-app/src/app/profile/page.js` |
| `frontend/src/pages/Login.jsx` | `nextjs-app/src/app/login/page.js` |
| `frontend/src/pages/Register.jsx` | `nextjs-app/src/app/register/page.js` |
| `frontend/src/pages/About.jsx` | `nextjs-app/src/app/about/page.js` |
| `frontend/src/pages/Contact.jsx` | `nextjs-app/src/app/contact/page.js` |
| `frontend/src/pages/FAQ.jsx` | `nextjs-app/src/app/faq/page.js` |
| `frontend/src/pages/NotFound.jsx` | `nextjs-app/src/app/not-found.js` |

## Recommended Next Phase

Phase 2 should create a fresh Next.js App Router project inside `nextjs-app/` using JavaScript, Tailwind CSS, ESLint, `src/`, and `@/` alias. Do not install `react-router-dom`. After scaffolding, copy only needed assets/configuration and migrate route by route.

