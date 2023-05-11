import React, { useState } from "react";
import Listing from "./Listing";
function Destination() {
  return <>
  <div className="destnation_container">
    <h1>Paris</h1>
    <div className="houses">
    <Listing />
    </div>
  </div>
  
  </>;
}

export default Destination;
