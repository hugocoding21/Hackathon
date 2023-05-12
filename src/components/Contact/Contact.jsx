import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.scss";

function Contact() {
  return (
    <div>
      <Navbar />
      <form className="contact_Form">
        <div className="form-container">
          <h1 className="title-confirmation">Confirmation Form</h1>

          <label htmlFor="firstname">Firstname:</label>
          <input
            id="firstname"
            type="text"
            placeholder="Your firstname"
            className="inputs"
            required
          />
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="inputs"
            required
          />
          <label htmlFor="adress">Adress:</label>
          <input
            id="adress"
            type="text"
            placeholder="Your adress"
            value=""
            className="inputs"
            required
          />
          <label htmlFor="phone">Phone number:</label>
          <input
            id="phone"
            type="text"
            placeholder="Your phone"
            className="inputs"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Your email"
            className="inputs"
            required
          />
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      *
    </div>
  );
}

export default Contact;
