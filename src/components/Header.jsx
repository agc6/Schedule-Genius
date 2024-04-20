import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
    return (
        <header>
            <div className="container flex-row">
                <div className="header_logo">
                    <RouterLink to="/">
                        <img src={logo} alt="Schedule Genius Logo" />
                    </RouterLink>
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
