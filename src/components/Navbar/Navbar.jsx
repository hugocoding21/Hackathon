import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <img src={"./img/logo1.jpg"} />
      <ul className="buttonList">
        <li className="navBtn">
          <NavLink to="/" className="linkBtn">
            Home
          </NavLink>
        </li>
        <li className="navBtn">
          <NavLink to="/about" className="linkBtn">
            About US
          </NavLink>
        </li>
        <li className="navBtn">
          <NavLink to="/user" className="linkBtn">
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
