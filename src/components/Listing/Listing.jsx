import React, { useState, useEffect } from "react";
import { houses } from "./Listings";
import "./Listing.scss";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Listing() {
  const [meteoData, setMeteoData] = useState([])

  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const chosenCity = location?.state?.chosenCity;
  const filteredHouses = houses.filter(data => chosenCity === data.city);
  const [user, setUser] = useState();
  const [pet, setPet] = useState();


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
    navigate("/Form", { state: {chosenCity:chosenCity, selectedHouse: selectedHouse.image }}); 
  }

  const contactHost = () => {
    navigate("/contact"); 
  }
  //show random profiles
  
  const getUser = () => {
    axios
      .get("https://randomuser.me/api?nat=en")
      .then((response) => response.data)
      .then((data) => {
        setUser(data.results[0]);
      });
  };
  const getPet = () => {
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((response) => {
        const breeds = response.data;
        const randomIndex = Math.floor(Math.random() * breeds.length);
        const randomBreed = breeds[randomIndex];
        setPet({
          name: randomBreed.name,
          image: randomBreed.image.url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUser()
    getPet()
  }, []);
  
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=29346aa7147e4bfea2d160503231105&q=${chosenCity}`)
    .then(response => response.json())
    .then(data => setMeteoData(data))
}, [])

console.log(meteoData)



  /* console.log(filteredHouses[0].image); */
  return (
    <>
    <Navbar/>
    <div className="Listing_Container">
      <h1 className="Listings_title">Homes in available {chosenCity}</h1>
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
            <h2 className="">Book your house in {chosenCity}, currently temperature : {meteoData.current.temp_c}°C</h2>
      
            <p className="home_description">{selectedHouse.description}</p>
            <div className="images_slide">
       
              <img src={selectedHouse.image} className="cityHouseImgModal" alt="random" />
            </div>
            <div><img className="user" src={user.picture.large} alt="user"/>
            <p className="userInfo">{user.name.first} {user.name.last}</p>
            </div>
            <div className="pet">
              <img className="petImage"src={pet.image}/>
          
          
            <p className="animal">If you want to come to my house, you will have to take care of me. My name is {pet.name}, and I can't wait to me you, <strong> human !</strong></p>
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

