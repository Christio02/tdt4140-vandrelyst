import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import CardContainer from "./components/CardContainer";
import DestinationPopUp from "./components/DestinationPopUp";
import Filtercomponent from "./components/Filtercomponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Searchbar />
      <DestinationPopUp />
      <Filtercomponent />
      <Link to="/destinationpage">Destination</Link>
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
