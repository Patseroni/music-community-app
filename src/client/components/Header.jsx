import Menu from './Menu.jsx'
import styles from '../styles/header.module.css'
import logo from '../../assets/images/R_logo2.webp'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headingDiv}>
                    <NavLink to="/"><img className={styles.logo} src={logo} alt="Logotype" /></NavLink>
                    <h1 className={styles.headerHeading}>Retrowave Music Community</h1>
                </div>
                <Menu />
            </div>

        </>
    )

}
export default Header