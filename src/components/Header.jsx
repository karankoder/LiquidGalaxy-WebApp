import React, { useState } from 'react';
import { FaHome, FaMicrophone, FaRobot, FaChartLine, FaCog } from 'react-icons/fa';
import { RiGeminiFill } from "react-icons/ri";
import Lottie from 'lottie-react';
import styles from './Header.module.css';
import homeAnimation from '../assets/home-animation.json';
import geminiAnimation from '../assets/gemini-animation.json';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHomeAnimating, setIsHomeAnimating] = useState(false);
    const [isMicAnimating, setIsMicAnimating] = useState(false);
    const [isGeminiAnimating, setIsGeminiAnimating] = useState(false);
    const handleNavClick = (index) => {
        const pages = document.querySelectorAll('.container');
        gsap.to(pages, {
            x: `${-100 * index}%`,
            duration: 1,
            ease: 'power2.inOut'
        });
        setActiveIndex(index);
    };


    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/'
                    className={`${styles['nav-item']} ${activeIndex === 0 ? styles.active : ''}`}
                    onClick={() => {
                        setActiveIndex(0);
                        setIsHomeAnimating(true);
                        // handleNavClick(0);
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
                </Link>
                <Link to='/voice'
                    className={`${styles['nav-item']} ${activeIndex === 1 ? styles.active : ''}`}
                    onClick={() => {
                        setActiveIndex(1);
                        setIsMicAnimating(true);
                        // handleNavClick(1);
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
                </Link>
                <Link to='/gemini'
                    className={`${styles['nav-item']} ${activeIndex === 2 ? styles.active : ''}`}
                    onClick={() => {
                        setActiveIndex(2);
                        setIsGeminiAnimating(true);
                    }}
                >
                    <RiGeminiFill
                        size={25}
                        className={isGeminiAnimating ? styles.geminiAnimating : ''}
                        onAnimationEnd={() => setIsGeminiAnimating(false)}
                    />
                    <span className={styles['nav-text']}>Gemini</span>
                </Link>
                <Link to='/progress'
                    className={`${styles['nav-item']} ${activeIndex === 3 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(3)}
                >
                    <FaChartLine size={25} />
                    <span className={styles['nav-text']}>Progress</span>
                </Link>
                <Link to='/settings'
                    className={`${styles['nav-item']} ${activeIndex === 4 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(4)}
                >
                    <FaCog size={25} />
                    <span className={styles['nav-text']}>Setting</span>
                </Link>
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
