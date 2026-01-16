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
                        <p>first: empty</p>
                    </div>
                    <div className={styles.artistImage}>
                        <p>second: image</p>
                        <input type="file" name="image" />
                    </div>
                    <div>
                        <p>third: artist description text</p>
                    </div>
                    <div>
                        <button> fourth: Edit Description</button>
                    </div>
                    <div>
                        <p>fifth: empty</p>
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