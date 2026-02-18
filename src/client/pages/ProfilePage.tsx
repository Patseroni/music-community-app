import Header from '../components/Header'
import MainContent from '../components/MainContent'
import styles from '../styles/profilePage.module.css'
import ArtistPresentation from '../components/ArtistPresentation'
import ProfileSongList from '../components/ProfileSongList'

function ProfilePage() {
    return (
        <>
            <Header />
            <ArtistPresentation />
            <MainContent>

                <div className={styles.songs}>
                    <ProfileSongList />
                </div>

            </MainContent>
        </>
    )
}

export default ProfilePage