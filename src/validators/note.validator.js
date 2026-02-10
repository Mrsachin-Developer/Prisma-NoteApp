import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description is to long"),

  tags: z.array(z.string().min(1).max(30)).optional(),
});
export const updateNoteSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  description: z.string().min(1).max(1000).optional(),
});

export const querySchema = z.object({
  search: z.string().optional(),
  page: z.string().optional(),
  tag: z.string().optional(),
  limit: z.string().optional(),
  sort: z.enum(["asc", "desc"]).optional(),
});
