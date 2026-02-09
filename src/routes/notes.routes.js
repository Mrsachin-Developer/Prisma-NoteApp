import police from "../middleware/auth.middleware.js";
import { Router } from "express";
import {
  addNote,
  deleteNote,
  updateNote,
  getAllNote,
} from "../controllers/notes.controller.js";

const router = Router();

router.post("/", police, addNote);
router.get("/", police, getAllNote);
router.put("/:id", police, updateNote);
router.delete("/:id", police, deleteNote);

export default router;
