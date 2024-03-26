import React from 'react';
import './Home.css'; // Importing the CSS file for Home.jsx
import logo from '../assets/images/logo.png'; // Importing the logo image
import flatImage from '../assets/images/flatImage.png'; // Importing the flatImage

const Home = () => {
    return (
        <div>
            <header>
                <div className="container flex-row">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav>
                        <ul className="header_menu flex-row">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#features">Features</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
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

export default Home;
