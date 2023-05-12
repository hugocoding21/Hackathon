import React, { useState, useEffect } from "react";
import { houses } from "./Listings";
import "./Listing.scss";
import house from "../house.jpg";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Listing() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const chosenCity = location?.state?.chosenCity;
  const filteredHouses = houses.filter(data => chosenCity === data.city);
  const navigate = useNavigate();
  const openModal = (house) => {
    setSelectedHouse(house);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedHouse(null);
    setShowModal(false);
  };

  const showConfirmationForm = () => {
    navigate("/Form", { state: {chosenCity:chosenCity } }); 
  }

  const contactHost = () => {
    navigate("/contact"); 
  }
  //show random profiles
  const [user, setUser] = useState();
  const getUser = () => {
    
    axios
      .get("https://randomuser.me/api?nat=en")
      .then((response) => response.data)
      .then((data) => {
        setUser(data.results[0]);
      });
  };
  useEffect(() => {
    getUser()
  }, []);
  
  /* console.log(filteredHouses[0].image); */
  return (
    <>
    <Navbar/>
    <div className="Listing_Container">
      <h1 className="Listings_title">Homes in {chosenCity}</h1>
      {filteredHouses.length === 0 && <p>No houses found in {chosenCity}</p>}
    {filteredHouses.map((data, key) => (
      <div key={key} className="house" onClick={() => openModal(data)}>
       <img src={data.image} className="cityHouseImg" alt="" /> 
        <p className="paragraph">{data.description}</p>
      </div>
    ))}
    {/* <button className="btn">Change destination</button> */}
      </div>

      {selectedHouse && showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h2 className="">Book your house in {chosenCity}</h2>
            <p className="home_description">{selectedHouse.description}</p>
            <div className="images_slide">
              <img src={selectedHouse.image} className="cityHouseImgModal" alt="random" />
            </div>
            <div><img className="user" src={user.picture.large} alt="user"/>
            <p className="userInfo">{user.name.first} {user.name.last}</p>
            </div>
            <div className="buttons">
              <button className="btn" onClick={showConfirmationForm}>Instant Book</button>
              <button className="btn" onClick={contactHost}>Contact host</button>
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

// https://www.pexels.com/collections/houses-toxvsbh/