import "../style/DestinationPage.css";

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import { useEffect, useState } from "react";
import AddReviewForm from "../components/AddReviewForm";


type revProps = { sendDestination: string };

const ReviewsSection = (props: revProps) => {

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const destination: queryForReviews = {
            destination: props.sendDestination
        };
        getReviews(destination)
            .then((reviews) => {
                setReviews(reviews);
            });
    }, [props.sendDestination])


    return (
        <div className="ReviewsSection">
            <ReviewSummary sendDestination1={props.sendDestination} reviews={reviews} />
            <ReviewList sendDestination={props.sendDestination} reviews={reviews} />
        </div>
    );
}



interface Review {
    userName: string;
    date: string;
    rating: number;
    description: string;
}

type queryForReviews = {
    destination: string
};

export const getReviews = async (props: queryForReviews) => {
    const reviews: Review[] = [];

    const reviewsForDestination = collection(db, "reviews");

    const allReviewsQuery = query(reviewsForDestination, where("destination", "==", `${props.destination}`))
    const reviewsSnapshot = await getDocs(allReviewsQuery);

    reviewsSnapshot.forEach((doc) => {
        const reviewData = doc.data();
        // console.log(reviewData);
        let review: Review = {
            userName: reviewData.user,
            date: reviewData.date.toDate().toString(),
            rating: reviewData.rating,
            description: reviewData.description,
        };
        reviews.push(review);
    });

    return reviews;
};


type reviewSummaryProp = {
    sendDestination1: string;
    reviews: Review[]
}

const ReviewSummary = (props: reviewSummaryProp) => {

    //! Må ha useState for å ha tilstand fra start
    //! UseEffect vil så hente ut asynkront og sette ny tilstand når klar


    // regne ut average rating her
    const averageRating =
        props.reviews.reduce((acc, review) => acc + review.rating, 0) / props.reviews.length;

    // Antall reviews for hver stjernerating
    const starsCount = new Array(5).fill(0);
    props.reviews.forEach((review) => {
        starsCount[review.rating - 1]++;
    });

    return (
        <div className="review-summary">
            <h2>Omtaler</h2>
            <div className="average-rating">
                {averageRating.toFixed(1)}
                <span className="total-reviews">({props.reviews.length} omtale{props.reviews.length > 1 ? "r" : ""})</span>
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
                                    width: `${(starsCount[star - 1] / props.reviews.length) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <div className="star-count">{starsCount[star - 1]}</div>
                    </div>
                ))}
            </div>
            <div className="reviewButtonDiv">
                <AddReviewForm sendDestination2={"" + props.sendDestination1} />
                
            </div>
        </div>
    );
};

const ReviewItem: React.FC<{ review: Review; index: number, reviewsLength: number }> = ({
    review,
    index,
    reviewsLength
}) => {
    return (
        <div
            className={`review-item ${reviewsLength - 1 === index ? "no-border" : ""
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
    sendDestination: string;
    reviews: Review[]
}

const ReviewList = (props: reviewListProps) => {

    return (
        <div className="review-list">
            {props.reviews.map((review, index) => (
                <ReviewItem key={index} review={review} index={index} reviewsLength={props.reviews.length}
                />
            ))}
            <button className="moreReviews">See more reviews</button>
        </div>
    );
};







export default ReviewsSection;