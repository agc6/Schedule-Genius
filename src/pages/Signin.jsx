import React from 'react';
import './Signin.css'; // Make sure to create this CSS file
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import { Link } from 'react-router-dom'; // Import Link component for SPA navigation
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";
import { firebaseApp } from '../firebase/firebase-config';

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, 'http://localhost:9099');

const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // get the username and password from the form
    const loginEmail = document.getElementById('email').value;
    console.log(loginEmail);
    const loginPassword = document.getElementById('password').value;
    console.log(loginPassword);
    // try to sign in with email and password
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log('Form submitted successfully!');
};

//TODO: implement monitorAuthState function
//TODO: implement logout function
//TODO: implement button click event listeners to adapt to firebase doc example

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
                            <form onSubmit={handleSubmit} className="form">
                                <div className="input-group">
                                    <input type="text" id="email" className="" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" />
                                    <label htmlFor="password">Password</label>
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
