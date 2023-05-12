import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/AboutUS/About";
import Filter from "./components/FilterDestination/Filter";
import User from "./components/user/User";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Filter />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
