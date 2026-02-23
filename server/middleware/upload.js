import multer from "multer";

const upload = multer({
    dest: "uploads/",
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["audio/mpeg", "audio/wav", "audio/flac"];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only .mp3, .wav and .flac files are allowed"));
        }
    },
});

export default upload;
