import React, { useState } from "react";
import "./Filter.css";

import { houses } from "../Listing/Listings";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");
  const [chosenCity, setChosenCity] = useState(""); // changed the spelling of the variable name

  const navigate = useNavigate();

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");

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
      <input
        type="search"
        onChange={handleFilterChange}
        className="searchBar"
        placeholder="Where do you want to travel...?"
      />

      <p className="title1">Discover all of our destinations: </p>
      <div className="containerdestination">
        {houses.map((destination, index) => {
          // const { name } = destination;
          let className = destination.city;
          const shouldHide =
            filterValue &&
            !destination.city.toLowerCase().includes(filterValue);
  const destinations = [
    { name: "Paris", className: "paris" },
    { name: "Marseille", className: "marseille" },
    { name: "Nice", className: "nice" },
    { name: "Montpellier", className: "montpellier" },
    { name: "Saint-Tropez", className: "saint-tropez" },
    { name: "Lyon", className: "lyon" },
  ];

  return (
    <div>
      <div className="filtercontainer">
        <p>Choose your destination</p>
        <input type="search" onChange={handleFilterChange} />
      </div>

      <div className="containerdestination">
        {destinations.map((destination, index) => {
          const { name, className } = destination;
          const shouldHide =
            filterValue && !name.toLowerCase().includes(filterValue);

          return (
            <div
              key={index}
              className={`card ${className} ${shouldHide ? "hidden" : ""}`}
              onClick={() => showDestination(destination)}
            >
              {/* Added an image tag to display the city image */}
              <span>{destination.city}</span>
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
