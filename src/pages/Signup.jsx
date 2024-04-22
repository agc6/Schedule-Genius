import React, { useState, useEffect } from 'react';
import './Signin.css';
import logo from '../images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component for SPA navigation
import validatePassword from '../components/passwordValidator'; // Import for password validator
import { togglePasswordVisibility } from '../components/passwordVisibility'; // Import for password visibility
import { auth } from '../firebase/firebase-config'; // Import the auth object from firebase-config
import { createUserWithEmailAndPassword } from "firebase/auth"; // Use this function to create a new user

const SignupPage = () => {
    // Const vars for user input using useState incase of user changing
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Access the navigate function to handle redirection

    // Handle password change function that takes an event as an argument
    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Updates state of password
        setErrorMessage(''); // Clears error message
        setSuccessMessage(''); // Clears success message
    };

    // Handle submit function for new users, takes an event as an argument
    const handleSubmit = async (event) => {
        event.preventDefault(); // To prevent default form submission behavior

        const validateMessage = validatePassword(password); // Calls validatePassword to ensure it is correctly formatted
        if (validateMessage !== 'Password is valid.') {
            setErrorMessage(validateMessage); // If password not valid then set error message as validate message
            return;
        }

        // Use the createUserWithEmailAndPassword function to create a new user
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('userCredential:', userCredential.user); // If successful then log userCredential
            setSuccessMessage('You have successfully signed up!'); // Set success message
            setTimeout(() => {
                navigate('/signin'); // Redirect to sign-in page after 3 seconds
            }, 3000);
        } catch (error) {
            console.error("error signing up", error); // If error occurs then log error
            setErrorMessage(error.message); // If error occurs then set error message as error message
        }
        console.log('Form submitted successfully!');
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
                    <Link to="/" className="logo">
                        <img src={logo} alt="Schedule Genius Logo" />
                        <h2>Schedule Genius</h2>
                    </Link>
                    <div className="right">
                        <div className="wrapper">
                            <h1 className="heading">Create Your Account</h1>
                            <form onSubmit={handleSubmit} className="form">
                                <div className="input-group">
                                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label htmlFor="username">Username</label>
                                </div>
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
                                {successMessage && <p className="success-message">{successMessage}</p>}
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
