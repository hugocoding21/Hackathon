import { Routes, Route, } from 'react-router-dom';
import "./App.css";

import Form from "./components/Formulaire/Form";

import Home from './components/Home/Home';
import About from './components/AboutUS/About';

function App() {
  
  return (

  <>
<Form />
    <Routes>
        <Route
          path="/"
          element={
            <Home/>}>
        </Route>
        <Route
          path="/about"
          element={
            <About/>}>
        </Route>

</Routes>
  </>
  
  

  );
}

export default App;
