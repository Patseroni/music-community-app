import type { ReactNode } from 'react';
import styles from '../styles/MainContent.module.css'


type MainContentProps = {
    left?: ReactNode;
    right?: ReactNode;
    children?: ReactNode;
};

function MainContent({ left, right, children }: MainContentProps) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>{left}</div>
            <div className={styles.center}>{children}</div>
            <div className={styles.right}>{right}</div>
        </div>
    );
}

export default MainContent;