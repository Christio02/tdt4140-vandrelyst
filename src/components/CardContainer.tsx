import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import '../style/CardContainer.css'
import { Link } from 'react-router-dom';

interface Destination {
  id: string;
  imageURL: string;
  country: string;
  city: string;
}

function CardContainer() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {

  const fetchData = async () => {
    try {
      const db = getFirestore();
      const storage = getStorage();

      // Fetch data from Firestore
      const collectionRef = collection(db, "destinations");
      const querySnapshot = await getDocs(collectionRef);

      const destinationsArray: (Promise<Destination | null>)[] = querySnapshot.docs.map(async doc => {
        const destinationData = doc.data();
        // Construct the image path using the document ID
        const imagePath = `images/${doc.id}.jpg`; 
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef).catch(error => {
          console.error('Error getting download URL:', error);
          return null;  
        });
      
        if (url === null) {
          return null;
        }
      
        return {
          id: doc.id,
          imageURL: url,
          country: destinationData.country,
          city: destinationData.city,
        };
      });
      
      const resolvedDestinationsArray = await Promise.all(destinationsArray);
      const validDestinationsArray = resolvedDestinationsArray.filter((destination): destination is Destination => destination !== null);
      console.log(validDestinationsArray);
      setDestinations(validDestinationsArray);
      
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
  }
};

    
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
              <Card.Title>{destination.country}</Card.Title>
              <Card.Text>{destination.city}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
