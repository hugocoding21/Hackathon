import { Routes, Route } from "react-router-dom";
import "./App.css";
import Filter from "./components/FilterDestination/Filter";
import React, { useEffect, useState } from "react";
import About from "./components/AboutUS/About";
import Navbar from "./components/Navbar/Navbar";



function App() {
const [meteoData, setMeteoData] = useState([])

  useEffect(() => {
      fetch('http://api.weatherapi.com/v1/forecast.json?key=29346aa7147e4bfea2d160503231105&q=Lille')
      .then(response => response.json())
      .then(data => setMeteoData(data))
  }, [])

  console.log(meteoData.current.temp_c)
  return (

    
    <div className="page">
      <div className="nav">
      
        <Navbar />

      </div>
      
      <Routes>
        <Route path="/" element={<Filter />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>


  );
}

export default App;
