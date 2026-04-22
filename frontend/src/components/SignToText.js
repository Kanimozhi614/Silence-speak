// src/components/SignToText.js

import React, { useState } from 'react';
import WebcamCapture from './WebcamCapture'; // Import the WebcamCapture component
import './SignToText.css'; // Import the CSS file for SignToText styling

// Mock function to simulate sign recognition
const recognizeSign = (image) => {
    // This function would ideally use a model to recognize the sign
    // For this example, we are using a hardcoded dictionary
    const signDictionary = {
        'hello': 'Hello',
        // 'sad': 'Sad',
        // 'baby': 'Baby',
        // 'again': 'Again',
        // 'up': 'Up',
        // 'please': 'Please',
        // 'happy': 'Happy',
        // 'good': 'Good',
        // 'yes': 'Yes',
        // 'no': 'No',
        // 'nice': 'Nice'
    };

    // For this demo, we'll return a random sign for any image
    // In a real application, this function would process the image and return the recognized sign
    const signs = Object.keys(signDictionary);
    return signDictionary[signs[Math.floor(Math.random() * signs.length)]];
};

const SignToText = () => {
  const [showWebcam, setShowWebcam] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [convertedText, setConvertedText] = useState('');

  // Handle the image captured from the webcam
  const handleImageCapture = (image) => {
    setCapturedImage(image); // Set the captured image
    setShowWebcam(false);    // Hide the webcam after capturing

    // Recognize the sign and update the text field
    const recognizedSign = recognizeSign(image);
    setConvertedText(recognizedSign); // Update the converted text
  };

  const handleRetakeImage = () => {
    setCapturedImage(null); // Clear the captured image
    setConvertedText('');   // Clear the converted text
    setShowWebcam(true);    // Show the webcam again
  };

  return (
    <div className="sign-to-text-container">
      <h1>Sign to Text</h1>
      <p>Convert sign language into text by capturing an image or uploading it.</p>

      {/* Button to start the webcam */}
      {!showWebcam && !capturedImage && (
        <button className="start-webcam-button" onClick={() => setShowWebcam(true)}>
          Start Webcam
        </button>
      )}

      {/* Show the WebcamCapture component when the user clicks the button */}
      {showWebcam && (
        <WebcamCapture onCapture={handleImageCapture} />
      )}

      {/* Display the captured image */}
      {capturedImage && (
        <div className="captured-image-container">
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" className="captured-image" />
          <button className="retake-image-button" onClick={handleRetakeImage}>
            Retake Image
          </button>
        </div>
      )}

      {/* Add a text area for displaying converted text */}
      <div className="text-output-container">
        <h3>Converted Text:</h3>
        <textarea className="text-output" rows="5" value={convertedText} readOnly placeholder="Text will appear here..."></textarea>
      </div>
    </div>
  );
};

export default SignToText;
