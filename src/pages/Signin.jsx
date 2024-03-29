import React, { useEffect } from 'react';
import './Signin.css'; // Make sure to create this CSS file
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import { Link } from 'react-router-dom'; // Import Link component for SPA navigation
//import { auth } from '../firebase/firebase-config'; // TODO: Import the auth object from firebase-config
//import { signInWithEmailAndPassword } from "firebase/auth"; // TODO: use signInWithEmailAndPassword function to sign in a user
import { togglePasswordVisibility } from '../components/passwordVisibility';


const SignInPage = () => {

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
                            <form action="#" className="form">
                                <div className="input-group">
                                    <input type="text" id="email" className="" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" />
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
