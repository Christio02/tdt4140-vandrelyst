import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
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

async function getMainImageUrl(storage: any, doc: any) {
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



function CardContainer() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  const fetchData = async () => {
    try {
      
      const db = getFirestore(); // Get the database
      const storage = getStorage(); // Get the image database
      const collectionRef = collection(db, "destinations");
      const querySnapshot = await getDocs(collectionRef); // Get all of the documents in the collection.

      const destinationsArray: Promise<Destination | null>[] =
        querySnapshot.docs.map(async (doc) => { // Go over all documents in the collection, and transform entry into a promise.
          const destinationData = doc.data();
          const url = await getMainImageUrl(storage, doc);
          if (url === null) {
            return null;
          }

          return { // Return all of the information needed for the card.
            id: doc.id,
            imageURL: url,
            country: destinationData.country,
            city: destinationData.city,
          };
        });

      const resolvedDestinationsArray = await Promise.all(destinationsArray); // Waits for all of the promises to resolve
      const validDestinationsArray = resolvedDestinationsArray.filter(
        (destination): destination is Destination => destination !== null
      ); // Filters out the null values

      setDestinations(validDestinationsArray);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  console.log(destinations); // Log the state

  return (
    <div className="container">
      <h3 className="title">Alle Reisemål</h3>
      <div className="cards">
        {destinations.map((destination) => (
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
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
