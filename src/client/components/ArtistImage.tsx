import styles from '../styles/ArtistImage.module.css'
import songImage from "../../assets/images/defaultImage.webp";

function ArtistImage() {
    return (
        <>
            <div className={styles.imageDiv}>
                <img className={styles.image} src={songImage} alt="song image"></img>
            </div>

        </>
    )
}

export default ArtistImage