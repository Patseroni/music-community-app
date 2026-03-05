import express from "express";
import fs from "fs";
import upload from "../middleware/upload.js";


const router = express.Router();

// Upload song
router.post("/upload", upload.single("song"), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    res.json({
        filename: req.file.filename,
        originalname: req.file.originalname
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
