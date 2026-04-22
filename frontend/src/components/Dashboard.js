// src/components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [showProfile, setShowProfile] = useState(false); // State to control profile modal

  // Dummy user data
  const user = {
    name: "Kanimozhi",
    email: "kanimozhic.cse2023@citchennai.net",
    occupation: "Student",
    location: "Chennai",
  };

  const handleTextToSignClick = () => {
    navigate('/text-to-sign'); // Navigate to the Text to Sign page
  };

  const handleSignToTextClick = () => {
    navigate('/sign-to-text'); // Navigate to the Sign to Text page
  };

  const handleLearnClick = () => {
    navigate('/learn'); // Navigate to the Learn (Profile) page
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile); // Toggle profile modal visibility
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Silence Speak!</h2>

      {/* Profile button */}
      <button className="profile-button" onClick={handleProfileClick}>
        K
      </button>

      {/* Profile modal */}
      {showProfile && (
        <div className="profile-modal">
          <div className="profile-content">
            <h3>User Profile</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Occupation:</strong> {user.occupation}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <button className="close-profile-button" onClick={handleProfileClick}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cards container */}
      <div className="cards-container">
        <div className="card" onClick={handleTextToSignClick}>
          <div className="card-icon">
            <img 
              src="/icon1.png"
              alt="Text to Sign Icon" 
              className="icon-image" 
            />
          </div>
          <div className="card-title">Text to Sign</div>
          <div className="card-description">
            Translate text to sign language.
          </div>
        </div>
        <div className="card" onClick={handleSignToTextClick}>
          <div className="card-icon">
            <img 
              src="/icon2.png"
              alt="Sign to Text Icon" 
              className="icon-image" 
            />
          </div>
          <div className="card-title">Sign to Text</div>
          <div className="card-description">
            Translate sign language into text.
          </div>
        </div>
        <div className="card" onClick={handleLearnClick}>
          <div className="card-icon">👤</div>
          <div className="card-title">Learn</div>
          <div className="card-description">
            Learn sign language through images and texts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
