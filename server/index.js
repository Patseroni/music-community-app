import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import songRoutes from "./routes/song.routes.js";

const PORT = process.env.PORT || 5000;

dotenv.config({ path: "./.env" })

import connectDB from "./config/db.js";
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/songs", songRoutes);

app.listen(PORT, () => {
    console.log("PORT: " + PORT);
    console.log("Server running on http://localhost:5000");
});
