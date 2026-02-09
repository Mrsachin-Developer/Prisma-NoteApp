import { Router } from "express";
import police from "../middleware/auth.middleware.js";

import {
  addNote,
  deleteNote,
  updateNote,
  getNote,
  getNoteById,
} from "../controllers/notes.controller.js";

const router = Router();

router.post("/", police, addNote);

// get all notes (with search, pagination, sorting)
router.get("/", police, getNote);

router.get("/:id", police, getNoteById);
router.put("/:id", police, updateNote);

router.delete("/:id", police, deleteNote);

export default router;
