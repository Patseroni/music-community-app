import express from "express";
import upload from "../middleware/upload.js";
import Song from "../models/Song.model.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";
import crypto from "crypto";

const router = express.Router();
const MAX_FILES_PER_USER = 5;

// Upload song
router.post("/upload", upload.single("song"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded or invalid file type" });
        }

        const ext = req.file.originalname.split(".").pop();
        const filename = crypto.randomUUID() + "." + ext;

        await r2.send(new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: filename,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
        }));

        const bucket = process.env.R2_BUCKET_NAME;
        const fileUrl = `https://${bucket}.r2.dev/${filename}`;

        const song = new Song({
            filename: filename,
            originalname: req.file.originalname,
            url: fileUrl
        });

        await song.save();

        res.json(song);
    }
    catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({
            error: "Something went wrong when uploading song"
        })
    }

});

// Get uploaded songs
router.get("/", async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    }
    catch (error) {
        console.error("Fetch songs error:", error);
        res.status(500).json({
            error: "Failed to fetch songs"
        });
    }


});


export default router;
