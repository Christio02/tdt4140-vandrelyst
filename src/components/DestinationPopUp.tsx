import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { db, storage } from "../firebase_setup/firebase";
import "../style/addDestinationPopUp.css";


/**
 * Renders a pop-up component for creating a destination.
 * Allows the user to input various details such as temperature, city, country, rating, price, season, description, and things to do.
 * Provides an option to upload an image for the destination.
 * Saves the destination data to a database upon user submission.
 */
function DestinationPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState<File | null>(null);

  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [season, setSeason] = useState("");
  const [description, setDescription] = useState("");
  const [things, setThings] = useState<string[]>([]); // things to do should be an array with three strings.
  // const [pictures] ???

  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemperature(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };
  const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeason(event.target.value);
  };

  const handleThingsToDoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const thingsArray = event.target.value
      .split(",")
      .map((element) => element.trim()); // Remove leading and trailing whitespaces
    setThings(thingsArray);
  };

  const handleImageChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const uploadImageAndGetURL = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      
      if (image == null) { // Return if no image
        reject("No image to upload.");
        return;
      }

      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        }).catch(reject);
      }).catch(reject);
    });
  };

 
  const sendData = async () => {
    console.log(temperature);
    console.log(things);
    console.log(image);
    try {
      
      const imageUrl = await uploadImageAndGetURL(); // Wait for the image to be uploaded and get its URL

      const docRef = await addDoc(collection(db, "destinations"), { // Create a new document in the "destinations" collection
        temperature: temperature ? parseInt(temperature) : 0,
        city,
        country,
        description,
        price: price ? parseInt(price) : 0,
        rating: rating ? parseInt(rating) : 0,
        season,
        things,
        id: `${city}, ${country}`,
        imageUrl,
      });
      console.log("Document written with id: " + docRef.id);
      alert("Destination added successfully!");
    } catch (error) {
      console.error("Error: " + error);
      alert("An error occurred while adding the destination.");
    }
  };

  return (
    <>
      <Button
        className="createButton"
        variant="outline-light"
        style={{
          backgroundColor: "#C8D8E4",
        }}
        onClick={handleShow}
      >
        Legg til en destinasjon!
      </Button>

      <div className="modal-container">
        <Modal show={show} onHide={handleClose} size="lg">
          {" "}
          {/* from https://react-bootstrap.netlify.app/docs/components/modal */}
          <Modal.Header closeButton>
            {" "}
            {/* Top bar, where the X is.*/}
            <Modal.Title className="ms-auto">
              Skjema for oppretting av destinasjon
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            as={"div"}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {" "}
            {/* All of our inputs are stored in the main body of the popup. */}
            <Form.Group controlId="formFile" className="destination-file">
              {/* For image upload*/}
              <Form.Label>Endre forsidebilde</Form.Label>
              <Form.Control
                type="file"
                size="lg"
                onChange={handleImageChange}
              />
            </Form.Group>
            {/* Here are all of the text fields, boilerplate code. [REPEATED] */}
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="By"
                onChange={handleCityChange}
                autoFocus
              />
            </InputGroup>
            {/* The city column has focus when the popup is shwon*/}
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Land"
                onChange={handleCountryChange}
              />
            </InputGroup>
            <Form.Group
              controlId="description"
              className="description-input-box"
              onChange={handleDescriptionChange}
            >
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Pris"
                onChange={handlePriceChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Rating"
                onChange={handleRatingChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Sesong"
                onChange={handleSeasonChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Gjennomsnittstemperatur"
                onChange={handleTemperatureChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Skriv inn 3 ting man kan gjøre i byen med komma mellom"
                onChange={handleThingsToDoChange}
              />
            </InputGroup>
            {/*ALL INPUT FIELDS HAVE BEEN DEFINED. [END OF BOILERPLATE CODE]*/}
          </Modal.Body>
          <Modal.Footer
            style={{ display: "flex", justifyContent: "center", gap: "5rem" }}
          >
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={sendData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default DestinationPopUp;
