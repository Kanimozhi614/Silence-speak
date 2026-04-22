// src/components/Learn.js
import React, { useState } from 'react';
import './Learn.css';
import Modal from './Modal'; // Import the Modal component

const Learn = ({ onFinish }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    };

    return (
        <div className="learn-container">
            <h2>Learn Sign Language</h2>
            <p>Here are some common words in sign language:</p>

            <div className="grid-container">
                {['hello', 'sad', 'baby', 'again', 'up', 'please', 'happy', 'good', 'yes', 'no', 'nice','bad','beautiful','eat','bye'].map((word) => (
                    <div className="word-item" key={word}>
                        <strong>{word.charAt(0).toUpperCase() + word.slice(1)}</strong>
                        <img
                            src={`/images/${word}.jpg`}
                            alt={word}
                            className="large-image"
                            onClick={() => openModal(`/images/${word}.jpg`)}
                        />
                    </div>
                ))}
            </div>

            <button onClick={onFinish} className="finish-btn">Finish Learning</button>

            {/* Modal for displaying the zoomed image */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageSrc={currentImage}
                altText={currentImage.split('/').pop()} // Extract the alt text from the image src
            />
        </div>
    );
};

export default Learn;
