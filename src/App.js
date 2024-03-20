import React from 'react';
import './App.css'; // Make sure to create this CSS file
import logo from './logo.jpg';
import flatImage from './flat.jpg';
import todoLogo from './todo.png';

const LandingPage = () => {
  return (
    <div>
      <header>
        <div className="container flex-row">
          <div className="header_logo">
            <img src={todoLogo} alt="Logo" />
          </div>
          <nav>
            <ul className="header_menu flex-row">
              <li>
                <a href="#sched">About</a>
              </li>
              <li>
                <a href="#sched">Features</a>
              </li>
              <li>
                <a href="#sched">Support</a>
              </li>
            </ul>
          </nav>
          <div className="right flex-center">
            <a href="signin.html" className="btn btn-secondary">Sign In</a>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
      <div className="fade_in">
        <section id="sched" className="container flex-row">
          <div className="sched__content">
            <br />
            <h1 className="title">Schedule Genius: Organize your college life efficiently</h1>
            <br />
            <h2 className="text">Get your stuff done with <i><strong>ease.</strong></i></h2>
            <br />
            <h2 className="text">The ultimate tool for crafting the perfect schedule.</h2>
            <a href="signup.html" className="btn btn-primary">Sign Up</a>
          </div>
          <div className="sched__img">
            <img src={flatImage} alt="Students using laptops." />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
