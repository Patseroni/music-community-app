import { timeStamp } from "console";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    artist: {
        type: String,
        required: true,
        trim: true
    },
    fileName: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: String,
    }

})