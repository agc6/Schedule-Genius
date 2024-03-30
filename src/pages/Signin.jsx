import React, { useState, useEffect } from 'react';
import './Signin.css'; // Make sure to create this CSS file
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import { Link } from 'react-router-dom'; // Import Link component for SPA navigation
import { auth } from '../firebase/firebase-config'; //Import the auth object from firebase-config
import { signInWithEmailAndPassword } from "firebase/auth"; //use signInWithEmailAndPassword function to sign in a user
import { togglePasswordVisibility } from '../components/passwordVisibility';


const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async(event) => {
        event.preventDefault(); // Prevent the default form submission
        setError(''); // Clear any existing errors

        try {
            // Attempt to sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or do something upon successful sign in
        } catch (error) {
            console.error("error signing in", error);
            // Handle errors (e.g., user not found, wrong password)
            setError(error.message);
        }
        console.log('Form submitted successfully!')
    };

    useEffect(() => {
        const inputs = document.querySelectorAll(".input-group input");
        inputs.forEach((input) => {
            input.addEventListener("change", () => {
                if (input.value) {
                    input.classList.add("filled");
                } else {
                    input.classList.remove("filled");
                }
            });
        });
    }, []);
    
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
                            <form onSubmit={handleSignIn} className="form">
                                <div className="input-group">
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password">Password</label>
                                    <img src="https://svgshare.com/i/uqQ.svg" alt="" className="eye" onClick={togglePasswordVisibility}/>
                                    <img
                                        src="https://svgshare.com/i/uqu.svg"
                                        alt=""
                                        className="close-eye"
                                        style={{ display: 'none' }} 
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                                {error && <p className="error-message">{error}</p>}
                                <button type="submit" className="btn">Sign In</button>
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
