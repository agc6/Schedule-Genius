import React, { useState, useEffect } from 'react';
import './Signin.css'; // Reusing the CSS file from the Signin page for consistency
import logo from '../images/logo.jpg'; // Using the same logo
import { Link, useNavigate } from 'react-router-dom'; // Import Link component for SPA navigation
import validatePassword from '../components/passwordValidator'; //Import for password validator
import { togglePasswordVisibility } from '../components/passwordVisibility'; //Import for password visibility
import { auth } from '../firebase/firebase-config'; //Import the auth object from firebase-config
import { signInWithEmailAndPassword } from "firebase/auth"; //use signInWithEmailAndPassword function to sign in a user

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Access the navigate function to handle redirection

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);    //Updates state of password
        setErrorMessage(' ');   //Clears error message
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); //To prevent default form submission behavior

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('userCredential:', userCredential.user);
            // Redirect or do something upon successful sign in
            navigate('/dashboard'); // Redirect to the dashboard after successful sign-in
        } catch (error) {
            console.error("error signing in", error);
            setErrorMessage(error.message); //If error occurs then set error message as error message
        }
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
                            <form onSubmit={handleSubmit} className="form">
                                <div className="input-group">
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                                    <label htmlFor="password">Password</label>
                                    <img src="https://svgshare.com/i/uqQ.svg" alt="" className="eye" onClick={togglePasswordVisibility} />
                                    <img
                                        src="https://svgshare.com/i/uqu.svg"
                                        alt=""
                                        className="close-eye"
                                        style={{ display: 'none' }}
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                                <button type="submit" className="btn">Sign In</button>
                                <p className="bottom-text">
                                    Don't have an account?
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
