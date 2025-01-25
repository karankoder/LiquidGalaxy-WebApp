import React from "react";
import styles from "./Home.module.css";
import { FaMicrophone, FaNetworkWired, FaUser } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onConnect = () => {
        navigate("/settings");
    };

    return (

        <div className={styles.container}>
            <div className={styles.heroSection}>
                <h1 className={styles.heroTitle}>
                    Liquid Galaxy
                    <span> Web App</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Track, analyze, and manage your Liquid Galaxy interactions with
                    powerful tools and insights
                </p>
                <button onClick={onConnect} className={styles.connectButton}>Connect to LG</button>
            </div>

            <div className={styles.featuresGrid}>
                <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                    <div className={`${styles.featureIcon} ${styles.bgBlue}`}>
                        <FaMicrophone className={styles.icon} />
                    </div>
                    <h3 className={styles.featureTitle}>Google Voice</h3>
                    <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                        Use voice commands to control and interact with Liquid Galaxy
                    </p>
                </div>

                <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                    <div className={`${styles.featureIcon} ${styles.bgPurple}`}>
                        <RiGeminiFill className={styles.icon} />
                    </div>
                    <h3 className={styles.featureTitle}>Gemini</h3>
                    <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                        Integrate with Gemini for enhanced data visualization and control
                    </p>
                </div>

                <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                    <div className={`${styles.featureIcon} ${styles.bgGreen}`}>
                        <FaNetworkWired className={styles.icon} />
                    </div>
                    <h3 className={styles.featureTitle}>Connect with LG rigs</h3>
                    <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                        Seamlessly connect and manage multiple Liquid Galaxy rigs
                    </p>
                </div>

                <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                    <div className={`${styles.featureIcon} ${styles.bgYellow}`}>
                        <FaUser className={styles.icon} />
                    </div>
                    <h3 className={styles.featureTitle}>Profile</h3>
                    <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                        Manage your profile and settings for a personalized experience
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Home;
