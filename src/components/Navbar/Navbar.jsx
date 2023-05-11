import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='navContainer'>
            <h2>HomeChange</h2>
            <ul className='buttonList'>
                <li className='navBtn'><Link to="/" className='linkBtn'>Home</Link></li>
                <li className='navBtn'><Link to="/about" className='linkBtn'>About US</Link></li> 
                <li className='navBtn'><Link to="/account" className='linkBtn'>Account</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;