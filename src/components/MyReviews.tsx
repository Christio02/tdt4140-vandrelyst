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
    destinationId?: string;
    country?: string;
    mainImage?: string;
}

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState<Review[]>([]);

    useEffect(() => { // This method runs on the first render only
      const fetchMyReviews = async () => {
        const userEmail = getAuth().currentUser?.email;
        const reviewsRef = collection(db, "reviews");
        const q = query(reviewsRef, where("user", "==", userEmail));
        const querySnapshot = await getDocs(q);
        const reviews = querySnapshot.docs.map((doc) => doc.data() as Review); // Done with getting the reviews which the user has written

        // We need additional information, namely the country and main image of the destination.
        const enhancedReviews = await Promise.all(reviews.map(async (review) => {
          const destinationRef = collection(db, "destinations");
          const q = query(destinationRef, where("city", "==", review.destination));
          const destinationSnapshot = await getDocs(q);
          if (!destinationSnapshot.empty) {
            const destinationDoc = destinationSnapshot.docs[0]
            const destination = destinationDoc.data();
            return {
              ...review,
              country: destination.country,
              mainImage: destination.mainImage,
              destinationId: destinationDoc.id,
            };
          }
        }));

        setMyReviews(enhancedReviews.filter(Boolean) as Review[]); // Done with getting the additional information
      };

      const unsubscribe = auth.onAuthStateChanged(user => { // Ensures that fetchMyReviews starts after the user information has been fetched
        if (user) {
          fetchMyReviews();
        }
      });

      return () => unsubscribe();
    }, []);

  return (
    <div className="user-container" style={{ marginTop: "5vh" }}>
      <h3 style={{ textAlign: 'center' }}>Mine anmeldelser</h3>
      <div className="cards">
        {myReviews.map((review, index) => (
          <Link to={`/destinations/${review.destinationId}`} key={index}>
            <DestinationCard
              destination={{
                id: review.destination,
                city: review.destination,
                country: review.country || "",
                imageURL: review.mainImage || "",
              }}
            />
          </Link>
        ))}
        
      </div>
    </div>
  );
};







export default MyReviews;