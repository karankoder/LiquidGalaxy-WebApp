import React, { useState } from 'react';
import { FaHome, FaMicrophone, FaRobot, FaChartLine, FaCog } from 'react-icons/fa';
import Lottie from 'lottie-react';
import styles from './Header.module.css';
import homeAnimation from '../assets/home-animation.json';

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHomeAnimating, setIsHomeAnimating] = useState(false);
    const [isMicAnimating, setIsMicAnimating] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 0 ? styles.active : ''}`}
                    onClick={() => {
                        setActiveIndex(0);
                        setIsHomeAnimating(true);
                    }}
                >
                    {isHomeAnimating ? (
                        <Lottie
                            animationData={homeAnimation}
                            loop={false}
                            onComplete={() => setIsHomeAnimating(false)}
                            style={{ width: '30px', height: '30px' }}
                        />
                    ) : (
                        <FaHome size={25} />
                    )}
                    <span className={styles['nav-text']}>Home</span>
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 1 ? styles.active : ''}`}
                    onClick={() => {
                        setActiveIndex(1);
                        setIsMicAnimating(true);
                    }}
                >
                    {isMicAnimating ? (
                        <FaMicrophone
                            size={22}
                            className={styles.micAnimating}
                            onAnimationEnd={() => setIsMicAnimating(false)}
                        />
                    ) : (
                        <FaMicrophone size={22} />
                    )}
                    <span className={styles['nav-text']}>Voice</span>
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 2 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(2)}
                >
                    <FaRobot size={25} />
                    <span className={styles['nav-text']}>Gemini</span>
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 3 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(3)}
                >
                    <FaChartLine size={25} />
                    <span className={styles['nav-text']}>Progress</span>
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 4 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(4)}
                >
                    <FaCog size={25} />
                    <span className={styles['nav-text']}>Setting</span>
                </div>
                <span
                    className={styles.underline}
                    style={{
                        left: activeIndex !== null ? `${(activeIndex * 100) / 5}%` : '0%',
                        width: activeIndex !== null ? `${100 / 5}%` : '0%',
                    }}
                ></span>
            </nav>
        </header>
    );
};

export default Header;
