import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
    const location = useLocation();

    // Function to render the correct link for the logo
    const renderLogoLink = () => {
        // If the user is on the sign-up or sign-in page, render a link to the homepage
        if (location.pathname === '/signup' || location.pathname === '/signin') {
            return <RouterLink to="/" className="logo-link"><img src={logo} alt="Schedule Genius Logo" /></RouterLink>;
        } else {
            // Otherwise, render a scroll link to the top of the page
            return (
                <ScrollLink to="sched" spy={true} smooth={true} duration={500}>
                    <img src={logo} alt="Schedule Genius Logo" />
                </ScrollLink>
            );
        }
    };

    return (
        <header>
            <div className="container flex-row">
                <div className="header_logo">
                    {renderLogoLink()}
                </div>
                <nav>
                    <ul className="header_menu flex-row">
                        <li><ScrollLink to="about" spy={true} smooth={true} duration={500}>About</ScrollLink></li>
                        <li><ScrollLink to="features" spy={true} smooth={true} duration={500}>Features</ScrollLink></li>
                        <li><ScrollLink to="contact" spy={true} smooth={true} duration={500}>Contact</ScrollLink></li>
                    </ul>
                </nav>
                <div className="right flex-center">
                    <RouterLink to="/signin" className="btn btn-secondary">Sign In</RouterLink>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
