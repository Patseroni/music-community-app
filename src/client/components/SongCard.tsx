import styles from '../styles/songCard.module.css'
import ArtistImage from './ArtistImage'

function SongCard() {
    return (
        <>
            <div className={styles.songCard}>
                <ArtistImage />
                <p>Artist<br />
                    Song</p>
            </div>
        </>
    )
}

export default SongCard