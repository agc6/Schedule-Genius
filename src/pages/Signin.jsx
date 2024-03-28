import React from 'react';
import './Signin.css'; // Make sure to create this CSS file
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import { Link } from 'react-router-dom'; // Import Link component for SPA navigation

const SignInPage = () => {
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
                            <h1 className="heading">Welcome Back</h1>
                            <form action="#" className="form">
                                <div className="input-group">
                                    <input type="text" id="name" className="" />
                                    <label htmlFor="name">Username</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" />
                                    <label htmlFor="password">Password</label>
                                    <img src="https://svgshare.com/i/uqQ.svg" alt="" className="eye" />
                                    <img
                                        src="https://svgshare.com/i/uqu.svg"
                                        alt=""
                                        className="close-eye"
                                        style={{ display: 'none' }} 
                                    />
                                </div>
                                <button className="btn">Sign In</button>
                                <p className="bottom-text">
                                    Don't have an account?
                                    {/* Update the <a> tag to use Link component for SPA navigation */}
                                    <Link to="/signup">Sign Up.</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignInPage;
