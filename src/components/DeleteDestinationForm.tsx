import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { db } from "../firebase_setup/firebase";

interface Destination {
  id: string | undefined;
  city: string;
}

const DeleteDestinationForm = ({ id, city }: Destination) => {
  const [isDeleteForm, setIsDeleteForm] = useState(false);
  const [data, setData] = useState<Destination>();

  const handleShowDelete = () => setIsDeleteForm(true);
  const handleCloseDelete = () => setIsDeleteForm(false);

  const fetchFromFirestore = async (city: string) => {
    const getDestinationsDatabase = collection(db, "destinations");
    const searchQueryCity = query(
      getDestinationsDatabase,
      where("city", "==", city)
    );

    const snapshotCity = await getDocs(searchQueryCity);
    return snapshotCity.docs;
  };

  useEffect(() => {
    if (isDeleteForm) {
      const fetchData = async () => {
        const fetchedData = await fetchFromFirestore(city);
        const destinationFromData = fetchedData[0].data() as Destination;
        setData({
          id: destinationFromData.id,
          city: destinationFromData.city,
        });
      };
      fetchData();
    }
  }, [isDeleteForm, city]);

  const handleDelete = async () => {
    try {
      console.log(data?.city);
      const q = query(
        collection(db, "destinations"),
        where("city", "==", data?.city)
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
      <Button
        variant="danger"
        onClick={handleShowDelete}
        style={{ maxWidth: "200px" }}
      >
        Slett destinasjonen
      </Button>
      <div className="delete-modal">
        <Modal show={isDeleteForm} onHide={handleCloseDelete}>
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
              alignItems: "center",
            }}
          >
            <p>
              Er du sikker på at du vil slette destinasjonen, {data?.city ?? ""}
              ?
            </p>
          </Modal.Body>
          <Modal.Footer
            style={{ display: "flex", justifyContent: "center", gap: "5rem" }}
          >
            <Button variant="danger" onClick={handleCloseDelete}>
              Lukk
            </Button>
            <Button variant="success" onClick={handleDelete}>
              Lagre endringer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default DeleteDestinationForm;
