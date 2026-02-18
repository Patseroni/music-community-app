import styles from '../styles/artistPresentation.module.css'

function ArtistPresentation() {
    return (
        <>
            <div className={styles.artistContainer}>
                <div className={styles.imgAndBrowseDiv}>
                    <img src="#" alt="Artist profile image" />
                    <input type="file" name="image" />
                </div>

                <div className={styles.descriptionAndButtonDiv}>
                    <div className={styles.descriptionDiv}>
                        <p>Description...</p>
                    </div>
                    <button>Edit Description...</button>
                </div>


            </div >
        </>
    )
}

export default ArtistPresentation