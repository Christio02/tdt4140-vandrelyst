import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Destination } from "./CardContainer";
import { auth, db } from "../firebase_setup/firebase";
import DestinationCard from "./DestinationCard";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { StarRating } from "../pages/DestinationPage";

type FirestoreTimestamp = { // Declare that a firestoreTimestamp must have a toDate method which returns a javascript Date object
  toDate: () => Date;
}

interface Review {
  date: FirestoreTimestamp;
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

        const enhancedReviewsNotNull = enhancedReviews.filter(Boolean) as Review[];
        // Get the reviews sorted by date
        const sortedReviews = enhancedReviewsNotNull.sort((a: Review, b: Review) => b.date.toDate().getTime() - a.date.toDate().getTime());
        setMyReviews(sortedReviews); // Done with getting the additional information
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
        {myReviews.map((review) => (
            <div key={review.destinationId}>
              <Link to={`/destination/${review.destinationId}`} style={{ textDecoration: "none" }}>
                <Card className="card">
                  <Card.Img variant="top" src={review.mainImage} className="card-img" />
                  <Card.Body>
                    <Card.Title style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                      {review.destination}
                      <StarRating rating={review.rating} />
                    </Card.Title>
                    <Card.Text>{review.date ? review.date.toDate().toLocaleDateString('nb-NO', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : ''}</Card.Text>
                    <Card.Footer>
                      {review.description}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        
      </div>
    </div>
  );
};







export default MyReviews;