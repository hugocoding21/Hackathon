import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Form.css";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const chosenCity = location?.state?.chosenCity;
  return (
    <div>
     <Navbar />
      <div className="all-form">
        <div className="reservation">
          <p className="sentence-destination">
            You have just chosen your destination, Your host will soo reach out to you<br />
            here is a summary before booking
          </p>
          <div className="lieu-reservation">
            <h2 className="name-destination">{chosenCity}</h2>
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
       
      </div>
    </div>
  );
};

export default Form;
