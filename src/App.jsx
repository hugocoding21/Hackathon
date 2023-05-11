import { Routes, Route } from "react-router-dom";
import "./App.css";
import Filter from "./assets/components/FilterDestination/Filter";
import React from "react";
import About from "./components/AboutUS/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
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
