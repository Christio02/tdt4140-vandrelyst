import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { auth, db, storage } from "../firebase_setup/firebase";
import { getReviews } from "./ReviewsSection";
import { collection, getDocs, getFirestore, where, query, doc, setDoc } from 'firebase/firestore';

import "../style/addDestinationPopUp.css";

/**
 * Renders a pop-up component for creating a destination.
 * Allows the user to input various details such as temperature, city, country, rating, price, description, and things to do.
 * Provides an option to upload an image for the destination.
 * Saves the destination data to a database upon user submission.
 */

type reviewFormProp = {
  city: string;
};

interface Review {
  userName: string;
  date: string;
  rating: number;
  description: string;
}

type queryForReviews = {
  destination: string;
};

const AddReviewForm = (props: reviewFormProp) => {
  const [showAddReview, setShowAddReview] = useState(false);

  const handleReviewClose = () => setShowAddReview(false);
  const handleReviewShow = () => {
    if (!auth?.currentUser?.email) {
      alert("Du må logge inn");
      return;
    }
    setShowAddReview(true);
  };

  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const sendDataToFirestore = async () => {
    try {
      //* Hente ut doc med ID for destinasjonen "ByLand"
      //* Sende fra DestinationPage til ReviewSUmmary
      //* ReviewSummary til addReviewForm
      //* Hente ut brukeren med email fra siden med auth?.currentUser?.email

      //! Lagre reviews i collection på hver destination
      //! Hvordan henter man i så fall ut?

      //! Hente ut for bruker:
      //! Peke på bruker i reviewen

            //! Hente ut for destinasjon:
            //! Hente ut på samme format er greit
            
            const getDestinationID = async () => {
                try {
                  const db = getFirestore();
                  const destinationsRef = collection(db, "destinations");
                  const q = query(destinationsRef, where("city", "==", props.city));
                  const querySnapshot = await getDocs(q);
                  const destinationID = querySnapshot.docs[0].id;
                  return destinationID;
                } catch (error) {
                  console.error("Error fetching destinations:", error);
                }
              };
            
            const destinationID = await getDestinationID();
            const currentDate = new Date();

      const formattedDate = currentDate.toLocaleDateString("no", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const userID = auth?.currentUser?.email;

      // console.log(formattedDate);

      const data = {
        rating: rating ? parseInt(rating) : 0,
        description: description,
        destination: props.city,
        date: currentDate,
        user: userID,
                id: destinationID,
      };

            const DESTINATION = props.city + "_" + userID;
            const userDocument = doc(db, "reviews", DESTINATION);

      await setDoc(userDocument, data);

      //   console.log("Document written with id: ", docRef.id);
      alert("Review added successfully!");
      handleReviewClose();
      window.location.reload();
    } catch (error) {
      console.error("Error: ", error);
      alert("An error occurred while adding the review.");
    }
  };

  function range(start: number, end: number) {
    // Function to create a range of numbers
    return Array(end - start + 1)
      .fill(0)
      .map((_, idx) => start + idx);
  }

  // Hente ut reviews
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loggetInnOgHarSkrevetReview, setLoggetInnOgHarSkrevetReview] =
    useState(false);

  useEffect(() => {
    const destination: queryForReviews = {
      destination: props.city,
    };
    // console.log(destination.destination);
    // console.log("Før henting: " +endret)
    getReviews(destination).then((reviews: Review[]) => {
      setReviews(reviews);

      if (
        auth?.currentUser?.email === undefined ||
        auth?.currentUser?.email === null
      ) {
        // console.log("Ikke logget inn")
        setLoggetInnOgHarSkrevetReview(false);
      } else {
        for (let i = 0; i < reviews.length; i++) {
          if (reviews[i].userName === auth?.currentUser?.email) {
            // console.log("Logget inn og har skrevet review")
            setLoggetInnOgHarSkrevetReview(true);
          }
        }
      }
    });
    // console.log("-----------", reviews)
  }, [props.city]);

  return (
    <>
      <Button
        className="createButton"
        variant="primary"
        onClick={handleReviewShow}
      >
        {loggetInnOgHarSkrevetReview ? "Rediger omtale" : "Legg til omtale"}
      </Button>

      {showAddReview && (
        <div className="modal-container">
          <Modal show={showAddReview} onHide={handleReviewClose} size="xl">
            {/* from https://react-bootstrap.netlify.app/docs/components/modal */}
            <Modal.Header>
              {/* Top bar, where the X is.*/}
              <Modal.Title className="w-100 text-center">
                Skriv din omtale
              </Modal.Title>
            </Modal.Header>

            <Modal.Body as={"div"} style={{ padding: "1rem" }}>
              <Row className="mb-1">
                <Col md={2}>
                  <InputGroup>
                    <Form.Select onChange={handleRatingChange} defaultValue="">
                      <option value="" disabled>
                        Rating
                      </option>
                      {range(0, 5).map((rating) => (
                        <option key={rating} value={rating}>
                          {rating}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Col>
              </Row>
              {/* Description */}
              <Row className="mb-5">
                <Col>
                  <Form.Group controlId="description">
                    <Form.Label>Beskrivelse</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handleDescriptionChange}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>

            <Modal.Footer
              style={{ display: "flex", justifyContent: "center", gap: "5rem" }}
            >
              <Button variant="danger" onClick={handleReviewClose}>
                Close
              </Button>
              <Button variant="success" onClick={sendDataToFirestore}>
                Add Review
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddReviewForm;
