import express from "express";
import { OAuth2Client } from "google-auth-library";
import User from "../models/user.js";

const router = express.Router();
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

router.post("/google", async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();

        const user = {
            googleId: payload.sub,
            email: payload.email,
            name: payload.name,
            picture: payload.picture,
        };

        res.json({ user });
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
});

router.get("/test", async (req, res) => {
    try {
        const user = await User.create({
            username: "testuser",
            email: "test@test.com"
        });

        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

export default router;
