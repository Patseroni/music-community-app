import Header from '../components/Header'
import MainContent from '../components/MainContent'
import InformationTop from '../components/InformationTop'
import styles from '../styles/homePage.module.css'
import SongCard from '../components/SongCard'
import SearchInput from '../components/SearchInput'

function HomePage() {
    return (
        <>
            <Header />
            <InformationTop />
            <MainContent>
                <SearchInput />
                <div className={styles.songGrid}>
                    <ul>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                        <li><SongCard /></li>
                    </ul>
                </div>

            </MainContent>
        </>

    );
}

export default HomePage