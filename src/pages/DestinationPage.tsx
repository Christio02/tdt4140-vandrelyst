import React from "react";
import Navbar from "../components/Navbar";
import "../style/DestinationPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "../style/CardContainer.css";


interface Destination {
  mainImage: string;
  city: string;
  country: string;
  rating: number;
  price: number;
  temperature: number;
  description: string;
  thingsToDo: Array<object>;
  extraImages: Array<object>;
  
}

const DestinationPage = () => {
  
  const {id} = useParams(); // route parameter has the same name as the parameter in the route path in App.tsx
  const [mainPhotoUrl, setMainPhotoUrl] = useState('');
  const [destination, setDestination] = useState<Destination | null>(null);
  console.log(id); // This will log the id of the destination to the console.


  useEffect(() => {
    const fetchDestinationData = async () => {
      if (!id) {
        console.log(id);
        return;
      }
      const db = getFirestore();
      const docRef = doc(db, "destinations", id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const destinationData = docSnap.data() as Destination;
        setDestination(destinationData);
  
        if (!destinationData.mainImage) {
          console.error("No mainImage in the document:", id);
          return;
        }
  
        try {
          const url = await getDownloadURL(ref(getStorage(), destinationData.mainImage));
          setMainPhotoUrl(url);
        } catch (error) {
          console.error("Error fetching image from Firebase: ", error);
        }
      } else {
        console.log("No such document!");
      }
    };
  
    if (id) {
      fetchDestinationData();
    }
  }, [id]);
  
  if (!destination) { // If destination data hasn't been fetched yet, you return a loading state
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <MainPhoto url={mainPhotoUrl}/>
      <TitleDiv destination={destination}/>
      <AllRatings destination={destination}/>
      <div className="AllContentDivs">
        <DescriptionDiv destination={destination}/>
        <ActivitesDiv title="Ting å gjøre" activities={destination.thingsToDo} />
        <ActivitesDiv title="Bilder" activities={destination.extraImages} />
      </div>
        
      <div className="review-container">
        <h2 className="reviews-title">REVIEWS</h2>
      <div className="review-section">
      <ReviewSummary />
      <ReviewList />
      </div>    
      </div>

    </div>
  );
};

const AllRatings = ({destination}: {destination: Destination}) => {
  return (
    <div className="AllRatings">
      <StarRating rating={destination.rating}/>
      <PriceRating price={destination.price}/>
      <TempRating temp={destination.temperature}/>
    </div>
  );
};


interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
  const totalStars = 5;
  const fullStars = Math.round(rating)
  const emptyStars = totalStars - fullStars

  return (
    <div className="StarRating" id="Rating">
      {Array(fullStars).fill(0).map((_, index) => <FontAwesomeIcon icon={faSolidStar} key={`Solid-${index}`} />)}
      {Array(emptyStars).fill(0).map((_, index) => <FontAwesomeIcon icon={faRegularStar} key={`Regular-${index}`} />)}
    </div>
  );
};

interface PriceRatingProps{
  price: number
}

const PriceRating: React.FC<PriceRatingProps> = ({price}) => {
  
  return (
    <div className="PriceRating" id="Rating">
      {Array(price).fill(0).map((_, index) => <FontAwesomeIcon icon={faDollarSign} className='faDollarSign' key={`Dollar-${index}`} />)}
      {/*It might seem overly complex to write all of this code to do something as simple as creating an array, but this seems to be standard.
      You start out by filling the array with zeros, and then you map each element from a 0 to an icon of type 'faDollarSign'
      We then give a className attribute to each of these icons, enabling us to style them with CSS.*/}
    </div>
  );
};

const TempRating = ({temp}: {temp: any}) => {
  return (
    <div className="TempRating" id="Rating">
      <span>{temp}°C </span>
    </div>
  );
};

const MainPhoto = ({url}: {url: any}) => {
  console.log(url);
  return (
    <div className="PhotoOfCity">
      <img src={url} alt="Photo of city" />;
    </div>
  );
};

const DescriptionDiv = ({destination}: {destination: Destination}) => {
  return (
    <div className="DescriptionDiv">
      <h3>Beskrivelse</h3>
      <p className="DescriptionText">
        {destination.description}
      </p>
    </div>
  );
};

const TitleDiv = ({destination}: {destination: Destination}) => {
  return (
    <div className="TitleDiv">
      <h1> {destination.city} </h1>
      <h2> {destination.country} </h2>
    </div>
  );
};

type ActivitiesDivProps = {
  title: string;
  activities: Array<object>;
};

type BoxProps = {
  caption: string;
  description: string;
  imgLink: string;
};

const ActivityBox = (props:BoxProps) => {
    return (
        <div className="ActivityBox">
              <img src={props.imgLink} alt={props.caption} id="imgAttraction" />
      <h4>{props.caption}</h4>
      <p id="ImageDescription">{props.description}</p>
        </div>
    );
}

const ActivitesDiv = (props: ActivitiesDivProps) => {
  return (
    <div className="ActivitiesDiv">
      <h3 style={{ textAlign: 'center'}}>{props.title}</h3>
      <div className="AllActivities">
        {props.activities.map((activity: any, index: number) => (
          <ActivityBox
            key={index}
            caption={activity.caption}
            description={activity.description}
            imgLink={activity.imgLink}
          />
        ))}
      </div>
    </div>
  );
};




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
  
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  const ReviewSummary = () => {
    // regne ut average rating her
    
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


export default DestinationPage;

