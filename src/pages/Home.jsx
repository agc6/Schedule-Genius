import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Home.css'; // Correct path to Home.css
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import flatImage from '../images/flat.jpg'; // Adjusted path to flatImage.png

const Home = () => {
    return (
        <div>
            <header>
                <div className="container flex-row">
                    <div className="header_logo">
                        <img src={logo} alt="Schedule Genius Logo" />
                    </div>
                    <nav>
                        <ul className="header_menu flex-row">
                            {/* Replace anchor tag with Link */}
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
                        {/* Replace anchor tag with Link */}
                        <Link to="/signin" className="btn btn-secondary">Sign In</Link>
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
