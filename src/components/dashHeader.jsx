// Header.js
import React from 'react';
import logo from '../images/logo.jpg';

function Header() {
  return (
    <header className="dash-header">
      <div className="logo">Schedule Genius</div>
      <div className="user-profile">
        <img src={logo} alt="User Profile" />
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
}

export default Header;
