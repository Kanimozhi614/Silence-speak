// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import any CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Silence Speak</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/sign-to-text">Sign to Text</Link>
        </li>
        <li>
          <Link to="/text-to-sign">Text to Sign</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
