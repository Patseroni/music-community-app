import Header from '../components/Header'
import MainContent from '../components/MainContent'
import styles from "../styles/registerPage.module.css";

function RegisterPage() {
    return (
        <>
            <Header />
            <MainContent>

                <div className={styles.registerDiv}>
                    <h2 className={styles.registerAccount}>Register Account</h2>

                    <div className={styles.registerName}>
                        <h3>Username:</h3>
                        <input></input>
                    </div>

                    <div className={styles.registerEmail}>
                        <h3>Email:</h3>
                        <input></input>
                    </div>

                    <div className={styles.registerPassword}>
                        <h3>Password:</h3>
                        <input></input>
                    </div>
                    <div className={styles.registerButton}>
                        <button>Submit</button>
                    </div>

                </div>

            </MainContent>
        </>
    )
}

export default RegisterPage