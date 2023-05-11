import React, { useState } from "react";
import { houses } from "./Listings";
import "./Listing.scss";
import house from "./house.jpg";

function Listing() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      <div className="Listings">
        {houses.map((data, key) => {
          return (
            <div key={key} className="house" onClick={() => openModal(data)}>
              <img src={house} alt="" />
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>

      {selectedHouse && showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h2>Book your house in {selectedHouse.city}</h2>
            <p className="home_description">{selectedHouse.description}</p>
            <div className="images_slide">
              <img src={house} />
              <img src={house} />
              <img src={house} />
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