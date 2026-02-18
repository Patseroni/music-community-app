import express from "express";
import fs from "fs";
import upload from "../middleware/upload.js";

const router = express.Router();

// Upload song
router.post("/upload", upload.single("song"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    res.json({
        filename: req.file.filename,
    });
});

// Get uploaded songs
router.get("/", (req, res) => {
    if (!fs.existsSync("uploads")) {
        return res.json({ songs: [] });
    }

    const files = fs.readdirSync("uploads");
    res.json({ songs: files });
});

export default router;
