import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/AboutUS/About";
import Filter from "./components/FilterDestination/Filter";
import User from "./components/user/User";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Formulaire/Form";
import Listing from "./components/Listing/Listing";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Filter />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
