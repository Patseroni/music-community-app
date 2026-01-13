import styles from '../styles/ArtistImage.module.css'
import defaultImage from "../../assets/images/defaultImage.png";

function ArtistImage() {
    return (
        <>
            <div className={styles.imageDiv}>
                <img className={styles.image} src={defaultImage}></img>
            </div>

        </>
    )
}

export default ArtistImage