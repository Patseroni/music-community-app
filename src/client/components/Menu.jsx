import { NavLink } from 'react-router-dom';
import styles from '../styles/Menu.module.css'

function Menu() {
    return (
        <>
            <nav className={styles.menu}>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
            </nav >
        </>
    )
}

export default Menu