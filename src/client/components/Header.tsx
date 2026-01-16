import Menu from './Menu.tsx'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headingDiv}>
                    <h1 className={styles.headerHeading}>Retrowave Music Community</h1>
                    <img className={styles.logo} src="../src/assets/images/R_logo2.webp" alt="Logotype" />
                </div>
                <Menu />
            </div>

        </>
    )

}
export default Header