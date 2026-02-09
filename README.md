# 📝 Notes API --- Prisma + Express (Day 2 & Day 3 Project)

A production-style backend Notes API built with **Node.js, Express,
Prisma, and PostgreSQL (Neon)**.\
This project covers authentication, CRUD operations, filtering,
pagination, and sorting.

------------------------------------------------------------------------

## 🚀 Features

### 🔐 Authentication

-   JWT-based auth middleware
-   Protected routes
-   Each user can access only their notes

### 🗂 Notes CRUD

-   Create note
-   Update note
-   Delete note
-   Get single note
-   Get all notes

### 🔎 Query Features (Day 3)

-   Search notes by title
-   Pagination (`page`, `limit`)
-   Sorting (`asc` / `desc`)
-   User-based filtering

------------------------------------------------------------------------

## 🛠 Tech Stack

-   Node.js
-   Express
-   Prisma ORM
-   PostgreSQL (Neon)
-   JWT Authentication

------------------------------------------------------------------------

## 📂 Project Structure

    src/
     ├─ controllers/
     │   └─ notes.controller.js
     ├─ routes/
     │   └─ notes.routes.js
     ├─ middleware/
     │   └─ auth.middleware.js
     ├─ db.js
     └─ server.js

------------------------------------------------------------------------

## 📡 API Endpoints

### Auth

    POST /api/auth/signup
    POST /api/auth/login

### Notes

    POST   /api/notes
    GET    /api/notes
    GET    /api/notes/:id
    PUT    /api/notes/:id
    DELETE /api/notes/:id

------------------------------------------------------------------------

## 🔎 Query Examples

### Pagination

    GET /api/notes?page=2&limit=5

### Search

    GET /api/notes?search=physics

### Sorting

    GET /api/notes?sort=asc

### Combined

    GET /api/notes?search=phy&page=1&limit=3&sort=desc

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1. Install dependencies

    npm install

### 2. Setup `.env`

    DATABASE_URL=your_postgres_url
    JWT_SECRET=your_secret
    PORT=5000

### 3. Prisma setup

    npx prisma generate
    npx prisma db push

### 4. Run server

    npm run dev

------------------------------------------------------------------------

## 🧠 Concepts Learned

-   Prisma relations (1 → many)
-   JWT authentication
-   Protected routes
-   Dynamic queries
-   Pagination logic
-   Search filtering
-   Sorting
-   API design

------------------------------------------------------------------------

## 📈 Next Improvements

-   Total pages & count
-   Date filtering
-   Many-to-many (Tags)
-   Validation with Zod
-   Production deployment

------------------------------------------------------------------------

## 👨‍💻 Author

Backend practice project for learning Prisma & API design.
