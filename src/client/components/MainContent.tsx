import styles from '../styles/MainContent.module.css'
import ArtistImage from './ArtistImage';

function MainContent() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                </div>
                <div className={styles.center}>
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                    <ArtistImage />
                </div>
                <div className={styles.right}>
                </div>
            </div>
        </>
    )

}

export default MainContent