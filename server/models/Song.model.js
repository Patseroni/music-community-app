import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true });

export default mongoose.model("Song", songSchema)