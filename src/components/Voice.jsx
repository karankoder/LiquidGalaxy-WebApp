import React, { useState, useEffect } from "react";
import "./voice.modular.css";
import mic from '../assets/mic.svg';

const Visualizer = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [barWidths, setBarWidths] = useState([25, 25, 25, 25]);

    useEffect(() => {
        let interval;
        if (isAnimating) {
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
    }, [isAnimating]);

    const handleMicClick = () => {
        if (isAnimating) {
            setBarWidths([25, 25, 25, 25]);
        }
        setIsAnimating((prev) => !prev);
    };

    return (
        <div className="visualizer-container">
            <div className="container">
                <div className="glow-ring"></div>
                <div className="icon">
                    <img src={mic} alt="Microphone Icon" className="mic-image" />
                </div>
            </div>
            <div className="bars">
                <div
                    className="bar blue"
                    style={{ width: `${barWidths[0]}%` }}
                ></div>
                <div
                    className="bar red"
                    style={{ width: `${barWidths[1]}%` }}
                ></div>
                <div
                    className="bar yellow"
                    style={{ width: `${barWidths[2]}%` }}
                ></div>
                <div
                    className="bar green"
                    style={{ width: `${barWidths[3]}%` }}
                ></div>
            </div>
        </div >
    );
};

export default Visualizer;
