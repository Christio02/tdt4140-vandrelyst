import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Destination } from "./CardContainer";
import { auth, db } from "../firebase_setup/firebase";
import DestinationCard from "./DestinationCard";
import { Link } from "react-router-dom";

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
        visited.map(async (id: string) => {
            const destinationRef = doc(db, "destinations", id);
            const destinationSnap = await getDoc(destinationRef);
            if (destinationSnap.exists()) {
            const destinationData = destinationSnap.data();
            return {
                id: id,
                imageURL: destinationData.mainImage,
                country: destinationData.country,
                city: destinationData.city,
            
              };
              }
              return null;
          })
          );

          setVisitedDestinations(visitedDestinationsData.filter(Boolean) as Destination[]);
      }
      }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        fetchVisitedDestinations();
      } else {
        console.log('User is not logged in.');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="visited-destinations-list" style={{ marginTop: "5vh"}}>
      <div className="cards" style={{ margin: "0 auto", width:"80%", gap:"2rem"}}>
        {visitedDestinations.map((destination, index) => (
          <Link to={`/destination/${destination.id}`} key={index} style={{ textDecoration: "none" }}>
            <div  style={{width:"20rem"}}>
            <DestinationCard destination={destination} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VisitedDestinations;
