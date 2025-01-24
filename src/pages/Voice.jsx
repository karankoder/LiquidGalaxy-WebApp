import React, { useState, useEffect } from "react";
import styles from "./Voice.module.css";
import mic from '../assets/mic.svg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [barWidths, setBarWidths] = useState([25, 25, 25, 25]);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    useEffect(() => {
        console.log(listening);
        let interval;
        if (isAnimating && listening) {
            interval = setInterval(() => {
                setBarWidths([
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                ]);
            }, 200);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isAnimating, listening]);

    const handleMicClick = () => {
        if (isAnimating) {
            setBarWidths([25, 25, 25, 25]);
            SpeechRecognition.stopListening();
            resetTranscript();
        }
        else {
            SpeechRecognition.startListening();
        }
        setIsAnimating((prev) => !prev);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.micContainer} ${isAnimating && listening ? styles.glowing : ''}`} onClick={handleMicClick}>
                    <img src={mic} alt="Microphone Icon" className={styles.micImage} />
                </div>
                <div className={styles.message}>
                    Tap on Mic to Speak
                </div>
                <div className={styles.textContainer}>
                    {isAnimating ? (transcript.length ? transcript : "Listening...") : ""}
                </div>
                <div className={styles.bars}>
                    <div
                        className={`${styles.bar} ${styles.blue}`}
                        style={{ width: `${barWidths[0]}%` }}
                    ></div>
                    <div
                        className={`${styles.bar} ${styles.red}`}
                        style={{ width: `${barWidths[1]}%` }}
                    ></div>
                    <div
                        className={`${styles.bar} ${styles.yellow}`}
                        style={{ width: `${barWidths[2]}%` }}
                    ></div>
                    <div
                        className={`${styles.bar} ${styles.green}`}
                        style={{ width: `${barWidths[3]}%` }}
                    ></div>
                </div>
            </div>

        </>
    );
};

export default Voice;
