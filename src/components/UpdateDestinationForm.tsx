import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";

import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase_setup/firebase";
import { Destination } from "../pages/DestinationPage";

interface UpdateFormProps {
  destination: Destination;
}

const UpdateDestinationForm = ({ destination }: UpdateFormProps) => {
  useEffect(() => {
    console.log(destination.city);
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleShow = () => setShowUpdateForm(true);
  const handleClose = () => setShowUpdateForm(false);

  const [image, setImage] = useState<File | null>(null);
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [thingsImages, setThingsImages] = useState<(File | null)[]>([
    null,
    null,
    null,
  ]);
  const [imageTitles, setImageTitles] = useState<string[]>(["", "", ""]);
  const [imageDescriptions, setImageDescriptions] = useState<string[]>([
    "",
    "",
    "",
  ]);

  const [extraImages, setExtraImages] = useState<(File | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [extraImageTitles, setExtraImageTitles] = useState(["", "", "", ""]);

  const handleImageChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };
  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(event.target.value);
  };
  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemperature(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleThingsImagesChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newImages = [...thingsImages];
      const files = event.target.files;
      if (files && files.length > 0) {
        newImages[index] = files[0];
      } else {
        newImages[index] = null;
      }
      setThingsImages(newImages); // Set the new images array
    };

  const handlePictureTitleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTitles = [...imageTitles];
      newTitles[index] = event.target.value;
      setImageTitles(newTitles);
    };

  const handlePictureDescriptionChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newDescriptions = [...imageDescriptions];
      newDescriptions[index] = event.target.value;
      setImageDescriptions(newDescriptions);
    };
  const handleExtraImagesChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newImages = [...extraImages];
      const files = event.target.files;
      if (files && files.length > 0) {
        newImages[index] = files[0];
      } else {
        newImages[index] = null;
      }
      setExtraImages(newImages); // Set the new images array
    };

  const handleExtraImageTitleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTitles = [...extraImageTitles];
      newTitles[index] = event.target.value;
      setExtraImageTitles(newTitles);
    };

  const sendDataToFirestore = async () => {
    let mainImageUrl = null;
    if (image != null) {
      const imageRef = ref(storage, `images/${city}_${country}/main.jpg`);
      await uploadBytes(imageRef, image);
      mainImageUrl = await getDownloadURL(imageRef);
    }

    const uploadImageAndGetURL = async (
      imageFile: Blob | ArrayBuffer | null,
      path: string | undefined
    ) => {
      if (imageFile) {
        const imageRef = ref(storage, path);
        await uploadBytes(imageRef, imageFile);
        return getDownloadURL(imageRef);
      }
      return null;
    };

    const thingsToDoPromises = thingsImages.map((file, index) =>
      uploadImageAndGetURL(
        file,
        `images/${city}_${country}/thingsToDo_${index}.jpg`
      )
    );
    const extraImagesPromises = extraImages.map((file, index) =>
      uploadImageAndGetURL(
        file,
        `images/${city}_${country}/extraImages_${index}.jpg`
      )
    );

    try {
      const thingsToDoUrls = await Promise.all(thingsToDoPromises);
      const extraImagesUrls = await Promise.all(extraImagesPromises);

      const thingsToDoData = thingsToDoUrls.map((url, index) => ({
        caption: imageTitles[index],
        description: imageDescriptions[index],
        imgLink: url,
      }));

      const extraImagesData = extraImagesUrls.map((url, index) => ({
        caption: extraImageTitles[index],
        description: "",
        imgLink: url,
      }));

      const docRef = await addDoc(collection(db, "destinations"), {
        mainImage: mainImageUrl,
        city,
        country,
        type,
        rating: rating ? parseInt(rating) : 0,
        price: price ? parseInt(price) : 0,
        temperature: temperature ? parseInt(temperature) : 0,
        description,
        thingsToDo: thingsToDoData,
        extraImages: extraImagesData,
      });

      console.log("Document written with id: ", docRef.id);
      alert("Destination added successfully!");
    } catch (error) {
      console.error("Error: ", error);
      alert("An error occurred while adding the destination.");
    }
  };

  function range(start: number, end: number) {
    // Function to create a range of numbers
    return Array(end - start + 1)
      .fill(0)
      .map((_, idx) => start + idx);
  }

  return (
    <>
      <Button className="updateButton" variant="primary" onClick={handleShow}>
        Oppdater destinasjon
      </Button>

      {showUpdateForm && (
        <div className="modal-container">
          <Modal show={showUpdateForm} onHide={handleClose} size="xl">
            {/* from https://react-bootstrap.netlify.app/docs/components/modal */}
            <Modal.Header closeButton>
              {/* Top bar, where the X is.*/}
              <Modal.Title className="ms-auto">
                Skjema for oppdatering av destinasjon
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
                      value={destination.city}
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
                      value={destination.country}
                      onChange={handleCountryChange}
                    />
                  </InputGroup>
                </Col>
                <Col md={2}>
                  <InputGroup>
                    <Form.Select onChange={handleTypeChange} defaultValue="">
                      <option value={destination.type} disabled>
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
                      <option value={destination.rating} disabled>
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
                      <option value={destination.price} disabled>
                        Pris
                      </option>
                      {range(0, 5).map((price) => (
                        <option key={price} value={destination.price}>
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
                      value={destination.temperature}
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
                      value={destination.description}
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
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5rem",
              }}
            >
              <Button variant="danger" onClick={handleClose}>
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
