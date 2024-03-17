import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import RecommendedDestinations from "./components/RecommendedDestinations";




function App() {
  const [searchResults, setSearchResults] = useState<any[]>([]); // parent stores search from searchbar
  const [currentFilter, setCurrentFilter] = useState<string>("Alle"); // oppdatere foreløpige filter fra Alle som start

  const [sortCriterion, setSortCriterion] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');


  const [userEmail, setUserEmail] = useState<string | null>(null);// Initialiser med tom streng eller gyldig e-post
 // Legg til en tilstand for å holde styr på brukerens e-post


 useEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail(null);
    }
  });
}, []);



  const handleFilterChange = (newFilter: string) => {
    setCurrentFilter(newFilter);
  };

 
  const handleSortChange = (criterion: string) => {
    let sortField;
    switch (criterion) {
      case 'Temperature':
        sortField = 'temperature'; 
        break;
      case 'Price':
        sortField = 'price'; 
        break;
      case 'Rating':
        sortField = 'rating'; 
        break;
      default:
        console.error('Unknown sort criterion:', criterion);
        return; 
    }
  
    setSortCriterion(sortField); 
    setSortDirection(prevDirection => prevDirection === 'asc' ? 'desc' : 'asc'); 
  };

 


  return (
    <div className="main-container">
      <Navbar />
      <Searchbar setSearchResults={setSearchResults} placeholder="Søk på reisemål" title="Finn ditt reisemål" />
      <Filtercomponent onFilterChange={handleFilterChange} onSortChange={handleSortChange} activeSort={sortCriterion} sortDirection={sortDirection} />
      {userEmail && <RecommendedDestinations userEmail={userEmail} />}
      <CardContainer destinationsFromSearch={searchResults} currentFilter={currentFilter} sortCriterion={sortCriterion} sortDirection={sortDirection} />
      <div className="annonse">
        <img src={Annonse}></img>
      </div>
      <Footer />
    </div>
  );
}
export default App;
