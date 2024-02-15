import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import DestinationPopUp from "./components/DestinationPopUp";
import Searchbar from "./components/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-container">
      {/* AddDestinationButton is a component that we created in the components folder */}
      <Searchbar />

      <DestinationPopUp />
      <Link to="/destinationpage">Destination</Link>
    </div>
  );
}

export default App;
