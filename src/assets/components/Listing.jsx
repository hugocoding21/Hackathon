import React, { useState } from "react";
import {houses} from "./Listings"; 
import "./Listing.scss"; 
import house from "./house.jpg";

function Listing() {
const openModal = () => {
    return (
        <></>
    );
}
  return <>
  <div className="Listings">
      {
         houses.map((data, key) => {
            return (
              <div key={key} className="house"
              onClick={openModal}>
                 <img src={house} alt=""/>
                <p>{data.description}</p>
               
              </div>
            );
          })
      }  


    </div>  
  </>;
}

export default Listing;
