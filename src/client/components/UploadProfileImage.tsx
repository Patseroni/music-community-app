import { useState } from "react";
import styles from "../styles/uploadProfileImage.module.css"

function UploadProfileImage() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    }

    return (
        <>

        </>
    )
}

export default UploadProfileImage