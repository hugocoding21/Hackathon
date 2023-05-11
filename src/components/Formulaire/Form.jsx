import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="nav"></div>
      <div className="all-form">
        <div className="reservation">
          <p className="sentence-destination">
            You have just chosen your dream destination, <br />
            here is a summary before booking.
          </p>
          <div className="lieu-reservation">
            <h2 className="name-destination">Nom de la Destination</h2>
            <img
              className="img-destination"
              src="https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg"
              alt="paris"
            ></img>
            <p>Appartment</p>
            <p>description</p>
            <p>date</p>
          </div>
        </div>
        <form>
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
      </div>
    </div>
  );
};

export default Form;
