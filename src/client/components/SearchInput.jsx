import styles from '../styles/searchInput.module.css'

function SearchInput() {
    return (
        <>
            <div className={styles.searchContainer}>
                <div className={styles.innerSearchDiv}>
                    <input type="text" placeholder='Search artist or song...'></input>
                    <button>Search</button>
                </div>
            </div>
            <div className={styles.discover}>
                <p>DISCOVER</p>
            </div>

        </>
    )
}

export default SearchInput