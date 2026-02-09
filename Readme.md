# 📘 Day 2 — Notes App (One-to-Many Relations with Prisma)

## 🧠 Goal
Build a Notes backend where:

User → many Notes

Learn relational database connections using **foreign keys** and Prisma relations.

---

## 🚀 Features Implemented
- Create note  
- Get all notes of logged-in user  
- Update note  
- Delete note  
- JWT-protected routes  
- Prisma relations  
- Ownership checks  
- Clean API responses  

---

## 🗄️ Database Design

### Relation
User (1) ───── (many) Note

Each note belongs to one user.

So **Note table stores the foreign key**.

---

## Prisma Schema

```prisma
model User {
  id       String @id @default(uuid())
  username String
  email    String @unique
  password String

  notes    Note[]
}

model Note {
  id          String   @id @default(uuid())
  title       String
  description String

  userId String
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 🔑 Key Concepts Learned

### Foreign Keys
`userId` inside Note connects note → user.

### Prisma Relations
Defined using:
```
@relation(fields: [userId], references: [id])
```

### Cascade Delete
```
onDelete: Cascade
```
Deleting a user removes all their notes automatically.

### Protected Routes (JWT)
Token → verify → req.user.id → controller

---

## 🛠️ API Routes

Base URL:
```
/api/notes
```

| Method | Route | Description |
|--------|------|------------|
POST | `/` | Create note |
GET | `/` | Get user notes |
PUT | `/:id` | Update note |
DELETE | `/:id` | Delete note |

All routes require:
```
Authorization: Bearer TOKEN
```

---

## 🧾 Example Request

### Create Note
```
POST /api/notes
Authorization: Bearer token
```

Body:
```json
{
  "title": "Physics",
  "description": "Motion"
}
```

---

## 🧱 Project Structure
```
project/
 ├── controllers/
 │   └── notes.controller.js
 ├── routes/
 │   └── notes.routes.js
 ├── middleware/
 │   └── auth.middleware.js
 ├── prisma/
 │   └── schema.prisma
 ├── server.js
 └── .env
```

---

## ⚙️ Tech Stack
- Node.js  
- Express  
- Prisma ORM  
- PostgreSQL  
- JWT Authentication  

---

## 🏁 Status
Day 2 complete. Fully functional Notes backend with relational data.



