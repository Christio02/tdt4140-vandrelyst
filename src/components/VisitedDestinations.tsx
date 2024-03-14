import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Navbar from "../components/Navbar";
import "../style/UserPage.css";
import { Destination } from "./CardContainer";
import { db } from "../firebase_setup/firebase";

const VisitedDestinations = () => {
  const [visitedDestinations, setVisitedDestinations] = useState<Destination[]>([]);


  
  const fetchVisitedDestinations = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user?.email) {
      const userDocRef = doc(db, "users", user.email);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const visited = userData.visited || [];
  
        const visitedDestinationsData = await Promise.all(
          visited.map(async (id: string) => { // Use 'id' or any other variable name here
            const destinationRef = doc(db, "destinations", id);
            const destinationSnap = await getDoc(destinationRef);
            return destinationSnap.exists() ? destinationSnap.data() : null;
          })
        );
  
        setVisitedDestinations(visitedDestinationsData.filter(Boolean) as Destination[]);
      }
    }
  };
  
  
  

  return (
    <div className="visited-destinations-list">
  {visitedDestinations.map((destination, index) => (
    <div key={index} className="visited-destination-card">
      <img src={destination.imageURL} alt={destination.city} />
      <h3>{destination.city}</h3>
      <p>{destination.country}</p>
    </div>
  ))}
</div>

  );
};

export default VisitedDestinations;
