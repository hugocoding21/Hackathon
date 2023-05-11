import { Routes, Route } from "react-router-dom";
import "./App.css";


import Form from "./components/Formulaire/Form";

import Home from './components/Home/Home';

import Filter from "./components/FilterDestination/Filter";
import React from "react";
import About from "./components/AboutUS/About";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="page">
      <div className="nav">
      <Form />
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
