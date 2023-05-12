import React, { useState } from "react";
import "./Filter.css";
import {houses} from "../Listing/Listings" 
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");
  const [chosenCity, setChosenCity] = useState(""); // changed the spelling of the variable name

  const navigate = useNavigate();
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value.toLowerCase());
  };

  const showDestination = (destination) => {
    setChosenCity(destination.city); // set the chosenCity state to the city chosen by the user
    navigate("/listing", { state: { chosenCity: destination.city } }); // pass the chosen city as a state to the listing component
    
  };

  return (
   
      <div className="filtercontainer">
        <p className="">Choose your destination</p>
        <input type="search" onChange={handleFilterChange} className="searchBar" placeholder="Where do you want to travel...?"/>
      
        <p>Discover all of our destinations: </p>
      <div className="containerdestination">
       
        {houses.map((destination, index) => {
          // const { name } = destination;
          let className = destination.city;
          const shouldHide =
            filterValue && !destination.city.toLowerCase().includes(filterValue);

          return (
            <div
              key={index}
              className={`card ${className} ${shouldHide ? "hidden" : ""}`}
              onClick={() => showDestination(destination)}
            >
              {/* Added an image tag to display the city image */}
              <span>{destination.city}</span> 
              
            </div>
          );
        })}
      </div>
      </div>
    
  );
};

export default Filter;