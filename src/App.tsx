import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer";
import DestinationPopUp from "./components/DestinationPopUp";
import Filtercomponent from "./components/Filtercomponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
<<<<<<< HEAD
    <div className="main-container">
      <Navbar />
      {/* AddDestinationButton is a component that we created in the components folder */}
=======
    <div className="App">
      {<TestPage /> }
>>>>>>> 3947a58 (navbar set up)
      <Searchbar />

      <DestinationPopUp />
      <Filtercomponent />
      <Link to="/destinationpage">Destination</Link>
      <CardContainer />
      <Footer />
    </div>
=======
import { Route, Routes } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 4cac580 (fix: fixed routing)
import "./App.css";
import DestinationPopUp from "./components/DestinationPopUp";
import Searchbar from "./components/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/destinationpage" element={<DestinationPage />} />
    </Routes>
>>>>>>> b4bf6dc (add routes for links)
=======
    <div className="main-container">
      {/* AddDestinationButton is a component that we created in the components folder */}
      <Searchbar />

      <DestinationPopUp />
      <Link to="/destinationpage">Destination</Link>
    </div>
>>>>>>> 4cac580 (fix: fixed routing)
  );
}

export default App;
