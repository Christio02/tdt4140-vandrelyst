import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer";
import DestinationPopUp from "./components/DestinationPopUp";
import Filtercomponent from "./components/Filtercomponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import OmOss from "./pages/OmOss";

interface SearchbarProps {
  setSearchResults: (results: any[]) => void;
}

function App() {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  return (
    <div className="main-container">
      <Navbar />
      <Searchbar setSearchResults={setSearchResults} />
      <DestinationPopUp />
      <Filtercomponent />
      <CardContainer destinationsFromSearch={searchResults} />
      <Footer />
    </div>
  );
}
export default App;
