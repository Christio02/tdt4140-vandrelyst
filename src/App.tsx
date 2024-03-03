import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer";
import DestinationPopUp from "./components/AddDestinationForm";
import Filtercomponent from "./components/Filtercomponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import OmOss from "./pages/OmOss";

function App() {
  const [searchResults, setSearchResults] = useState<any[]>([]); // parent stores search from searchbar

  return (
    <div className="main-container">
      <Navbar />
      <Searchbar setSearchResults={setSearchResults} />
      <DestinationPopUp />
      <Filtercomponent />
      <CardContainer destinationsFromSearch={searchResults} />{" "}
      {/* Then passes the stored searchresult down to cardcontainer*/}
      <Footer />
    </div>
  );
}
export default App;
