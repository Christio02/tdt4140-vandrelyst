// import { useState } from "react";
import React from "react";
import "../style/DestinationPage.css";
import attraction2 from "./arcDeTriumph.jpg";
import photo1 from "./champsElysees.jpg";
import attraction1 from "./eiffelAttraction.jpg";
import attraction3 from "./louvre.jpg";
import photo3 from "./montmartre.jpg";
import photo2 from "./notreDame.jpg";
import MainPhotoImg from "./paris.jpg"; // Tell webpack this JS file uses this image
import photo4 from "./seineRiver.jpg";

import Slider from "../components/Slider";

const DestinationPage = () => {
  return (
    // <div><Navbar></Navbar></div>
    <div>
      <MainPhoto />
      <TitleDiv />
      <AllRatings />
      <div className="AllContentDivs">
        <DescriptionDiv />
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

const AllRatings = () => {
  return (
    <div className="AllRatings">
      <StarRating />
      <PriceRating />
      <SeasonRating />
      <TempRating />
    </div>
  );
};

const StarRating = () => {
  let numberOfStars = 5;
  // Henter antall stjerner fra DB
  let actualRating = 3;
  let numberOfEmptyStars = numberOfStars - actualRating;
  let emptyStar = <span>☆</span>;
  let fullStar = <span>★</span>;

  return (
    <div className="StarRating" id="Rating">
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

const SeasonRating = () => {
  // hente fra DB
  let seasonRating = "Sommer";

  return (
    // Database hente data
    <div className="SeasonRating" id="Rating">
      <span>{seasonRating}</span>
    </div>
  );
};

const TempRating = () => {
  // hente fra DB
  let tempRating = "21,0";

  return (
    // Database hente data
    <div className="SeasonRating" id="Rating">
      <span>{tempRating}</span>
    </div>
  );
};

const MainPhoto = () => {
  return (
    <div className="PhotoOfCity">
      <img src={MainPhotoImg} alt="Photo of city" />;
    </div>
  );
};

const TitleDiv = (props: Object) => {
  return (
    <div className="TitleDiv">
      <h1> Paris </h1>
      <h2> France </h2>
      {/* <h1> Paris {props.city}</h1> */}
      {/* <h3>{props.country}</h3> */}
    </div>
  );
};

const DescriptionDiv = () => {
  return (
    <div className="DescriptionDiv">
      <h3>Beskrivelse</h3>
      <p className="DescriptionText">
        Paris, kjent som "Lysets by" (La Ville Lumière), er en av verdens mest
        ikoniske og romantiske destinasjoner. Med sin blendende arkitektur,
        kulturrike historie, førsteklasses shopping, utsøkt mat og pulserende
        kunstmiljø tiltrekker Paris millioner av besøkende hvert år. Utforsk
        ikoniske landemerker som Eiffeltårnet, Louvre-museet og Triumfbuen, nyt
        en avslappende spasertur langs Seinen eller utforsk sjarmerende nabolag
        som Montmartre og Le Marais. Paris tilbyr noe for enhver smak og er en
        by som garanterer uforglemmelige opplevelser for alle som besøker.
      </p>
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

const ActivityBox = (props:Object) => {
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

// type ActivitiesDivProps = {
//     title: string;
//     captions: object;
//     descriptions: object;
//     imgLinks: object;

// }

// const ActivitesDiv = () => {
//     return (
//         <div className="ActivitiesDiv">
//             <h3>Ting å gjøre</h3>
//             <div className="AllActivities">
//             <ActivityBox text="Photo of the Eiffel tower" imgLink={attraction1}/>
//             <ActivityBox text="Photo of Champs-Elysees" imgLink={attraction2}/>
//             <ActivityBox text="Photo of the Louvre" imgLink={attraction3}/>
//             {/* <Slider></Slider> */}
//             </div>
//         </div>
//     );
// }

// type ActivityBoxProps = {
//     text: string;
//     imgLink: string;
//   };

// const ActivityBox = (props: ActivityBoxProps) => {
//     return (
//         <div className="ActivityBox">
//             <img src={props.imgLink} alt={props.text} id="imgAttraction"/>
//             <p>{props.text}</p>
//         </div>
//     );
// }
