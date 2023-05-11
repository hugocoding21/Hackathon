import React from 'react';
import Navbar from '../Navbar/Navbar';
import './about.css';

const About = () => {
    return (
        <>
        <Navbar />

        <div className='pageAboutUs'>
            
            <div className='globalContainer'>
                <div className='textContainer'>
                    <h2 className='titleAbout'>
                    Welcome to our home exchange platform, a website created by four passionate web developer students.
                    </h2>
                    <br />
                    <br />
                    <p>Our platform is designed to connect people who want to share their homes during holidays, making it easier and more affordable to travel around the world. With our platform, you can explore new places while staying in a comfortable home and experience the local culture in a way that's not possible with traditional accommodation options. Our platform is easy to use and offers a secure way for members to connect with each other and exchange their homes. We are committed to providing the best user experience possible and are constantly working to improve our platform. Join us today and start your next adventure!</p>
                </div>
                <div className='titleTeam'>
                    <h3>THE TEAM</h3>
                </div>
            <div className='teamContainer'>
            
                <div className='developer'>
                    <h3>Khouloud Belkhir</h3>
                </div>
                <div className='developer'>
                    <h3>Imene Ramdan</h3>
                </div>
                <div className='developer'>
                    <h3>Hugo Hanocq</h3>
                </div>
                <div className='developer'>
                    <h3>Florent Marin</h3>
                </div>
            
            
            </div>
            </div>
        </div>
        </>
    );
};

export default About;