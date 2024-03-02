import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db, storage } from "../firebase_setup/firebase";
import "../style/searchbar.css";

interface SearchbarProps {
  setSearchResults: (results: any[]) => void;
}

const Searchbar = ({ setSearchResults }: SearchbarProps) => {
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
    const searchQueryCity = query(
      getDestinationsDatabase,
      where("city", "==", searchtext)
    );
    const searchQueryCountry = query(
      getDestinationsDatabase,
      where("country", "==", searchText)
    );
    const snapshotCity = await getDocs(searchQueryCity);
    const snapshotCountry = await getDocs(searchQueryCountry);

    if (snapshotCity.empty && snapshotCountry.empty) {
      alert("Ingen destinasjoner funnet basert på søket ditt!");
    }

    const mergedDocs = [...snapshotCity.docs, ...snapshotCountry.docs];
    const destinationsWithImages = await Promise.all(
      mergedDocs.map(async (doc) => {
        const data = doc.data();
        const imageRef = ref(storage, `images/${doc.id}.jpg`); // create a reference to the image in Firebase Storage
        try {
          const imageURL = await getDownloadURL(imageRef); // get the download URL of the image
          console.log(
            `Here is document id : ${doc.id} and the correct imageurl from storage: ${imageURL}`
          );
          return { ...data, id: doc.id, imageURL }; // add the image URL to the destination data
        } catch (error) {
          console.error(
            `Error getting download URL for image ${doc.id}.jpg:`,
            error
          );
          return { ...data, id: doc.id }; // if there was an error getting the image URL, return the destination data without the image URL
        }
      })
    );

    setSearchResults(destinationsWithImages);    
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
