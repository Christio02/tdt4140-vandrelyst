import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/addDestinationPopUp.css";

function DestinationPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <AddDestinationButton className="createButton"></AddDestinationButton> */}
      <Button className="createButton" variant="primary" onClick={handleShow}>
        Legg til en destinasjon!
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-popup">
        <Modal.Header closeButton>
          <Modal.Title>Skjema for oppretting av destinasjon</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bynavn: Land: </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DestinationPopUp;
