import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogoClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
              <Link to="/todo">
                <i className='bx bx-bell icon'></i>
                <span className="text nav-text">To Do</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/calendar">
                <i className='bx bx-calendar icon'></i>
                <span className="text nav-text">Calendar</span>
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
          <li>
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
