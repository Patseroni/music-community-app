import { NavLink } from 'react-router-dom';
import styles from '../styles/Menu.module.css'
import GoogleLoginButton from './GoogleLoginButton';

function Menu() {
    return (
        <>
            <nav className={styles.menu}>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/profile'><GoogleLoginButton /></NavLink>
            </nav >
        </>
    )
}

export default Menu