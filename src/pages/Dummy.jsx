import React, { useState } from 'react';

function Dummy() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        // Add other form fields here
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h2>Step 1: Basic Information</h2>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2>Step 2: About You</h2>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Tell us about yourself"
                        />
                        <button onClick={handlePrev}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            // Add more steps as needed
            default:
                return <div>Profile Completed!</div>;
        }
    };

    return (
        <div className="container">
            <div className="progress-bar">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                    <span>1</span>
                </div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                    <span>2</span>
                </div>
                {/* Add more steps here */}
            </div>

            {renderStep()}
        </div>
    );
}

export default Dummy;