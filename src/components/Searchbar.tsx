import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection } from "firebase/firestore";
import { Search } from "lucide-react";
import React, { useState } from "react";
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

  const sendSearch = () => {
    // const destinationRef = db.collection("destinations");
  };

  return (
    <div className="searchbar-container">
      <h3>Finn ditt reisemål</h3>
      <Form className="search">
        <Form.Control
          type="text"
          placeholder="Søk på et reisemål!"
          className="search-bar"
          value={searchText}
          onChange={trackSearch}
        ></Form.Control>
        <div className="search-icon" onClick={sendSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </Form>
    </div>
  );
};

export default Searchbar;
