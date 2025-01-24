import React, { useState } from 'react';
import './Gemini.css'; // Ensure this path is correct
import geminiIcon from '../assets/gemini.svg'; // Update the path to your image

export default function Gemini() {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I help you today?' },
        { sender: 'user', text: 'I need some information about the project.' },
        { sender: 'bot', text: 'Sure! What would you like to know?' },
        { sender: 'user', text: 'Can you tell me about the main features?' },
        { sender: 'bot', text: 'Of course! Here are the main features...' }
    ]);

    const toggleChatWindow = () => {
        setShowChat((prevState) => !prevState);
    };

    return (
        <div className="app">
            {/* Gemini Icon */}
            <div className="gemini-icon" onClick={toggleChatWindow}>
                <img src={geminiIcon} alt="Gemini Icon" className="gemini-image" />
            </div>

            {/* Chat Window */}
            <div className={`chat-window ${showChat ? 'slide-up' : 'slide-down'}`} style={{ borderRadius: '15px' }}>
                <div className="chat-header">
                    <span>Gemini Chat</span>
                    <button onClick={toggleChatWindow} className="close-btn">
                        X
                    </button>
                </div>
                <div className="chat-content">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.sender}`}>
                            {message.sender === 'bot' && (
                                <img src={geminiIcon} alt="Gemini Icon" className="inline-gemini-icon" />
                            )}
                            <div className={`chat-bubble ${message.sender}`}>
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type a message..." />
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}
