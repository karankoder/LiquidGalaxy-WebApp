import React, { useState } from 'react';
import axios from 'axios';
import styles from './Gemini.module.css';
import geminiIcon from '../assets/gemini.svg';
import { FaPaperPlane } from 'react-icons/fa'; // Import the React icon

export default function Gemini() {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I help you today?' },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const toggleChatWindow = () => {
        setShowChat((prevState) => !prevState);
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const instruction = "Please provide a short and to-the-point summary.";
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setIsTyping(true);

        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_APP_GEMINI_API_KEY}`,
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text: `${input} ${instruction}` }] },
                    ],
                },
            });
            const botMessage = response.data.candidates[0].content.parts[0].text;
            setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
        } catch (error) {
            console.error('Error fetching response from API:', error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className={styles.app}>
            {/* Gemini Icon */}
            <button onClick={toggleChatWindow} className={styles.geminiIcon}>
                <span className={styles.background}></span>
                <svg className={styles.gemini} width="120" height="120" viewBox="0 0 213 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Gemini</title>
                    <g clip-path="url(#clip0_49_57)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M322 10V0H321.999C321.984 3.37227 321.813 6.70787 321.494 10H322ZM-108 215H-107.999C-108 214.833 -108 214.667 -108 214.5C-108 211.299 -107.86 208.13 -107.586 205H-108V214.5V215ZM211 106.944C153.415 105.102 107.265 57.9707 107.001 0H106.999C106.735 57.9707 60.5852 105.102 3 106.944V107.056C60.7507 108.903 107 156.301 107 214.5C107 214.667 107 214.833 106.999 215H107.001C107 214.833 107 214.667 107 214.5C107 156.301 153.249 108.903 211 107.056V106.944Z" fill="#8b5cf6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_49_57">
                            <rect width="213" height="215" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            {/* Chat Window */}
            <div className={`${styles.chatWindow} ${showChat ? styles.slideUp : styles.slideDown}`} style={{ borderRadius: '15px' }}>
                <div className={styles.chatHeader}>
                    <span>Gemini Chat</span>
                    <button onClick={toggleChatWindow} className={styles.closeBtn}>
                        X
                    </button>
                </div>
                <div className={styles.chatContent}>
                    {messages.map((message, index) => (
                        <div key={index} className={`${styles.chatMessage} ${styles[message.sender]}`}>
                            {message.sender === 'bot' && (
                                <img src={geminiIcon} alt="Gemini Icon" className={styles.inlineGeminiIcon} />
                            )}
                            <div className={`${styles.chatBubble} ${styles[message.sender]}`}>
                                {message.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className={styles.loader}>
                            <img src={geminiIcon} alt="Gemini Icon" className={styles.inlineGeminiIcon} />
                        </div>
                    )}
                </div>
                <div className={styles.chatInput}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>
                        <FaPaperPlane className={styles.sendIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
}
