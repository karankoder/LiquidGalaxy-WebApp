import React, { useState } from 'react';
import { FaHome, FaMicrophone, FaGem, FaChartLine, FaEnvelope } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 0 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(0)}
                >
                    <FaHome />
                    Home
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 1 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(1)}
                >
                    <FaMicrophone />
                    Voice
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 2 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(2)}
                >
                    <FaGem />
                    Gemini
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 3 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(3)}
                >
                    <FaChartLine />
                    Progress
                </div>
                <div
                    className={`${styles['nav-item']} ${activeIndex === 4 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(4)}
                >
                    <FaEnvelope />
                    Contact
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
