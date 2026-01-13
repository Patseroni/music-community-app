import { Link } from 'react-router-dom';
import styles from '../styles/Menu.module.css'

function Menu() {
    return (
        <>
            <nav className={styles.menu}>
                <Link to='/profile'>Profile</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Log in</Link>
                <div className={styles.alignmentBlock}></div>
            </nav >
        </>
    )
}

export default Menu