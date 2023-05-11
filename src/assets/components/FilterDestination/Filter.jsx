import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value.toLowerCase());
  };

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
        <h2>Choose your destination</h2>
        <input type="search" name="" id="" onChange={handleFilterChange} />
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
