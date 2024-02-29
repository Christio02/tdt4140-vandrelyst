import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
} from "firebase/storage";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../style/CardContainer.css";

interface Destination {
  id: string;
  imageURL: string;
  country: string;
  city: string;
}

interface CardContainerProps {
  destinationsFromSearch: Destination[];
}

async function getMainImageUrl(storage: FirebaseStorage, doc: DocumentData) {
  const imagePath = `images/${doc.id}.jpg`; // The card image for the destination has the same name as the document ID.
  const imageRef = ref(storage, imagePath); // Get a reference to the image

  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting download URL:", error);
    return null;
  }
}

function CardContainer({ destinationsFromSearch }: CardContainerProps) {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  const destinationsToDisplay =
    destinationsFromSearch.length > 0 ? destinationsFromSearch : destinations;
  const fetchData = async () => {
    // Updates the array of destinations, by fetching data from the database.
    try {
      const db = getFirestore(); // Get the database
      const storage = getStorage(); // Get the image database
      const collectionRef = collection(db, "destinations");
      const querySnapshot = await getDocs(collectionRef); // Get all of the documents in the collection.

      const destinationsArray: Promise<Destination | null>[] =
        querySnapshot.docs.map(async (doc) => {
          // Go over all documents in the collection, and transform entry into a promise.
          const destinationData = doc.data();
          const url = await getMainImageUrl(storage, doc);
          if (url === null) {
            // Return a null value if the image URL is null.
            return null;
          }
          return {
            // Return a Destination object if the image URL is not null.
            id: doc.id,
            imageURL: url,
            country: destinationData.country,
            city: destinationData.city,
          };
        });

      const resolvedDestinationsArray = await Promise.all(destinationsArray); // Waits for all of the promises to resolve
      const validDestinationsArray = resolvedDestinationsArray.filter(
        (destination) => destination !== null
      ) as Destination[]; // Filters out the null values, and specify that the array is of type Destination instead of <Destination | null>[]

      setDestinations(validDestinationsArray);
    } catch (error) {
      console.error("Error fetching data from Firebase: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // The empty array means that the effect will only run once, after the initial render.

  console.log(destinations); // Log the state

  return (
    <div className="container">
      <h3 className="title">Alle Reisemål</h3>
      <div className="cards">
        {destinationsToDisplay.map((destination) => (
          <Link
            to={`/destination/${destination.id}`}
            key={destination.id}
            className="link"
            style={{ textDecoration: "none" }}
          >
            {" "}
            {/* textDecoration none means that we don't get blue lines under the text.*/}
            <Card className="card" key={destination.id}>
              <Card.Img
                variant="top"
                src={destination.imageURL}
                className="card-img"
              />
              <Card.Body>
                <Card.Title>{destination.city}</Card.Title>
                <Card.Text>{destination.country}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
