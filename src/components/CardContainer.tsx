import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import {
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
      
      const alphabeticalOrderDestinations = validDestinationsArray.sort((a, b) => a.city.localeCompare(b.city));
      const filteredDestinations = alphabeticalOrderDestinations.filter(destination =>
        currentFilter === 'Alle' || destination.type === currentFilter
      );
      
      const sortedDestinations = filteredDestinations.sort((a, b) => {
        if (!sortCriterion) return 0;
      
        let valueA = a[sortCriterion as keyof Destination];
        let valueB = b[sortCriterion as keyof Destination];
        
        valueA = valueA ?? 0;
        valueB = valueB ?? 0;
      
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        }
      
        return 0; 
      });
      setDestinations(sortedDestinations);
    };
  
    fetchData();
  }, [currentFilter, sortCriterion, sortDirection]); 
  
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
