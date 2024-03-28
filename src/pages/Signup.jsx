import React, {useState} from 'react';  //useState to save user info that could change
import './Signin.css'; // Reusing the CSS file from the Signin page for consistency
import logo from '../images/logo.jpg'; // Using the same logo
import { Link } from 'react-router-dom'; // Import Link component for SPA navigation
import validatePassword from '../passwordValidator'; //Import for password validator

const SignupPage = () => {
    //Const vars for user input using useState incase of user changing
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //handlePasswordChange function that takes an event as an argument
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);    //Updates state of password
        setErrorMessage(' ');   //Clears error message
    };
    //handleSubmit function for new users, takes an event as an argument
    const handleSubmit = (event) =>{
        event.preventDefault(); //To prevent default form submission behavior

        const validateMessage = validatePassword(password); //Calls validatePassword to ensure it is correctly formatted
        if(validateMessage != 'Password is valid.'){
            setErrorMessage(validateMessage);   //If password not valid then set error message as validate message
            return;
        }
        //Placeholder for when form is submitted
        console.log('Form submitted successfully!')
    };

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
