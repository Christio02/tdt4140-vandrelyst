import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { db } from "../firebase_setup/firebase";
import AddDestinationForm from "./AddDestinationForm";

interface Destination {
  city: string;
}
const UpdateDestinationForm = (destination: Destination) => {
  const [destinationData, setDestinationData] = useState<Destination>();
  const [showUpdateDestination, setShowUpdateDestination] = useState(false);
  const []

  const handleUpdateShow = () => setShowUpdateDestination(true);
  const handleUpdateClose = () => setShowUpdateDestination(false);

  const handleImageChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const fetchDataToForm = async (destination: Destination) => {
    const destinationRef = doc(db, "destinations", destination.city);
    const destinationSnap = await getDoc(destinationRef);

    if (destinationSnap.exists()) {
      setDestinationData(destinationSnap.data() as Destination);
    } else {
      console.log("No destination");
    }
  };
  useEffect(() => {
    fetchDataToForm(destination);
  }, [destination]);

  return (
    <>
      <Button
        className="updateButton"
        variant="primary"
        onClick={handleUpdateShow}
      ></Button>
      {showUpdateDestination && (
        <div className="modal-container">
          <Modal
            show={showUpdateDestination}
            onHide={handleUpdateClose}
            size="xl"
          >
            {/* from https://react-bootstrap.netlify.app/docs/components/modal */}
            <Modal.Header closeButton>
              {/* Top bar, where the X is.*/}
              <Modal.Title className="ms-auto">
                Skjema for oppretting av destinasjon
              </Modal.Title>
            </Modal.Header>
            <Modal.Body as={"div"} style={{ padding: "1rem" }}>
              <Row className="mb-1 justify-content-center">
                <Col>
                  <Modal.Title className="text-center">
                    Generell informasjon
                  </Modal.Title>
                </Col>
              </Row>
              <Row className="mb-1">
                <Form.Group controlId="formFile" className="destination-file">
                  {/* For image upload*/}
                  <Form.Label>Forsidebilde</Form.Label>
                  <Form.Control
                    type="file"
                    size="lg"
                    onChange={handleImageChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Col md={2}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="By"
                      onChange={handleCityChange}
                      autoFocus
                    />
                  </InputGroup>
                </Col>
                <Col md={2}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Land"
                      onChange={handleCountryChange}
                    />
                  </InputGroup>
                </Col>
                <Col md={2}>
                  <InputGroup>
                    <Form.Select onChange={handleTypeChange} defaultValue="">
                      <option value="" disabled>
                        Type
                      </option>
                      {["Vinter", "Natur", "Storby", "Strand"].map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Col>
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
                <Col md={2}>
                  <InputGroup>
                    <Form.Select onChange={handlePriceChange} defaultValue="">
                      <option value="" disabled>
                        Pris
                      </option>
                      {range(0, 5).map((price) => (
                        <option key={price} value={price}>
                          {price}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Col>
                <Col md={2}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Temperatur"
                      onChange={handleTemperatureChange}
                    />
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

              <Row className="mb-1 justify-content-center">
                <Col>
                  <Modal.Title className="text-center">
                    Ting å gjøre
                  </Modal.Title>
                </Col>
              </Row>

              <Row className="mb-1">
                <Col md={4}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleThingsImagesChange(0)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleThingsImagesChange(1)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleThingsImagesChange(2)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col md={4}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 1"
                      onChange={handlePictureTitleChange(0)}
                    />
                  </InputGroup>
                </Col>
                <Col md={4}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 2"
                      onChange={handlePictureTitleChange(1)}
                    />
                  </InputGroup>
                </Col>
                <Col md={4}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 3"
                      onChange={handlePictureTitleChange(2)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              {/* Description of things to do*/}
              <Row className="mb-5">
                <Col md={4}>
                  <Form.Group controlId="description">
                    <Form.Label>Beskrivelse 1</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handlePictureDescriptionChange(0)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="description">
                    <Form.Label>Beskrivelse 2</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handlePictureDescriptionChange(1)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="description">
                    <Form.Label>Beskrivelse 3</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handlePictureDescriptionChange(2)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-1 justify-content-center">
                <Col>
                  <Modal.Title className="text-center">
                    Ekstra bilder
                  </Modal.Title>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col md={3}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleExtraImagesChange(0)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleExtraImagesChange(1)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleExtraImagesChange(2)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="formFile" className="destination-file">
                    <Form.Control
                      type="file"
                      onChange={handleExtraImagesChange(3)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col md={3}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 1"
                      onChange={handleExtraImageTitleChange(0)}
                    />
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 2"
                      onChange={handleExtraImageTitleChange(1)}
                    />
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 3"
                      onChange={handleExtraImageTitleChange(2)}
                    />
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Bildetittel 4"
                      onChange={handleExtraImageTitleChange(3)}
                    />
                  </InputGroup>
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
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default UpdateDestinationForm;
