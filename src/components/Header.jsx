import React, { useState } from 'react';
import { FaHome, FaMicrophone, FaUser, FaCog, FaRegUserCircle } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';
import { RiGeminiFill } from "react-icons/ri";
import Lottie from 'lottie-react';
import styles from './Header.module.css';
import homeAnimation from '../assets/home-animation.json';
import geminiAnimation from '../assets/gemini-animation.json';
import settingAnimation from '../assets/setting-animation.json';
import profileAnimation from '../assets/profile-animation2.json';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';



const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHomeAnimating, setIsHomeAnimating] = useState(false);
    const [isMicAnimating, setIsMicAnimating] = useState(false);
    const [isGeminiAnimating, setIsGeminiAnimating] = useState(false);
    const [isProfileAnimating, setIsProfileAnimating] = useState(false);
    const [isSettingAnimating, setIsSettingAnimating] = useState(false);



    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/'
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
                </Link>
                <Link to='/voice'
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
                <Link to='/profile'
                    className={`${styles['nav-item']} ${activeIndex === 3 ? styles.active : ''}`}
                    onClick={() => {
                        setActiveIndex(3);
                        setIsProfileAnimating(true);
                    }}
                >
                    {isProfileAnimating ? (
                        <Lottie
                            animationData={profileAnimation}
                            loop={false}
                            onComplete={() => setIsProfileAnimating(false)}
                            style={{ width: '35px', height: '35px' }}
                        />
                    ) : (
                        <BiSolidUser size={25} />
                    )}
                    <span className={styles['nav-text']}>Profile</span>
                </Link>
                <Link to='/settings'
                    className={`${styles['nav-item']} ${activeIndex === 4 ? styles.active : ''}`}
                    onClick={() => setActiveIndex(4)}
                >
                    {isSettingAnimating ? (
                        <Lottie
                            animationData={settingAnimation}
                            loop={false}
                            onComplete={() => setIsSettingAnimating(false)}
                            style={{ width: '35px', height: '35px' }}
                        />
                    ) : (
                        <FaCog size={25} />
                    )}
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
        </header >
    );
};

export default Header;
