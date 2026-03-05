import { useState } from 'react'
import styles from '../styles/artistPresentation.module.css'

function ArtistPresentation() {

    const [preview, setPreview] = useState<string | null>(null);

    async function uploadImage(file: File) {
        const formData = new FormData();
        formData.append('image', file);

        const res = await fetch('http://localhost:5000/profile-image', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();
        console.log('Uploaded:', data);
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);

        uploadImage(file);
    }

    return (
        <>
            <div className={styles.artistContainer}>
                <div className={styles.imgAndBrowseDiv}>
                    <img src={preview || '#'} alt="Artist profile image" />
                    <input type="file" name="image" onChange={handleFileChange} />
                </div>

                <div className={styles.descriptionAndButtonDiv}>
                    <div className={styles.descriptionDiv}>
                        <p>Description...</p>
                    </div>
                    <button>Edit Description...</button>
                </div>


            </div >
        </>
    )
}

export default ArtistPresentation