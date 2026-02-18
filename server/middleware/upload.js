import multer from "multer";

const upload = multer({
    dest: "uploads/",
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["audio/mpeg", "audio/wav"];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only mp3 and wav files are allowed"));
        }
    },
});

export default upload;
