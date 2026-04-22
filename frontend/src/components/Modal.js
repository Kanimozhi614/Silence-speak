// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Create a separate CSS file for modal styling

const Modal = ({ isOpen, onClose, imageSrc, altText }) => {
    if (!isOpen) return null; // Don't render anything if the modal is not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt={altText} className="modal-image" />
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
