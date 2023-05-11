import { Routes, Route, } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';


function App() {
  
  return (

  <>

    <Routes>
        <Route
          path="/"
          element={
            <Home/>}>
        </Route>

</Routes>
  </>
  
  
  );
}

export default App;
