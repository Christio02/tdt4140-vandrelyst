
// import { useState } from "react";
import "../style/DestinationPage.css";
import CityPhoto from "./paris.jpg"; // Tell webpack this JS file uses this image


// console.log(cityPhoto);



const DestinationPage = () => {
    return (
        
        // <div><Navbar></Navbar></div>
        <div>
        <PhotoOfCity/>
        <TitleDiv/>
        <AllRatings/>
        <DescriptionDiv/>
        <Activites/>
        
        <div className="review-container">
        <h2 className="reviews-title">REVIEWS</h2>
        <div className="review-section">
        <ReviewSummary />
        <ReviewList />
        </div>    
        </div>

        </div>
    );
}

const AllRatings = () => {
    return (
        <div className="AllRatings">
        <StarRating/>
        <PriceRating/>
        <SeasonRating/>
        <TempRating/>
        </div>
    )
}

const StarRating = () => {
    let numberOfStars = 5;
    // Henter antall stjerner fra DB
    let actualRating = 3
    let numberOfEmptyStars = numberOfStars - actualRating;
    let emptyStar = <span>☆</span>;
    let fullStar = <span>★</span>
    
    return (
        <div className="StarRating" id="Rating">
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        </div>
    )
}
const PriceRating = () => {
    let numberOfDollarSigns = 3;
    // Henter antall stjerner fra DB
    let actualRating = 3
    let numberOfEmptyStars = numberOfDollarSigns - actualRating;
    let dollarSign = <span>$</span>

    return (
        // Database hente data
        <div className="PriceRating" id="Rating">
        <span>$</span>
        <span>$</span>
        <span>$</span>
        <span>$</span>
        </div>
    )
}

const SeasonRating = () => {
    // hente fra DB
    let seasonRating = 'Sommer';

    return (
        // Database hente data
        <div className="SeasonRating" id="Rating">
        <span>{seasonRating}</span>
        </div>
    )
}

const TempRating = () => {
    // hente fra DB
    let tempRating = '21,0';

    return (
        // Database hente data
        <div className="SeasonRating" id="Rating">
        <span>{tempRating}</span>
        </div>
    )
}



const PhotoOfCity = () => {
    return (
        <div className="PhotoOfCity">
        <img src={CityPhoto} alt="Photo of city"/>;
        </div>
    )
}

const TitleDiv = (props: Object) => {
    return (
        <div className="TitleDiv">
        <h1> Paris </h1>
        <h2> France </h2>
        {/* <h1> Paris {props.city}</h1> */}
        {/* <h3>{props.country}</h3> */}
        </div>
    );
}

const DescriptionDiv = () => {
    return (
        <div>
            <h3>Beskrivelse</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem facere ex cum expedita aliquam eum, rem dignissimos molestiae 
                blanditiis dolore sint beatae repellat quam! Deserunt assumenda reiciendis 
                pariatur inventore et!</p>
        </div>
    )
}

const Activites = () => {
    let thingsToDo = {
        football : "Football"
    };
    return (
        <div className="activityDescriptions">
        <h3>Ting å gjøre</h3>
        <ActivityBox/>
        <ActivityBox/>
        <ActivityBox/>
        </div>
    );
} 

const ActivityBox = (props:Object) => {
    return (
        <div className="ActivityBox">
            <span>Fotball</span>
        </div>
    );
}



interface Review {
    username: string;
    date: string;
    rating: number;
    comment: string;
  }
  

  const reviews: Review[] = [
    {
      username: '@Olebole',
      date: '15.02.24',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet. Sed fugit exercitationem non optio duimus quia corporis diucimus sed perferendis omnis vel laudantium molestiae. At quibusdam accusantium id reprehenderit rerum aut corporis suscipit.',
    },
    {
        username: '@tore tang',
        date: '02.02.24',
        rating: 3,
        comment: 'beste nettside noensinne',
      },
      {
        username: '@testtest',
        date: '30.01.24',
        rating: 5,
        comment: 'test',
      },
      {
        username: '@bruker',
        date: '27.01.24',
        rating: 4,
        comment: '!!',
      },
      
  ];
  
  
  const ReviewSummary = () => {
    // regne ut average rating her
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    
    // Antall reviews for hver stjernerating
    const starsCount = new Array(5).fill(0);
    reviews.forEach(review => {
      starsCount[review.rating - 1]++;
    });

    const handleAddReviewClick = () => {
        console.log('klikkklikk');
        // Implementere funksjonalitet når man trykker på knappen!!
      };
  
    return (
        <div className="review-summary">
          <h2>SUMMARY</h2>
          <div className="average-rating">
            {averageRating.toFixed(1)}
            <span className="total-reviews">({reviews.length} reviews)</span>
          </div>
          <div className="star-rating-summary">
            {[5, 4, 3, 2, 1].map(star => (
              <div key={star} className="star-row">
                <div className="star-label">{star} star{star > 1 ? 's' : ''}</div>
                <div className="star-bar">
                  <div className="star-fill" style={{ width: `${(starsCount[star - 1] / reviews.length) * 100}%` }}></div>
                </div>
                <div className="star-count">{starsCount[star - 1]}</div>
              </div>
            ))}
          </div>
          <button className="add-review-button" onClick={handleAddReviewClick}>
            Legg til omtale
        </button>
        </div>
      );
    };
  
  const ReviewItem: React.FC<{ review: Review, index: number }> = ({ review, index }) => {
    return (
        <div className={`review-item ${reviews.length - 1 === index ? 'no-border' : ''}`}> 
          <div className="review-user">{review.username} <span className="review-date">{review.date}</span></div>
          <div className="star-rating">
            {'★'.repeat(review.rating)}
            <span className="star-count">({review.rating})</span>
          </div>
          <p>{review.comment}</p>
        </div>
    );
  };
  
  const ReviewList = () => {
    return (
        <div className="review-list">
          {reviews.map((review, index) => (
            <ReviewItem key={index} review={review} index={index} />
          ))}
          <button>See more reviews</button>
        </div>
    );
  };






export default DestinationPage