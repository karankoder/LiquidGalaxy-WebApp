import React from 'react';
import styles from './Settings.module.css';
import Background from '../components/Background';

export default function Settings() {
    return (
        <>
            <Background />
            <div className={styles.pageContainer}>
                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Settings</h2>
                    <p className={styles.formDescription}>Configure your Liquid Galaxy setup.</p>
                    <form>
                        <div className={styles.formGroup}>
                            <label>Host IP Address</label>
                            <input type="text" placeholder="Enter the host IP address" className={`${styles.input} ${styles.themeInput}`} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Port</label>
                            <input type="text" placeholder="Enter the port" className={`${styles.input} ${styles.themeInput}`} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Username</label>
                            <input type="text" placeholder="Enter the username" className={`${styles.input} ${styles.themeInput}`} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <input type="password" placeholder="Enter the password" className={`${styles.input} ${styles.themeInput}`} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Number of LG Rigs</label>
                            <input type="number" placeholder="Enter the number of LG rigs" className={`${styles.input} ${styles.themeInput}`} />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="button" className={styles.button}>Connect</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
