import React from 'react';
import Navbar from '../Navbar/Navbar';
import './about.css';

const About = () => {
    return (
        <>
        <Navbar />

        <div className='globalContainer'>
            <div className='textContainer'>
                <p>Welcome to our home exchange platform, a website created by four passionate web developer students. Our platform is designed to connect people who want to share their homes during holidays, making it easier and more affordable to travel around the world. With our platform, you can explore new places while staying in a comfortable home and experience the local culture in a way that's not possible with traditional accommodation options. Our platform is easy to use and offers a secure way for members to connect with each other and exchange their homes. We are committed to providing the best user experience possible and are constantly working to improve our platform. Join us today and start your next adventure!</p>
            </div>
        <div className='teamContainer'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus recusandae laborum excepturi alias velit ratione nihil aperiam minus sapiente! Iste nihil aperiam corrupti eum quae aliquam dolor quisquam molestiae? Ex.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus recusandae laborum excepturi alias velit ratione nihil aperiam minus sapiente! Iste nihil aperiam corrupti eum quae aliquam dolor quisquam molestiae? Ex.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus recusandae laborum excepturi alias velit ratione nihil aperiam minus sapiente! Iste nihil aperiam corrupti eum quae aliquam dolor quisquam molestiae? Ex.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus recusandae laborum excepturi alias velit ratione nihil aperiam minus sapiente! Iste nihil aperiam corrupti eum quae aliquam dolor quisquam molestiae? Ex.</p>

        </div>
        </div>
        </>
    );
};

export default About;