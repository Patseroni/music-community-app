import Header from '../components/Header'
import MainContent from '../components/MainContent'
import styles from '../styles/profilePage.module.css'

function ProfilePage() {
    return (
        <>
            <Header />
            <MainContent>
                <div className={styles.imgAndDescription}>
                    <div className={styles.profileImgDiv}>
                        <img className={styles.profileImg} src="#" alt="Artist profile image" />
                    </div>
                    <div className={styles.artistDescription}>
                        <textarea />
                    </div>
                </div>

                <div className={styles.songs}>
                    <h2>ProfilePage songs</h2>
                </div>


            </MainContent>
        </>
    )
}

export default ProfilePage