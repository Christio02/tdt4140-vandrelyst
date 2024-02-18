import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer";
import DestinationPopUp from "./components/DestinationPopUp";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="main-container">
      {/* AddDestinationButton is a component that we created in the components folder */}
      <Searchbar />

      <DestinationPopUp />
      <Link to="/destinationpage">Destination</Link>
      <CardContainer />
    </div>
  );
}

export default App;
