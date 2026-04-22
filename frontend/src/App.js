import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register'; // Your registration component
import Login from './components/Login'; // Your login component
import Dashboard from './components/Dashboard'; // Your dashboard component
import TextToSign from './components/TextToSign'; // New component for Text to Sign
import SignToText from './components/SignToText'; // New component for Sign to Text
import WebcamCapture from './components/WebcamCapture'; // Import WebcamCapture component
import SignLanguageLearning from './components/SignLanguageLearning'; // Import Sign Language Learning component

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email) => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/text-to-sign" element={<TextToSign />} /> {/* Text to Sign Route */}
                <Route path="/sign-to-text" element={<SignToText />} /> {/* Sign to Text Route */}
                <Route path="/webcam-capture" element={<WebcamCapture />} /> {/* New Webcam Capture Route */}
                <Route path="/learn" element={<SignLanguageLearning />} /> {/* New Route for Learning */}
            </Routes>
        </Router>
    );
};

export default App;
