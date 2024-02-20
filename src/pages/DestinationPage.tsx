import React from "react";
import Navbar from "../components/Navbar";
import "../style/DestinationPage.css";
import attraction2 from "./arcDeTriumph.jpg";
import photo1 from "./champsElysees.jpg";
import attraction1 from "./eiffelAttraction.jpg";
import attraction3 from "./louvre.jpg";
import photo3 from "./montmartre.jpg";
import photo2 from "./notreDame.jpg";
import photo4 from "./seineRiver.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "../style/CardContainer.css";


interface Destination {
  id: string;
  country: string;
  city: string;
  description: string;
  price: number;
  rating: number;
  temperature: number;
  things: Array<string>;
}

async function getMainImageUrl(storage: FirebaseStorage, id: string) {
  const imagePath = `images/${id}.jpg`; // The card image for the destination has the same name as the document ID.
  const imageRef = ref(storage, imagePath); // Get a reference to the image
  
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting download URL:", error);
    return null;
  }
}

const DestinationPage = () => {
  
  const {id} = useParams(); // route parameter has the same name as the parameter in the route path in App.tsx
  const [mainPhotoUrl, setMainPhotoUrl] = useState('');
  const [destination, setDestination] = useState<Destination | null>(null);
  console.log(id); // This will log the id of the destination to the console.


  useEffect(() => {
    const fetchDestinationData = async () => {
      if (!id) { // If the id is null, then return early. Tsx complains if you don't have this check.
        console.log(id);
        return;
      }
      const db = getFirestore();
      const docRef = doc(db, "destinations", id); // Assuming 'id' is the correct document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setDestination(docSnap.data() as Destination);
      } else {
        console.log("No such document!");
      }
    };
    
    const fetchMainPhotoUrl = async () => {
      if (!id) return;
      
      const url = await getMainImageUrl(getStorage(), id);
      setMainPhotoUrl(url!);
    };

    if (id) {
      fetchDestinationData();
      fetchMainPhotoUrl();
    }
  }, [id]); // Re-run when `id` changes

  
  if (!destination) { // If destination data hasn't been fetched yet, you return a loading state
    return <div>Loading...</div>;
  }

  return (
    // <div><Navbar></Navbar></div>
    <div>
      <Navbar/>
      <MainPhoto url={mainPhotoUrl}/>
      <TitleDiv destination={destination}/>
      <AllRatings destination={destination}/>
      <div className="AllContentDivs">
        <DescriptionDiv destination={destination}/>
        <ActivitesDiv title="Ting å gjøre" activities={actualActivities} />
        <ActivitesDiv title="Bilder" activities={otherPhotosOfCity} />
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

const AllRatings = ({destination}: {destination: any}) => {
  return (
    <div className="AllRatings">
      <StarRating/>
      <PriceRating />
      <TempRating temp={destination.temperature}/>
    </div>
  );
};

const StarRating = () => {
  let numberOfStars = 5;
  // Henter antall stjerner fra DB
  let numOfFullStars = numberOfStars - Math.round(averageRating);
  let emptyStar = <span>☆</span>;
  let fullStar = <span>★</span>;
  // let rating = [];
  // for (let i=1; i<6; i++) {
  //   if (i <= numOfFullStars) {
  //     rating.push(fullStar);
  //   }
  //   else {
  //     rating.push(emptyStar);
  //   }
  // }

  return (
    <div className="StarRating" id="Rating">
  {/* //     {rating.map((star, index) => { */}
  {/* //       <span key={index}>{star}</span>; */}
  {/* //     })} */}
      <span>★</span>
      <span>☆</span>
      <span>☆</span>
      <span>☆</span>
      <span>☆</span>
    </div>
  );
};


const PriceRating = () => {
  let numberOfDollarSigns = 3;
  // Henter antall stjerner fra DB
  let actualRating = 3;
  let numberOfEmptyStars = numberOfDollarSigns - actualRating;
  let dollarSign = <span>$</span>;

  return (
    // Database hente data
    <div className="PriceRating" id="Rating">
      <span>$</span>
      <span>$</span>
      <span>$</span>
      <span>$</span>
    </div>
  );
};

const TempRating = ({temp}: {temp: any}) => {
  return (
    <div className="SeasonRating" id="Rating">
      <span>{temp}°C</span>
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

const TitleDiv = ({destination}: {destination: Destination}) => {
  return (
    <div className="TitleDiv">
      <h1> {destination.city} </h1>
      <h2> {destination.country} </h2>
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
        <br />
        <h3>Ting å gjøre</h3>
        <ul>
          {destination.things.map((thing: string, index: number) => (
            <li key={index}>{thing}</li>
          ))}
        </ul>
        
      
    </div>
  );
};

type ActivitiesDivProps = {
  title: string;
  activities: Array<object>;
};

// Things to do

let actualActivities: Array<object> = [
  {
    caption: "Bilde av Eiffeltårnet",
    description:
      "Du kan kjøpe en billett, og gå trappene eller ta heisen opp til toppen.",
    imgLink: attraction1,
  },

  {
    caption: "Bilde av Triumfbuen",
    description:
      "Du kan gå under den eller kjøpe en billett for å komme deg opp til toppen.",
    imgLink: attraction2,
  },

  {
    caption: "Bilde av Louvre",
    description:
      "Du må kjøpe billett for å komme inn. Blant de mange kunstverkene som er å finne her er Mona Lisa av Leonardo Da Vinci.",
    imgLink: attraction3,
  },
];

// Other city photos

let otherPhotosOfCity: Array<object> = [
  { caption: "Bilde av Champs-Élysées", description: "", imgLink: photo1 },

  {
    caption: "Bilde av Notre Dame-katedralen",
    description: "",
    imgLink: photo2,
  },

  { caption: "Bilde av Montmartre", description: "", imgLink: photo3 },

  { caption: "Bilde av Seinen", description: "", imgLink: photo4 },
];

const ActivitesDiv = (props: ActivitiesDivProps) => {
  return (
    <div className="ActivitiesDiv">
      <h3>{props.title}</h3>
      <div className="AllActivities">
        {props.activities.map((activity: any, index: number) => (
          <ActivityBox
            key={index}
            caption={activity.caption}
            description={activity.description}
            imgLink={activity.imgLink}
          />
        ))}
        {/* <ActivityBox caption={props.activities[0].caption} description={props.activities[0].description} imgLink={props.activities[0].imgLink}/>
         */}
      </div>
    </div>
  );
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

