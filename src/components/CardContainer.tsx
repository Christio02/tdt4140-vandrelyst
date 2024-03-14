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

export interface Destination {
  id: string;
  imageURL: string;
  country: string;
  city: string;
  type?: string;
  temperature?:number;
  price?:number;
  rating?:number;
}

interface CardContainerProps {
  destinationsFromSearch: Destination[];
  currentFilter: string; 
  sortCriterion: string | null;
  sortDirection: 'asc' | 'desc'; 
}

function CardContainer({ destinationsFromSearch, currentFilter, sortCriterion, sortDirection}: CardContainerProps) {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  // KOMMENTERER UT HELE DENNE FORDI VENTER MED Å DEFINERE TIL ETTER FETCHDATA const destinationsToDisplay = destinationsFromSearch.length > 0 ? destinationsFromSearch : destinations; // 
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
          let url = null;
          try {
            url = await getDownloadURL(ref(storage, destinationData.mainImage))
          } catch (error) {
            console.error("Error fetching image from Firebase: ", destinationData.city);
          }
          // console.log(url);
          if (url === null) {
            console.log("No main image for this destination: ", destinationData.city)
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

      const resolvedDestinationsArray = await Promise.all(destinationsArray);
      const validDestinationsArray = resolvedDestinationsArray.filter(
        (destination) => destination !== null
      ) as Destination[];

      setDestinations(validDestinationsArray);
    } catch (error) {
      console.error("Error fetching data from Firebase: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const storage = getStorage();
      const collectionRef = collection(db, "destinations");
      const querySnapshot = await getDocs(collectionRef);
  
      const destinationsArray: Promise<Destination | null>[] = querySnapshot.docs.map(async (doc) => {
        const destinationData = doc.data();
        let url = null;
        try {
          url = await getDownloadURL(ref(storage, destinationData.mainImage));
        } catch (error) {
          console.error("Error fetching image from Firebase: ", destinationData.city);
        }
        if (url === null) {
          console.log("No main image for this destination: ", destinationData.city);
          return null;
        }
        return {
          id: doc.id,
          imageURL: url,
          country: destinationData.country,
          city: destinationData.city,
          type: destinationData.type, 
          temperature: destinationData.temperature,
          price: destinationData.price,
          rating: destinationData.rating,
        };
      });
  
      const resolvedDestinationsArray = await Promise.all(destinationsArray);
      const validDestinationsArray = resolvedDestinationsArray.filter((destination) => destination !== null) as Destination[];
  
      const filteredDestinations = validDestinationsArray.filter(destination =>
        currentFilter === 'Alle' || destination.type === currentFilter
      );
  
      
      const sortedDestinations = filteredDestinations.sort((a, b) => {
        if (!sortCriterion) return 0;
      
        let valueA = a[sortCriterion as keyof Destination];
        let valueB = b[sortCriterion as keyof Destination];

        console.log(`Comparing ${valueA} and ${valueB} for criterion ${sortCriterion}`);
      
        
        valueA = valueA ?? 0;
        valueB = valueB ?? 0;
        console.log(`Comparing ${valueA} and ${valueB} for criterion ${sortCriterion}`);
      
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        }
      
        return 0; 
      });
      setDestinations(sortedDestinations);
    };
  
    fetchData();
  }, [currentFilter, sortCriterion, sortDirection]); 
  
  console.log(destinations);

  const destinationsToDisplay = destinationsFromSearch.length > 0 ? destinationsFromSearch : destinations;
  

  return (
    <div className="container">
      <h3 className="title" >Alle Reisemål </h3>
      <div className="cards">
        {destinationsToDisplay.map((destination) => (
          <Link
            to={`/destination/${destination.id}`}
            key={destination.id}
            className="link"
            style={{ textDecoration: "none" }}
          >
            {" "}
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
