import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../firebase_setup/firebase";
import "../style/searchbar.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState(""); // save input text in hook

  const trackSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // function that tracks every letter user types in
    setSearchText(event.target.value);
    // console.log(searchText)
  };
  const sendSearch = async (searchtext: string) => {
    if (searchtext == null) {
      return;
    }

    const getDestinationsDatabase = collection(db, "destinations");
    const searchQuery = query(
      getDestinationsDatabase,
      where("city", "==", searchtext),
      where("country", "==", searchtext)
    );
    const snapshot = await getDocs(searchQuery);

    if (snapshot.empty) {
      alert("Ingen destinasjoner funnet basert på søket ditt!");
    }
    console.log(snapshot);
  };

  return (
    <div className="searchbar-container">
      <h2>Finn ditt reisemål</h2>
      <Form className="search">
        <Form.Control
          type="text"
          placeholder="Søk på et reisemål!"
          className="search-bar"
          value={searchText}
          onChange={trackSearch}
        ></Form.Control>
        <div className="search-icon" onClick={() => sendSearch(searchText)}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </Form>
    </div>
  );
};

export default Searchbar;
