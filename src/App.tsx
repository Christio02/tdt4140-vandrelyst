import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Annonse from "./assets/annonse.png";
import DestinationPopUp from "./components/AddDestinationForm";
import CardContainer from "./components/CardContainer";
import Filtercomponent from "./components/Filtercomponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import OmOss from "./pages/OmOss";

function App() {
  const [searchResults, setSearchResults] = useState<any[]>([]); // parent stores search from searchbar
  const [currentFilter, setCurrentFilter] = useState<string>("Alle"); // oppdatere foreløpige filter fra Alle som start

  const handleFilterChange = (newFilter: string) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div className="main-container">
      <Navbar />
      <Searchbar
        setSearchResults={setSearchResults}
        placeholder="Søk på reisemål"
        title="Finn ditt reisemål"
      />

      <Filtercomponent onFilterChange={handleFilterChange} />
      <CardContainer
        destinationsFromSearch={searchResults}
        currentFilter={currentFilter}
      />
      <div className="annonse">
        <img src={Annonse}></img>
      </div>
      <Footer />
    </div>
  );
}
export default App;
