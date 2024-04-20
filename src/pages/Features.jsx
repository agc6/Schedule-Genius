import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
//import logo from '../images/logo.jpg'; // Adjusted path to logo.png
//import featureImage1 from '../images/tempIMG.jpg'; // Adjusted path to featureImage1.jpg
//import featureImage2 from '../images/tempIMG.jpg'; // Adjusted path to featureImage2.jpg
//import featureImage3 from '../images/tempIMG.jpg'; // Adjusted path to featureImage3.jpg
import Header from '../components/Header';

const Features = () => {
    return (
        <div>
            <Header />
            <div className="features-container">
                <div className="feature">
                    <h3>Schedule Generator</h3>
                    <p>Create your schedule with just a few clicks. Our intuitive interface makes it easy to add, remove, and edit your dynamic schedule
                    </p>
                    <Link to="../Signup">
                        <button>Try Schedule Generator</button>
                    </Link>
                </div>
                <div className="feature">
                    <h3>To-Do Generator</h3>
                    <p>Create a seamless To-Do list that can be adjusted. This is for the daily tasks!</p>
                    <Link to="../Signup">
                        <button>Try To-Do List</button>
                    </Link>
                </div>
                <div className="feature">
                <h3>Student Organizer</h3>
                <p>Stay organized and manage your academic tasks effectively. Our tool helps you plan your schedule, track assignments, and stay on top of your studies!</p>
                    <Link to="../Signup">   
                        <button>Get to organizing!</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Features;
