import styles from '../styles/MainContent.module.css'


function MainContent({ left, right, children }) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>{left}</div>
            <div className={styles.center}>{children}</div>
            <div className={styles.right}>{right}</div>
        </div>
    );
}

export default MainContent;