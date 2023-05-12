import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/AboutUS/About";
import Listing from "./components/Listing/Listing";
import Form from "./components/Formulaire/Form";
import User from "./components/user/User";
import Filter from "./components/FilterDestination/Filter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Filter />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
