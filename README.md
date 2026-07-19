# AmarSheba

AmarSheba is a full-stack Bangladesh citizen services platform built with:

- React + Vite + Tailwind CSS frontend
- Node.js + Express backend
- MySQL database

This guide explains how to run the project from A to Z on **Windows with XAMPP**.

## Project Location

Put the project in this exact folder:

```text
C:\xampp\htdocs\AmarSheba
```

Your structure should look like this:

```text
AmarSheba/
  frontend/
  backend/
  database/
  README.md
```

## Requirements

Make sure these are installed:

- XAMPP
- Node.js
- npm

## Step 1: Move Project Into XAMPP htdocs

Copy or move the AmarSheba project folder here:

```text
C:\xampp\htdocs\AmarSheba
```

## Step 2: Start XAMPP MySQL

1. Open **XAMPP Control Panel**
2. Start **MySQL**

You do not need Apache for the React frontend, but MySQL must be running.

## Step 3: Open phpMyAdmin

Open this URL in your browser:

[http://localhost/phpmyadmin](http://localhost/phpmyadmin)

## Step 4: Create or Import Database

### Option A: Import the ready SQL file

1. In phpMyAdmin, click **New**
2. Create a database named:

```text
amarsheba
```

3. Open the new database
4. Click **Import**
5. Select this file:

```text
C:\xampp\htdocs\AmarSheba\database\amarsheba.sql
```

6. Click **Go**

This will create the required tables and seed initial data.

## Step 5: Backend Environment Setup

Go to:

```text
C:\xampp\htdocs\AmarSheba\backend
```

Create a `.env` file if it does not already exist.

Use this config:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=amarsheba
PORT=5000
JWT_SECRET=amarsheba_secret_key
JWT_EXPIRES_IN=7d
OTP_EXPIRES_MINUTES=10
```

Optional SMTP config for OTP email:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
SMTP_FROM=AmarSheba <no-reply@example.com>
```

If SMTP is not configured, OTP codes will be logged on the backend server console.

## Step 6: Run Backend

Open Command Prompt or PowerShell:

```bash
cd C:\xampp\htdocs\AmarSheba\backend
npm install
npm run dev
```

Backend will run at:

[http://localhost:5000](http://localhost:5000)

Health check:

[http://localhost:5000/api/health](http://localhost:5000/api/health)

## Step 7: Run Frontend

Open a new Command Prompt or PowerShell window:

```bash
cd C:\xampp\htdocs\AmarSheba\frontend
npm install
npm run dev
```

Frontend will run at:

[http://localhost:5173](http://localhost:5173)

## Step 8: Application URLs

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5000](http://localhost:5000)

## Step 9: Admin Login

Use this admin account:

```text
Email: admin@amarsheba.com
Password: admin123
```

## Backend Commands

```bash
cd C:\xampp\htdocs\AmarSheba\backend
npm install
npm run dev
```

## Frontend Commands

```bash
cd C:\xampp\htdocs\AmarSheba\frontend
npm install
npm run dev
```

## Main Features

- Bilingual interface (Bangla + English)
- Authentication with backend API
- OTP email verification
- Services API
- Contact API
- Admin dashboard
- Emergency services directory
- AI assistant page

## Important Notes

- MySQL must be running before starting the backend
- Database name must be `amarsheba`
- Backend uses port `5000`
- Frontend uses port `5173`
- If port `5173` is busy, Vite may choose another port automatically
- OTP email sending requires SMTP settings in `backend/.env`

## Troubleshooting

### MySQL connection error

Make sure:

- XAMPP MySQL is started
- database name is `amarsheba`
- `backend/.env` matches your local MySQL config

### Frontend not opening

Make sure:

- frontend dependencies are installed
- Vite dev server is running

### Backend not opening

Make sure:

- backend dependencies are installed
- MySQL is running
- `.env` exists inside `backend`

### OTP email not received

If SMTP is not configured, check the backend terminal output. The OTP will be logged there for development.

## Git Notes

This project is git-ready. Generated folders like `node_modules`, `dist`, and `.vite` should remain ignored.
