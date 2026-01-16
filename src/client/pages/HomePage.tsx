import Header from '../components/Header'
import MainContent from '../components/MainContent'
import InformationTop from '../components/InformationTop'
import styles from '../styles/homePage.module.css'
import SongCard from '../components/songCard'

function HomePage() {
    return (
        <>
            <Header />
            <InformationTop />
            <MainContent>
                <div className={styles.songGrid}>
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </div>

            </MainContent>
        </>

    );
}

export default HomePage