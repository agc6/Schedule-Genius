import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="logo.png" alt="" />
          </span>

{/*          <div className="text logo-text">
            <span className="name">Schedule Genius</span>
            <span className="profession">WIP</span>
          </div> */}
        </div> 

        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>

            <li className="nav-link">
            <Link to="/todo"> {/* Change anchor tag to Link component */}
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
