import React, { useState } from "react";
import { houses } from "./Listings";
import "./Listing.scss";
//import house from "./house.jpg";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Listing() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const chosenCity = location?.state?.chosenCity;
  const filteredHouses = houses.filter(data => chosenCity === data.city);

  const openModal = (house) => {
    setSelectedHouse(house);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedHouse(null);
    setShowModal(false);
  };


  
  return (
    <>
    <Navbar/>
    <div className="Listing_Container">
      <h1 className="Listings_title">Homes in {chosenCity}</h1>
      {filteredHouses.length === 0 && <p>No houses found in {chosenCity}</p>}
    {filteredHouses.map((data, key) => (
      <div key={key} className="house" onClick={() => openModal(data)}>
        <img src={data.image} alt="" />
        <p className="paragraph">{data.description}</p>
      </div>
    ))}
    <button className="btn">Change destination</button>
      </div>

      {selectedHouse && showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h2>Book your house in {chosenCity}</h2>
            <p className="home_description">{selectedHouse.description}</p>
            <div className="images_slide">
              {/* <img src={} />
              <img src={} />
              <img src={} /> */}
            </div>
            <div className="buttons">
              <button className="btn">Instant Book</button>
              <button className="btn">Contact host</button>
            </div>
            <button onClick={closeModal} aria-label="close" className="x">
              ❌
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Listing;