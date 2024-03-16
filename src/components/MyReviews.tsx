import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Destination } from "./CardContainer";
import { auth, db } from "../firebase_setup/firebase";
import DestinationCard from "./DestinationCard";
import { Link } from "react-router-dom";


interface Review {
    date: Date;
    description: string;
    destination: string;
    rating: number;
    user: string;
}

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState<Review[]>([]);

    // Get the id of the destination which the review is linked to.
  
    const fetchMyReviews = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
    };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        fetchMyReviews();
      } else {
        console.log('User is not logged in.');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="user-container" style={{ marginTop: "5vh" }}>
      <h3 style={{ textAlign: 'center' }}>Besøkte Destinasjoner</h3>
      <div className="cards">
        
      </div>
    </div>
  );
};







export default MyReviews;