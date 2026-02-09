import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import noteRouter from "./routes/notes.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prisma fresh start");
});

app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
