// src/components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <p>Logged in as: {user.email}</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
