# AmarSheba

Production-ready React + JavaScript application with Tailwind CSS, React Router, Bangla/English locale files, dark/light mode, shared layout components, search, responsive pages, and an Emergency Services module.

## Run locally

Frontend:

```bash
npm install
npm run dev
```

Backend API for Emergency Services:

```bash
cd backend
npm install
npm run dev
```

The backend reads MySQL settings from environment variables:

```text
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=amarsheba
```

## Build

```bash
npm run build
```

## Emergency Services

Frontend route:

```text
/emergency
```

User features:

- Emergency category cards with icon, description, phone, Call Now, View Details, and favorite saving.
- Instant search for ambulance, police, hospital, fire, blood, and related terms.
- Browser Geolocation support. If permission is granted, the page shows nearby emergency services; if denied, national contacts are shown.
- Homepage Emergency Help quick buttons for Ambulance, Fire, Police, Blood, and Hospital.
- Admin Dashboard includes Emergency Management for add, edit, delete, activate/deactivate, search, and category filtering.

Backend endpoints:

```text
GET    /api/emergency
GET    /api/emergency/:id
POST   /api/emergency       admin only, send x-user-role: admin
PUT    /api/emergency/:id   admin only, send x-user-role: admin
DELETE /api/emergency/:id   admin only, send x-user-role: admin
```

Database SQL:

```text
database/emergency_services.sql
```

## Structure

```text
src/
  components/
  context/
  data/
  layouts/
  locales/
  pages/
  utils/
backend/
  src/
    controllers/
    middleware/
    routes/
database/
```
