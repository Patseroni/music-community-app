import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: true,
        trim: true
    },
    filename: {
        type: String,
        required: true,
        trim: true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, { timestamps: true });

export default mongoose.model("Song", songSchema)