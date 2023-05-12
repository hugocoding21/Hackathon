import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import Navbar from "../Navbar/Navbar";
import ReactModal from "react-modal";



const Form = () => {

  const [meteoData, setMeteoData] = useState([])

  const location = useLocation();
  const chosenCity = location?.state?.chosenCity;
  const selectedHouse = location?.state?.selectedHouse;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      firstname.trim() &&
      address.trim() &&
      phoneNumber.trim() &&
      email.trim()
    ) {
      setShowModal(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  /* const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Check-In Date: ${checkInDate}, Check-Out Date: ${checkOutDate}`);
    // Add code to submit form data to backend or display confirmation message to user
  }; */

  const [firstname, setFirstName] = useState("");
  const handleChangeFirstname = (event) => {
    const letterValue = event.target.value;
    setFirstName(letterValue);
  };

  const [lastname, setLastName] = useState("");
  const handleChangeLastName = (event) => {
    const letterValue = event.target.value;
    setLastName(letterValue);
  };

  const [address, setAdress] = useState("");
  const handleChangeAddress = (event) => {
    const letterValue = event.target.value;
    setAdress(letterValue);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChangePhoneNumber = (event) => {
    const letterValue = event.target.value;
    setPhoneNumber(letterValue);
  };

  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => {
    const letterValue = event.target.value;
    setEmail(letterValue);
  };
  const [showModal, setShowModal] = useState(false);
  const ModalContent = () => {
    return (
      <div className="Modal">
        <h2>Confirmation</h2>
        <p>Your form has been successfully submitted.</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    );
  };





return (
    <div>
      <Navbar />
      <div className="all-form">
        <div className="reservation">
          <p className="sentence-destination">
            You are about to book your dream destination, <br />
            here is a summary before booking.
          </p>
          <div className="lieu-reservation">
            <h2 className="name-destination">{chosenCity}</h2>
            <img
              className="img-destination"
              src={selectedHouse}
              alt="city"
            ></img>
            <p className="title-check">
              <strong> Check-In:</strong> {checkOutDate}
            </p>
            <p className="title-check">
              <strong>Check-Out: </strong>
              {checkInDate}
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1 className="title-confirmation">Confirmation Form</h1>

            <label htmlFor="firstname">Firstname:</label>
            <input
              id="firstname"
              type="text"
              placeholder="Your firstname"
              value={firstname}
              onChange={handleChangeFirstname}
              className="inputs"
              required
            />
            <label htmlFor="name">LastName:</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={lastname}
              onChange={handleChangeLastName}
              className="inputs"
              required
            />
            <label htmlFor="adress">Address:</label>
            <input
              id="adress"
              type="text"
              placeholder="Your adress"
              value={address}
              onChange={handleChangeAddress}
              className="inputs"
              required
            />
            <label htmlFor="phone">Phone number:</label>
            <input
              id="phone"
              type="text"
              placeholder="Your phone"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              className="inputs"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleChangeEmail}
              className="inputs"
              required
            />
            <div className="form-group">
              <label htmlFor="checkInDate">Check-In Date:</label>
              <input
                type="date"
                id="checkInDate"
                value={checkInDate}
                className="inputs"
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">Check-Out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                className="inputs"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
            <button className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Confirmation"
      >
        <ModalContent />
      </ReactModal>
    </div>
  );
};

export default Form;
