import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase_setup/firebase";
import { userIsAdmin } from "./RegisterPanel";

interface Destination {
  id: string | undefined;
  city: string;
  email: string;
}

const DeleteDestinationForm = ({ id, city, email }: Destination) => {
  const navigate = useNavigate();
  const [isDeleteForm, setIsDeleteForm] = useState(false);
  const [data, setData] = useState<Destination>();
  const [userCanDelete, setUserCanDelete] = useState(false);

  const currentLoggedInUserEmail: string | undefined | null =
    auth?.currentUser?.email;

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

  const checkUserCanDelete = useCallback(
    async (userEmail: string) => {
      const admin = await userIsAdmin();
      if (
        currentLoggedInUserEmail === undefined ||
        currentLoggedInUserEmail === null ||
        currentLoggedInUserEmail !== userEmail
      ) {
        if (!admin) {
          setUserCanDelete(false);
        } else {
          setUserCanDelete(true);
        }
      } else {
        setUserCanDelete(true);
      }
    },
    [currentLoggedInUserEmail]
  );

  useEffect(() => {
    (async () => {
      await checkUserCanDelete(email);
    })();

    if (isDeleteForm && userCanDelete) {
      const fetchData = async () => {
        const fetchedData = await fetchFromFirestore(city);
        const destinationFromData = fetchedData[0].data() as Destination;
        setData({
          id: destinationFromData.id,
          city: destinationFromData.city,
          email: destinationFromData.email,
        });
      };
      fetchData();
    }
  }, [isDeleteForm, city, userCanDelete, email, checkUserCanDelete]);

  const handleDelete = async () => {
    try {
      const q = query(
        collection(db, "destinations"),
        where("city", "==", data?.city)
      );

      const qReviews = query(
        collection(db, "reviews"),
        where("destination", "==", data?.city)
      );

      const querySnapshot = await getDocs(q);
      const querySnapshotReviews = await getDocs(qReviews); 
      querySnapshotReviews.docs.forEach(async (doc) => { // Delete all reviews for the destination
        await deleteDoc(doc.ref);
      });

      if (!querySnapshot.empty) {
        const docToDelete = querySnapshot.docs[0];
        await deleteDoc(doc(db, "destinations", docToDelete.id));
        alert("Destination deleted successfully!");
        handleCloseDelete();
        navigate("/");

        // navigate to home page
      } else {
        alert("Ingen destinasjon med navnet funnet");
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  return (
    <>
      {userCanDelete && (
        <Button
          variant="danger"
          onClick={handleShowDelete}
          style={{ maxWidth: "200px" }}
        >
          Slett destinasjonen
        </Button>
      )}

      {isDeleteForm && (
        <div className="delete-modal">
          <Modal show={isDeleteForm} onHide={handleCloseDelete}>
            <Modal.Header>
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
                Er du sikker på at du vil slette destinasjonen,{" "}
                {data?.city ?? ""}?
              </p>
            </Modal.Body>
            <Modal.Footer
              style={{ display: "flex", justifyContent: "center", gap: "5rem" }}
            >
              <Button variant="success" onClick={handleCloseDelete}>
                Lukk
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Slett destinasjon
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default DeleteDestinationForm;
