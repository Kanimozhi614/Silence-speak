// src/components/WebcamCapture.js

import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import './WebcamCapture.css'; // Import the CSS file for styling

const WebcamCapture = ({ onCapture }) => {
    const webcamRef = useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot(); // Capture the image
        onCapture(imageSrc); // Pass the captured image back to the parent
    };

    return (
        <div className="webcam-capture-container">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
            />
            <button className="capture-button" onClick={capture}>Capture</button>
        </div>
    );
};

export default WebcamCapture;
