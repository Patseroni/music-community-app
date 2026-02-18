import styles from '../styles/songCard.module.css'
import ArtistImage from './ArtistImage'

function SongCard() {
    return (
        <>
            <div className={styles.songCard}>
                <ArtistImage />
                <p className={styles.artistTitle}>Artist</p>
                <p className={styles.songTitle}>Song</p>
            </div>
        </>
    )
}

export default SongCard