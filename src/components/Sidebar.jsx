import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from '../images/logo.jpg';
import { signOut } from 'firebase/auth'; // Import the signOut function from firebase/auth
import { auth } from '../firebase/firebase-config'; // Import the auth object from firebase-config

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogoClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      // Redirect to sign-in page after successful sign-out
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="" onClick={handleLogoClick} />
          </span>
        </div>
        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/calendar">
                <i className='bx bx-calendar icon'></i>
                <span className="text nav-text">Calendar</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/dashboard">
                <i className='bx bx-cog icon'></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/settings">
                <i className='bx bx-cog icon'></i>
                <span className="text nav-text">Settings</span>
              </Link>

            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li onClick={handleSignOut}> {/* Add onClick event handler for sign out */}
            <a href="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon`}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

            <div className="toggle-switch">
              <span className={`switch ${isDarkMode ? 'active' : ''}`}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
