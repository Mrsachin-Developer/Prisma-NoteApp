# 📝 Notes API --- Production Ready Backend (Prisma + Express)

A production-style backend Notes API built with **Node.js, Express,
Prisma, and PostgreSQL (Neon)**.\
This project demonstrates real-world backend architecture including
authentication, pagination, validation, and many-to-many relations.

---

## 🚀 Features

### 🔐 Authentication

- JWT-based auth middleware\
- Protected routes\
- User-specific data access

### 🗂 Notes CRUD

- Create note\
- Update note\
- Delete note\
- Get single note\
- Get all notes

### 🏷 Tags System (Many-to-Many)

- Add tags while creating notes\
- Auto-create tag if not exists\
- Connect existing tags\
- Filter notes by tag

### 🔎 Query Features

- Search notes by title\
- Filter by tag\
- Pagination (`page`, `limit`)\
- Sorting (`asc` / `desc`)\
- Total pages & total count

### 🛡 Validation

- Zod validation for body & query\
- Prevent invalid input

---

## 🛠 Tech Stack

- Node.js\
- Express\
- Prisma ORM\
- PostgreSQL (Neon)\
- JWT Authentication\
- Zod Validation

---

## 📂 Project Structure

    src/
     ├─ controllers/
     │   └─ notes.controller.js
     ├─ routes/
     │   └─ notes.routes.js
     ├─ middleware/
     │   └─ auth.middleware.js
     ├─ validators/
     │   └─ note.validator.js
     ├─ db.js
     └─ server.js

---

## 📡 API Endpoints

### Auth

POST /api/auth/signup\
POST /api/auth/login

### Notes

POST /api/notes\
GET /api/notes\
GET /api/notes/:id\
PUT /api/notes/:id\
DELETE /api/notes/:id

---

## 🔎 Query Examples

GET /api/notes?page=2&limit=5\
GET /api/notes?search=physics\
GET /api/notes?tag=study\
GET /api/notes?tag=study&search=phy&page=1&limit=5&sort=desc

---

## ⚙️ Setup

npm install\
npx prisma generate\
npx prisma db push\
npm run dev

---

## 👨‍💻 Author

Backend portfolio project demonstrating production-ready API design.
