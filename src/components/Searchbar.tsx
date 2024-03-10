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
  placeholder: string;
  title?: string;
}

const Searchbar = ({
  setSearchResults,
  placeholder,
  title,
}: SearchbarProps) => {
  const [searchText, setSearchText] = useState(""); // save input text in hook

  const trackSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // function that tracks every letter user types in
    setSearchText(event.target.value);
    // console.log(searchText)
  };
  const sendSearch = async (searchtext:string) => {
    if (!searchtext) {
      return;
    }
  
    const getDestinationsDatabase = collection(db, "destinations");
    const searchQueryCity = query(getDestinationsDatabase, where("city", "==", searchtext));
    const searchQueryCountry = query(getDestinationsDatabase, where("country", "==", searchText));
    const snapshotCity = await getDocs(searchQueryCity);
    const snapshotCountry = await getDocs(searchQueryCountry);
  
    if (snapshotCity.empty && snapshotCountry.empty) {
      alert("No destinations found based on your search!");
      return; // Ensure function exits here if no documents are found
    }
  
    const mergedDocs = [...snapshotCity.docs, ...snapshotCountry.docs];
    const destinationsWithImages = await Promise.all(
      mergedDocs.map(async (doc) => {
        const data = doc.data();
        const imageRef = ref(storage, data.mainImage); // Use the 'mainImage' field from the document
  
        try {
          const imageURL = await getDownloadURL(imageRef); // Attempt to get the download URL of the image
          console.log(`Document id: ${doc.id}, Image URL from storage: ${imageURL}`);
          return { ...data, id: doc.id, imageURL }; // Include the image URL in the destination data
        } catch (error) {
          console.error(`Error getting download URL for image from 'mainImage' field:`, error);
          // Handle the error appropriately (e.g., log, use a default image, etc.)
        }
      })
    );
  
    setSearchResults(destinationsWithImages);
  };
  

  return (
    <div className="searchbar-container">
      <h2>{title}</h2>
      <Form className="search">
        <Form.Control
          type="text"
          placeholder={placeholder}
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
