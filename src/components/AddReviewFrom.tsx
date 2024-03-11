import {
        addDoc,
        collection,
    } from "firebase/firestore";
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
    import React, { useEffect, useState } from "react";
    import { Col, Dropdown, Row } from "react-bootstrap";
    import Button from "react-bootstrap/Button";
    import Form from "react-bootstrap/Form";
    import InputGroup from "react-bootstrap/InputGroup";
    import Modal from "react-bootstrap/Modal";
    import { auth, db, storage } from "../firebase_setup/firebase";
    import { doc, setDoc } from "firebase/firestore";
    import firebase from 'firebase/app';
    import 'firebase/firestore'; 

    import "../style/addDestinationPopUp.css";
    
    /**
     * Renders a pop-up component for creating a destination.
     * Allows the user to input various details such as temperature, city, country, rating, price, description, and things to do.
     * Provides an option to upload an image for the destination.
     * Saves the destination data to a database upon user submission.
     */
    
type reviewFormProp = {
    sendDestination2 : string
} 

const AddReviewForm = (props : reviewFormProp) => {
        const [showAddReview, setShowAddReview] = useState(false);
    
        const handleAddClose = () => setShowAddReview(false);
        const handleAddShow = () => setShowAddReview(true);
    
        const [rating, setRating] = useState("");
        const [description, setDescription] = useState("");
        const [destination, setDestination] = useState("");
        const [user, setUser] = useState("");
        const [date, setDate] = useState("");
    

        const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setRating(event.target.value);
        };
 
        const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
        };
    
        const sendDataToFirestore = async () => {
            try {
                //! Hente ut doc med ID for destinasjonen "ByLand"
                    //! Sende fra DestinationPage til ReviewSUmmary
                    //! ReviewSummary til addReviewForm  
                //! Hente ut brukeren med email fra siden med auth?.currentUser?.email

                //! Lagre reviews i collection på hver destination
                    //! Hvordan henter man i så fall ut?
                
                //! Hente ut for bruker:
                    //! Peke på bruker i reviewen

                //! Hente ut for destinasjon:
                    //! Hente ut på samme format er greit

                
                const DESTINATION = props.sendDestination2;
                const userDocument = doc(db, "reviews", DESTINATION);

                const currentDate = new Date();
                
                const formattedDate = currentDate.toLocaleDateString('no', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });

                const userID = auth?.currentUser?.email;

                console.log(formattedDate);

                const data = {
                    rating: rating ? parseInt(rating) : 0,
                    description : description,
                    destination: props.sendDestination2,
                    date : currentDate,
                    user : "userID"
                }
                await setDoc(userDocument, data);
                
            //   console.log("Document written with id: ", docRef.id);
              alert("Review added successfully!");
            } 
            catch (error) {
              console.error("Error: ", error);
              alert("An error occurred while adding the review.");
            }
          };
        
        function range(start: number, end: number) { // Function to create a range of numbers
                return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
            }

    
        return (
            <>
                {/* <AddDestinationButton className="createButton"></AddDestinationButton> */}
                <Button
                    className="createButton"
                    variant="primary"
                    onClick={handleAddShow}
                    >
                    Legg til omtale
                </Button>
    
                {showAddReview && (
                    <div className="modal-container">
                        <Modal show={showAddReview} onHide={handleAddClose} size="xl">
                            {/* from https://react-bootstrap.netlify.app/docs/components/modal */}
                            <Modal.Header closeButton>
                                {/* Top bar, where the X is.*/}
                                <Modal.Title className="ms-auto">
                                    Skriv din omtale
                                </Modal.Title>
                            </Modal.Header>


                            <Modal.Body as={"div"} style={{ padding: "1rem" }}>  
                                <Row className="mb-1">
                                
                                    <Col md={2}>
                                        <InputGroup>
                                            <Form.Select onChange={handleRatingChange} defaultValue="">
                                                <option value="" disabled>Rating</option>
                                                {range(0, 5).map(rating => (
                                                    <option key={rating} value={rating}>{rating}</option>
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
                                <Button variant="danger" onClick={handleAddClose}>
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
  