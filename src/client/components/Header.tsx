import Menu from './Menu.tsx'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.headerHeading}>Retrowave Music Community</h1>
                <Menu />
            </div>

        </>
    )

}
export default Header