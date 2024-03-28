import React from 'react';
import './Signin.css'; // Reusing the CSS file from the Signin page for consistency
import logo from '../images/logo.jpg'; // Using the same logo
import { Link } from 'react-router-dom'; // Import Link component for SPA navigation
import validatePassword from '../passwordValidator'; //Import for password validator

const SignupPage = () => {
    return (
        <main>
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap"></div>
                    <div className="logo">
                        <img src={logo} alt="Schedule Genius Logo" />
                        <h4>Schedule Genius</h4>
                    </div>
                    <div className="right">
                        <div className="wrapper">
                            <h1 className="heading">Create Your Account</h1>
                            <form action="#" className="form">
                                <div className="input-group">
                                    <input type="text" id="username" />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-group">
                                    <input type="email" id="email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button className="btn">Sign Up</button>
                                <p className="bottom-text">
                                    Already have an account?
                                    <Link to="/signin">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignupPage;
