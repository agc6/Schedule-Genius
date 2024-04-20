import React from 'react';
import './About.css';
import Header from '../components/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className='about-container'>
                <h2>About Page</h2>
                <p>As a group of 4 enthusiastic students in Dr. Lehr's Software Engineering class, we successfully developed a scheduling app using React and Firebase.</p>
                <p>Our aim is to empower students by providing a tool that helps them organize their assignments and work, fostering better time management skills..</p>
                <br></br>
                <p>Please visit our features page for more info.</p>
                <br></br>
                <h3>Students that contributed:</h3>
                <p><i>Evan Smith</i></p>
                <p><i>Nil Ceylan</i></p>
                <p><i>Arely Gutierrez Carbajal</i></p>
                <p><i>Noah Masoud</i></p>

            </div>
        </div>
    );
};

export default About;
