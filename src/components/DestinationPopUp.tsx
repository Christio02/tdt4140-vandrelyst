import {
  DocumentData,
  Query,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { ObjectFlags } from "typescript";
import { db, storage } from "../firebase_setup/firebase";
import "../style/addDestinationPopUp.css";

/**
 * Renders a pop-up component for creating a destination.
 * Allows the user to input various details such as temperature, city, country, rating, price, description, and things to do.
 * Provides an option to upload an image for the destination.
 * Saves the destination data to a database upon user submission.
 */

interface Destination {
  id: string;
  city: string;
}
const DestinationPopUp = () => {
  const [showAddDestination, setShowAddDestination] = useState(false);
  const [isDeleteForm, setIsDeleteForm] = useState(false);

  const handleAddClose = () => setShowAddDestination(false);
  const handleAddShow = () => setShowAddDestination(true);

  const [image, setImage] = useState<File | null>(null);

  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [things, setThings] = useState<string[]>([]); // things to do should be an array with three strings.

  const [selectedDest, setSelectedDest] = useState("");

  const [data, setData] = useState<Destination[]>([]);

  const handleShowDelete = () => setIsDeleteForm(true);
  const handleCloseDelete = () => setIsDeleteForm(false);

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
      if (image == null) {
        // Return if no image
        reject("No image to upload.");
        return;
      }

      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch(reject);
        })
        .catch(reject);
    });
  };

  const sendDataToFirestore = async () => {
    console.log(temperature);
    console.log(things);
    console.log(image);
    try {

      const docRef = await addDoc(collection(db, "destinations"), {
        // Create a new document in the "destinations" collection
        temperature: temperature ? parseInt(temperature) : 0,
        city,
        country,
        description,
        price: price ? parseInt(price) : 0,
        rating: rating ? parseInt(rating) : 0,
        things,
        id: `${city}, ${country}`,
      });
      console.log("Document written with id: " + docRef.id);
      
      if (image != null) {// Now that we have the document ID, we can use it in the image name
        const imageRef = ref(storage, `images/${docRef.id}.jpg`);
        await uploadBytes(imageRef, image);
        alert("Destination added successfully!");
      }
    } catch (error) {
      console.error("Error: " + error);
      alert("An error occurred while adding the destination.");
    }
  };

  const fetchFromFirestore = async () => {
    const destinationRef = collection(db, "destinations");
    const querySnapshot = await getDocs(destinationRef);
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() }); // spread operator -> add all fields/values to array
    });

    return data;
  };

  useEffect(() => {
    if (isDeleteForm) {
      const fetchData = async () => {
        const fetchedData = await fetchFromFirestore();
        setData(fetchedData);
      };
      fetchData();
    }
  }, [isDeleteForm]);

  const handleSelectedDestination = (selectedCity: string) => {
    setSelectedDest(selectedCity);
  };
  const handleDelete = async () => {
    try {
      console.log(selectedDest);
      const q = query(
        collection(db, "destinations"),
        where("city", "==", selectedDest)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docToDelete = querySnapshot.docs[0];
        await deleteDoc(doc(db, "destinations", docToDelete.id));
        alert("Destination deleted successfully!");
      } else {
        alert("Ingen destinasjon med navnet funnet");
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  return (
    <>
      {/* <AddDestinationButton className="createButton"></AddDestinationButton> */}
      <Button
        className="createButton"
        variant="primary"
        onClick={handleAddShow}
      >
        Legg til destinasjon
      </Button>

      <Button variant="danger" onClick={handleShowDelete}>
        Slett en destinasjon
      </Button>
      {showAddDestination && (
        <div className="modal-container">
          <Modal show={showAddDestination} onHide={handleAddClose} size="lg">
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
              <Button variant="danger" onClick={handleAddClose}>
                Close
              </Button>
              <Button variant="success" onClick={sendDataToFirestore}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

      {isDeleteForm && (
        <div className="delete-modal">
          <Modal show={isDeleteForm} onHide={handleCloseDelete} size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="ms-auto">
                Skjema for sletting av destinasjon
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              as={"div"}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Se Destinasjoner
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Need to map over destinations, and then display dropdowns*/}
                  {data.map((destination: Destination) => (
                    <Dropdown.Item
                      key={destination.id}
                      onClick={() =>
                        handleSelectedDestination(destination.city)
                      }
                    >
                      {destination.city}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Modal.Body>
            <Modal.Footer
              style={{ display: "flex", justifyContent: "center", gap: "5rem" }}
            >
              <Button variant="danger" onClick={handleCloseDelete}>
                Close
              </Button>
              <Button variant="success" onClick={handleDelete}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};
export default DestinationPopUp;
