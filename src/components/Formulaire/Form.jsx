import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Form.css";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const chosenCity = location?.state?.chosenCity;
//    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Check-In Date: ${checkInDate}, Check-Out Date: ${checkOutDate}`);
    // Add code to submit form data to backend or display confirmation message to user
  };

  return (
    <div className="reservation-form-container">
      {/* //<Navbar/> */}
      <h2>Reservation Confirmation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input type="date" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input type="date" id="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
        </div>
        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
}

export default Form;
