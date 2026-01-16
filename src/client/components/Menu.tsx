import { NavLink } from 'react-router-dom';
import styles from '../styles/Menu.module.css'

function Menu() {
    return (
        <>
            <nav className={styles.menu}>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Log in</NavLink>
            </nav >
        </>
    )
}

export default Menu