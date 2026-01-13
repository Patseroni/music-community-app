import styles from '../styles/ArtistImage.module.css'
import defaultImage from "../../assets/images/defaultImage.webp";

type ArtistImageProps = {
    src?: string | null;
};

function ArtistImage() {
    return (
        <>
            <div className={styles.imageDiv}>
                <img className={styles.image} src={defaultImage} alt="default image"></img>
            </div>

        </>
    )
}

export default ArtistImage