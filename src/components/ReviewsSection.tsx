import "../style/DestinationPage.css";

import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import AddReviewForm from "../components/AddReviewForm";
import { db } from "../firebase_setup/firebase";

type revProps = { city: string };

const ReviewsSection = (props: revProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const destination: queryForReviews = {
      destination: props.city,
    };
    getReviews(destination).then((reviews) => {
      setReviews(reviews);
    });
  }, [props.city]);

  return (
    <div className="ReviewsSection">
      <ReviewSummary
        city={props.city}
        reviews={reviews}
      />
      <ReviewList city={props.city} reviews={reviews} />
    </div>
  );
};

interface Review {
  userName: string;
  userEmail: string;
  date: string;
  rating: number;
  description: string;
}

type queryForReviews = {
  destination: string;
};

interface User {
  userEmail: string;
  userFullName: string;
}

export const getUserFullNameByEmail = async (userEmail: string): Promise<string> => {
  
  const usersCollectionRef = collection(db, "users");
  const userQuery = query(usersCollectionRef, where("userEmail", "==", userEmail));
  const querySnapshot = await getDocs(userQuery);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data() as User;
    return userData.userFullName;
  } else {
    console.log("No user found!");
    return '';
  }
};

export const getReviews = async (props: queryForReviews) => {
  const reviews: Review[] = [];

  const reviewsForDestination = collection(db, "reviews");
  const allReviewsQuery = query(reviewsForDestination, where("destination", "==", `${props.destination}`));
  const reviewsSnapshot = await getDocs(allReviewsQuery);

  const userNamePromises: Promise<string>[] = [];

  reviewsSnapshot.forEach((doc) => {
    const reviewData = doc.data();
    userNamePromises.push(getUserFullNameByEmail(reviewData.user));
  });

  const userNames = await Promise.all(userNamePromises);

  reviewsSnapshot.docs.forEach((doc, index) => {
    const reviewData = doc.data();

    let review: Review = {
      userName: userNames[index],
      userEmail: reviewData.user,
      date: reviewData.date.toDate().toString(),
      rating: reviewData.rating,
      description: reviewData.description,
    };
    reviews.push(review);
  });
  
  return reviews;
};

type reviewSummaryProp = {
  city: string;
  reviews: Review[];
};

const ReviewSummary = (props: reviewSummaryProp) => {
  //! Må ha useState for å ha tilstand fra start
  //! UseEffect vil så hente ut asynkront og sette ny tilstand når klar

  // regne ut average rating her
  const averageRating = () => {
    if (props.reviews.length < 1) {
      return 0;
    } else {
      return (
        Math.round( // Round down to 2 decimal places.
        props.reviews.reduce((acc, review) => acc + review.rating, 0) /
        props.reviews.length * 100) / 100
      );
    }
  };

  // Antall reviews for hver stjernerating
  const starsCount = new Array(5).fill(0);
  props.reviews.forEach((review) => {
    starsCount[review.rating - 1]++;
  });

  useEffect(() => {
    updateRatingForDestination(props.city);
  });

  const updateRatingForDestination = async (destination: string) => {
    const destRef = collection(db, "destinations");
    const q = query(destRef, where("city", "==", destination));
    const querySnap = await getDocs(q);
    if (!querySnap.empty) {
      const docRef = doc(db, "destinations", querySnap.docs[0].id);
      await updateDoc(docRef, {
        rating: averageRating() || 0,
      });
    }
  };

  return (
    <div className="review-summary">
      <h2>Omtaler</h2>
      <div className="average-rating">
        {averageRating()}
        <span className="total-reviews">
          ({props.reviews.length} omtale{props.reviews.length > 1 ? "r" : ""})
        </span>
      </div>
      <div className="star-rating-summary">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="star-row">
            <div className="star-label">
              {star} stjerne{star > 1 ? "r" : ""}
            </div>
            <div className="star-bar">
              <div
                className="star-fill"
                style={{
                  width: `${
                    (starsCount[star - 1] / props.reviews.length) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="star-count">{starsCount[star - 1]}</div>
          </div>
        ))}
      </div>
      <div className="reviewButtonDiv">
        <AddReviewForm city={"" + props.city} />
      </div>
    </div>
  );
};

const ReviewItem: React.FC<{
  review: Review;
  index: number;
  reviewsLength: number;
}> = ({ review, index, reviewsLength }) => {
  return (
    <div
      className={`review-item ${
        reviewsLength - 1 === index ? "no-border" : ""
      }`}
    >
      <div className="review-user">
        {review.userName} <span className="review-date">{review.date}</span>
      </div>
      <div className="star-rating">
        {"★".repeat(review.rating)}
        <span className="star-count">({review.rating})</span>
      </div>
      <p>{review.description}</p>
    </div>
  );
};

type reviewListProps = {
  city: string;
  reviews: Review[];
};

const ReviewList = (props: reviewListProps) => {
  return (
    <div className="review-list">
      {props.reviews.map((review, index) => (
        <ReviewItem
          key={index}
          review={review}
          index={index}
          reviewsLength={props.reviews.length}
        />
      ))}
      <button className="moreReviews">See more reviews</button>
    </div>
  );
};

export default ReviewsSection;
