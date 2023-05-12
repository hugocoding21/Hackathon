import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className='navContainer'>
            <h2>HomeChange</h2>
            <ul className='buttonList'>
                <li className='navBtn'><NavLink to="/" className='linkBtn'>
                    Home </NavLink></li>
                <li className='navBtn'><NavLink to="/about" className='linkBtn'>About US</NavLink></li> 
                <li className='navBtn'><NavLink to="/account" className='linkBtn'>Account</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;