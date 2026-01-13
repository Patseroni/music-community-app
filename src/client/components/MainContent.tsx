import styles from '../styles/MainContent.module.css'
import { Link } from 'react-router-dom';
import ArtistImage from './ArtistImage';

function MainContent() {
    return (
        <>
            <div className={styles.topMainContent}>
                <p className={styles.welcomeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sit amet euismod risus. Ut rutrum ex dignissim, elementum mi ut, auctor nulla.
                    Vestibulum sit amet tellus quam. Nullam orci magna, luctus id gravida id, condimentum ut odio.
                    Morbi urna turpis, porta maximus elit in, euismod sodales sem.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Cras ut neque iaculis, viverra ante at, commodo est.
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                </div>
                <div className={styles.center}>
                    <ArtistImage />
                </div>
                <div className={styles.right}>
                </div>
            </div>
        </>
    )

}

export default MainContent