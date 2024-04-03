import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Home.css'; // Correct path to Home.css
import logo from '../images/logo.jpg'; // Adjusted path to logo.png
import flatImage from '../images/flat.jpg'; // Adjusted path to flatImage.png
//import { auth } from '../firebase/firebase-config'; /* TODO: Implement sign out functionality
//import { signOut } from "firebase/auth"; /* TODO: Implement sign out functionality

/* TODO: Implement sign out functionality
const handleSignOut = async(event) => {
    event.preventDefault(); // Prevent the default form submission
    setError(''); // Clear any existing errors

    try {
        // Attempt to sign out
        await signOut(auth);
        // Redirect or do something upon successful sign out
    } catch (error) {
        console.error("error signing out", error);
        setError(error.message); // TODO: implement error handling UI
    }
    console.log('Form submitted successfully!')
};
*/

const Home = () => {
    return (
        <div>
            <header>
                <div className="container flex-row">
                    <div className="header_logo">
                        <img src={logo} alt="Schedule Genius Logo" />
                    </div>
                    <nav> {/* add signout button */}
                        <ul className="header_menu flex-row">
                            {/* Replace anchor tag with Link */}
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/features">Features</Link>
                            </li>
                            <li>
                                <Link to="/support">Support</Link>
                            </li>
                            <li>
                                <Link to="/todo">ToDoList</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Temp Dashboard</Link> {/* delete late when redirect is set up*/}
                            </li>
                        </ul>
                    </nav>
                    <div className="right flex-center">
                        {/* Replace anchor tag with Link */}
                        <Link to="/signin" className="btn btn-secondary">Sign In</Link>
                        <div className="menu-btn">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
            <div className="fade_in">
                <section id="sched" className="container flex-row">
                    <div className="sched__content">
                        <h1 className="title">Schedule Genius: Organize your college life efficiently</h1>
                        <h2 className="text">Get your stuff done with <i><strong>ease. </strong></i>
                            The ultimate tool for crafting the perfect schedule.</h2>
                        <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
                    </div>
                    <div className="sched__img">
                        <img src={flatImage} alt="Students using laptops." />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
