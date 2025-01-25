import React, { useState, useEffect, useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import { gsap } from "gsap"; // Import GSAP
import styles from "./Profile.module.css";

export default function Profile() {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        { number: 1, description: "Personal Info" },
        { number: 2, description: "Skills & Technologies" },
        { number: 3, description: "Projects & Contributions" },
        { number: 4, description: "Coding Vibe" }, // Shortened description
    ];

    const progressBarRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const connectors = progressBarRef.current.querySelectorAll(`.${styles.connector}`);
        gsap.fromTo(connectors, { width: 0 }, { width: "60px", duration: 0.5, stagger: 0.3 });
    }, []);

    const handleNext = () => {
        if (currentStep < steps.length) {
            gsap.to(formRef.current, {
                x: -100, opacity: 0, duration: 0.5, onComplete: () => {
                    setCurrentStep(currentStep + 1);
                    gsap.fromTo(formRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
                }
            });
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            gsap.to(formRef.current, {
                x: 100, opacity: 0, duration: 0.5, onComplete: () => {
                    setCurrentStep(currentStep - 1);
                    gsap.fromTo(formRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
                }
            });
        }
    };

    const renderFormContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Bio</label>
                            <input type="text" placeholder="Tell us a bit about yourself" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Enter your phone number" />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className={styles.formGroup}>
                            <label>Primary Skills</label>
                            <input type="text" placeholder="List your primary skills" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Technologies</label>
                            <input type="text" placeholder="List the technologies you are familiar with" />
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className={styles.formGroup}>
                            <label>GitHub ID</label>
                            <input type="text" placeholder="Enter your GitHub ID" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Projects</label>
                            <input type="text" placeholder="Describe your projects" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Contributions</label>
                            <input type="text" placeholder="Describe your contributions" />
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className={styles.formGroup}>
                            <label>Favorite Programming Meme or Joke</label>
                            <input type="text" placeholder="Share a meme or a funny programming joke you love" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Favorite Programming Language</label>
                            <input type="text" placeholder="Pick your favorite language and explain why" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Ultimate Dream Project</label>
                            <input type="text" placeholder="Describe the coolest project you'd love to build someday" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Tech Personality You Follow</label>
                            <input type="text" placeholder="Name a tech influencer, mentor, or personality who inspires you" />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.progressBar} ref={progressBarRef}>
                {steps.map((step, index) => (
                    <div key={step.number} className={styles.progressStep}>
                        <div
                            className={`${styles.circle} ${currentStep >= step.number ? styles.active : styles.inactive}`}
                        >
                            {currentStep > step.number ? <GiCheckMark /> : step.number}
                        </div>
                        <p className={styles.description}>{step.description}</p>
                        {index < steps.length - 1 && (
                            <div
                                className={`${styles.connector} ${currentStep > step.number ? styles.connectorActive : styles.connectorInactive}`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.formContainer} ref={formRef}>
                <h2 className={styles.formTitle}>
                    Step {currentStep}: {steps[currentStep - 1].description}
                </h2>
                <p className={styles.formDescription}>
                    Fill out the required information for this step.
                </p>
                <form>
                    {renderFormContent()}
                </form>
                <div className={styles.buttonContainer}>
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className={`${styles.button} ${styles.previousButton}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentStep === steps.length}
                        className={`${styles.button} ${styles.nextButton}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
