import { Routes, Route, } from 'react-router-dom';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/AboutUS/About';
import Listing from './components/Listing/Listing';
import Form from './components/Formulaire/Form'; 
import Contact from "./components/Contact/Contact";
function App() {
const [meteoData, setMeteoData] = useState([])

  useEffect(() => {
      fetch('http://api.weatherapi.com/v1/forecast.json?key=29346aa7147e4bfea2d160503231105&q=Lille')
      .then(response => response.json())
      .then(data => setMeteoData(data))
  }, [])

  console.log(meteoData.current.temp_c)
  return (

  <>

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
        <Route
          path="/listing"
          element={
            <Listing/>}>
        </Route>
        <Route
          path="/Form"
          element={
            <Form/>}>
        </Route>
        <Route
          path="/contact"
          element={
            <Contact/>}>
        </Route>

</Routes>
  </>
  
  
  );
}

export default App;
