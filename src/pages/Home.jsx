import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';
import flatImage from '../images/flat.jpg';
import people from '../images/people.jpg';
import { db } from '../firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, "contacts"), formData);
            alert('Your message has been sent!');
            setFormData({ name: '', email: '', message: '' }); // Reset form after submission
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <div>
            <Header />
            <div>
                <Header />
                <div className="fade_in">
                    <section id="sched" className="container flex-row">
                        <div className="sched__content">
                            <h1 className="title">Schedule Genius: Organize your college life efficiently</h1>
                            <h2 className="text">
                                Unlock your genius potential,<br />
                                with <i><strong>ease.</strong></i>
                            </h2>
                            <Link to="/signup" className="btn btn-secondary">Get Started</Link>
                        </div>
                        <div className="sched__img">
                            <img src={flatImage} alt="Students using laptops." />
                        </div>
                        <br />
                        <br />
                    </section>
                </div>
            </div>
            <br />
            <br />

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="cards">
                    <div className="card card-1">
                        <div className="card__icon"></div>
                        <div className="item_title">
                            Schedule Generator
                        </div>
                        <h2 className="card__title">
                            Create your schedule with just a few clicks. Our intuitive interface makes it easy to add, remove, and edit your dynamic schedule.
                        </h2>
                        <p className="card__apply">
                            <Link to="/signup" className="card__link">Try Now </Link>
                        </p>
                    </div>
                    <div className="card card-3">
                        <div className="card__icon"></div>
                        <div className="item_title">
                            To-Do Generator
                        </div>
                        <h2 className="card__title">
                            Create a seamless To-Do list that can be adjusted. This is for the daily tasks!
                        </h2>
                        <p className="card__apply">
                            <Link to="/signup" className="card__link">Try Now </Link>
                        </p>
                    </div>
                    <div className="card card-5">
                        <div className="card__icon"></div>
                        <div className="item_title">
                            Student Organizer
                        </div>
                        <h2 className="card__title">
                            Stay organized and manage your academic tasks effectively. Our tool helps you plan your schedule, track assignments, and stay on top of your studies!
                        </h2>
                        <p className="card__apply">
                            <Link to="/signup" className="card__link">Try Now </Link>
                        </p>
                    </div>
                </div>
            </section>
            <br />

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about_img">
                    <img src={people} alt="" />
                </div>
                <div className="about_details">
                    <h1>About Us</h1>
                    <p>As a group of 4 enthusiastic students in Dr. Lehr's Software Engineering class,
                        we successfully developed a scheduling app using React and Firebase.
                        Our aim is to empower students by providing a tool that helps them organize
                        their assignments and work, fostering better time management skills.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <br />
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p>
                            Please fill out the form below to send us an email and we will
                            get back to you as soon as possible.
                        </p>
                        <div className="contact-item">
                            <span>
                                <i className="fa fa-map-marker"></i> Address
                            </span>
                            {"123 Team IO Street San Marcos, Texas 78666 "}
                        </div>
                        <div className="contact-item">
                            <span>
                                <i className="fa fa-phone"></i> Phone
                            </span>{" "}
                            {"1+ (234)-567-8910"}
                        </div>
                        <div className="contact-item">
                            <span>
                                <i className="fa fa-envelope-o"></i> Email
                            </span>{" "}
                            {"support@schedulegenius"}
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom btn-lg">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Schedule Genius. All rights reserved.</p>
                    <p>Contributors: Evan Smith, Nil Ceylan, Arely Gutierrez Carbajal, Noah Masoud</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
