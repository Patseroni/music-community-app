import express from 'express';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/profile-image', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({
        filename: req.file.filename,
        originalname: req.file.originalname
    });
});

export default router;