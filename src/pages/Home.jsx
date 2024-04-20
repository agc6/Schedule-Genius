import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';
import flatImage from '../images/flat.jpg';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <Header />
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


            <section id="features" className="features-section">
                <div className="features-container">
                    <div className="feature">
                        <h3>Schedule Generator</h3>
                        <p>Create your schedule with just a few clicks. Our intuitive interface makes it easy to add, remove, and edit your dynamic schedule.</p>
                        <Link to="/signup">
                            <button className="btn-custom">Try Schedule Generator</button>
                        </Link>
                    </div>
                    <div className="feature">
                        <h3>To-Do Generator</h3>
                        <p>Create a seamless To-Do list that can be adjusted. This is for the daily tasks!</p>
                        <Link to="/signup">
                            <button className="btn-custom">Try To-Do List</button>
                        </Link>
                    </div>
                    <div className="feature">
                        <h3>Student Organizer</h3>
                        <p>Stay organized and manage your academic tasks effectively. Our tool helps you plan your schedule, track assignments, and stay on top of your studies!</p>
                        <Link to="/signup">
                            <button className="btn-custom">Get to organizing!</button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="about" className="about-section">
                <div className='about-container'>
                    <h2>About Page</h2>
                    <p>As a group of 4 enthusiastic students in Dr. Lehr's Software Engineering class, we successfully developed a scheduling app using React and Firebase.</p>
                    <p>Our aim is to empower students by providing a tool that helps them organize their assignments and work, fostering better time management skills..</p>
                    <br />
                    <p>Please visit our features page for more info.</p>
                    <br />
                    <h3>Students that contributed:</h3>
                    <p><i>Evan Smith</i></p>
                    <p><i>Nil Ceylan</i></p>
                    <p><i>Arely Gutierrez Carbajal</i></p>
                    <p><i>Noah Masoud</i></p>
                </div>
            </section>


            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>
                            Please fill out the form below to send us an email and we will
                            get back to you as soon as possible.
                        </p>
                        <div className="contact-item">
                            <span>
                                <i className="fa fa-map-marker"></i> Address
                            </span>
                            {/* Display your address */}
                        </div>
                        <div className="contact-item">
                            <span>
                                <i className="fa fa-phone"></i> Phone
                            </span>{" "}
                            {/* Display your phone number */}
                        </div>
                        <div className="contact-item">
                            <span>
                                <i className="fa fa-envelope-o"></i> Email
                            </span>{" "}
                            {/* Display your email address */}
                        </div>
                    </div>
                    <div className="contact-form">
                        {/* Removed form tag and associated logic */}
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                rows="4"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-custom btn-lg">
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
