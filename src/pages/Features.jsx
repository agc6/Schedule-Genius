import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import featureImage1 from '../images/tempIMG.jpg'; // Adjusted path to featureImage1.jpg
import featureImage2 from '../images/tempIMG.jpg'; // Adjusted path to featureImage2.jpg
import featureImage3 from '../images/tempIMG.jpg'; // Adjusted path to featureImage3.jpg

const Features = () => {
    return (
        <div>
            <header>
                <div className="container flex-row">
                    <div className="header_logo">
                        <img src={logo} alt="Schedule Genius Logo" />
                    </div>
                    <nav>
                        <ul className="header_menu flex-row">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/features">Features</Link>
                            </li>
                            <li>
                                <Link to="/support">Support</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="right flex-center">
                        <Link to="/signin" className="btn btn-secondary">Sign In</Link>
                        <div className="menu-btn">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
            <div className="image-row">
                <img src={featureImage1} alt="Feature 1" className="feature-image" />
            </div>
            <div className="image-row">
                <img src={featureImage2} alt="Feature 2" className="feature-image" />
            </div>
            <div className="image-row">
                <img src={featureImage3} alt="Feature 3" className="feature-image" />
            </div>
            <div className="features-container">
                <div className="feature">
                    <h3>Schedule Generator</h3>
                    <p>Create your schedule with just a few clicks. Our intuitive interface makes it easy to add, remove, and edit your dynamic schedule
                    </p>
                    <button>Try Schedule Generator</button>
                </div>
                <div className="feature">
                    <h3>To-Do Generator</h3>
                    <p>Create a seamless To-Do list that can be adjusted. This is for the daily tasks!</p>
                    <button>Try To-Do List</button>
                </div>
                <div className="feature">
                    <h3>Connect with Friends</h3>
                    <p>Connect with your friends, classmates, and collegues. View eachother schedules for effortless meeting plans, whether it is business related or for fun!</p>
                    <button>Coming Soon..</button>
                </div>
            </div>
        </div>
    );
};

export default Features;
