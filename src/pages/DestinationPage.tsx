import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faDollarSign,
  faStar as faSolidStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../components/Navbar";
import "../style/DestinationPage.css";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteDestinationForm from "../components/DeleteDestinationForm";
import { db } from "../firebase_setup/firebase";

import Footer from "../components/Footer";
import ReviewsSection from "../components/ReviewsSection";
import UpdateDestinationForm from "../components/UpdateDestinationForm";
import "../style/CardContainer.css";

export interface Destination {
  mainImage: string;
  email: string;
  city: string;
  country: string;
  rating: number;
  price: number;
  temperature: number;
  description: string;
  thingsToDo: Array<{
    caption: string;
    description: string;
    imgLink: string;
  }>;
  extraImages: Array<{
    caption: string;
    description: string;
    imgLink: string;
  }>;
  type?: string;
}

const DestinationPage = () => {
  const { id } = useParams(); // route parameter has the same name as the parameter in the route path in App.tsx
  const [mainPhotoUrl, setMainPhotoUrl] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const fetchDestinationData = () => {
      if (!id) {
        return;
      }
      const db = getFirestore();
      const docRef = doc(db, "destinations", id);
      //I used copilot for unsubscribe function, prompt:  In here, can you check when new rating is applied? Because as of right now if a user submits a new rating, then you have to reload the page 2 times before changes are apllied to starrating
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const destinationData = docSnap.data() as Destination;
          setDestination(destinationData);
          console.log(destinationData.rating);
        } else {
          console.log("No such document!");
        }
      });

      return () => unsubscribe();
    };

    if (id) {
      fetchDestinationData();
    }
  }, [id]);

  useEffect(() => {
    const fetchMainImage = async () => {
      if (destination?.mainImage) {
        try {
          const url = await getDownloadURL(
            ref(getStorage(), destination.mainImage)
          );
          setMainPhotoUrl(url);
        } catch (error) {
          console.error("Error fetching image from Firebase: ", error);
        }
      }
    };

    fetchMainImage();
  }, [destination]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  if (!destination) {
    // If destination data hasn't been fetched yet, you return a loading state
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <MainPhoto url={mainPhotoUrl} />
      <TitleDiv destination={destination} />
      <AllRatings destination={destination} />
      <div className="deleteButtonContainer">
        <DeleteDestinationForm
          id={destination.city}
          city={destination.city}
          email={destination.email}
        />
        <UpdateDestinationForm destination={destination} id={id} />
      </div>

      <div className="AllContentDivs">
        <DescriptionDiv destination={destination} />
        <ActivitesDiv
          title="Ting å gjøre"
          activities={destination.thingsToDo}
        />
        <ActivitesDiv title="Bilder" activities={destination.extraImages} />
      </div>

      <div className="review-container">
        <h2 className="reviews-title">Omtaler</h2>
        <div className="review-section">
          <ReviewsSection sendDestination={destination.city} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const AllRatings = ({ destination }: { destination: Destination }) => {
  return (
    <div className="AllRatings">
      <div className="centerContent">
        <StarRating rating={destination.rating} />
        <PriceRating price={destination.price} />
        <TempRating temp={destination.temperature} />
      </div>
    </div>
  );
};

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  console.log(rating);
  const totalStars = 5;
  const fullStars = Math.round(rating);
  const emptyStars = totalStars - fullStars;

  return (
    <div className="StarRating" id="Rating">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon icon={faSolidStar} key={`Solid-${index}`} />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon icon={faRegularStar} key={`Regular-${index}`} />
        ))}
    </div>
  );
};
interface PriceRatingProps {
  price: number;
}

const PriceRating: React.FC<PriceRatingProps> = ({ price }) => {
  const totalDollars = 5;
  const fullDollars = Math.round(price);
  const emptyDollars = totalDollars - price;
  return (
    <div className="PriceRating" id="Rating">
      {Array(fullDollars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            icon={faDollarSign}
            className="faDollarSign"
            key={`Dollar-${index}`}
          />
        ))}
      {Array(emptyDollars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            icon={faDollarSign}
            className="faDollarSign"
            key={`Dollar-${index}`}
            color="grey"
          />
        ))}
      {/*It might seem overly complex to write all of this code to do something as simple as creating an array, but this seems to be standard.
      You start out by filling the array with zeros, and then you map each element from a 0 to an icon of type 'faDollarSign'
      We then give a className attribute to each of these icons, enabling us to style them with CSS.*/}
    </div>
  );
};

const TempRating = ({ temp }: { temp: any }) => {
  return (
    <div className="TempRating" id="Rating">
      <span>{temp}°C </span>
    </div>
  );
};

const MainPhoto = ({ url }: { url: any }) => {
  // console.log(url);
  return (
    <div className="PhotoOfCity">
      <img src={url} alt="Photo of city" />;
    </div>
  );
};

const DescriptionDiv = ({ destination }: { destination: Destination }) => {
  return (
    <div className="DescriptionDiv">
      <h3>Beskrivelse</h3>
      <p className="DescriptionText">{destination.description}</p>
    </div>
  );
};

const TitleDiv = ({ destination }: { destination: Destination }) => {
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

const ActivityBox = (props: BoxProps) => {
  return (
    <div className="ActivityBox">
      <img src={props.imgLink} alt={props.caption} id="imgAttraction" />
      <h4>{props.caption}</h4>
      <p id="ImageDescription">{props.description}</p>
    </div>
  );
};

const ActivitesDiv = (props: ActivitiesDivProps) => {
  return (
    <div className="ActivitiesDiv">
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
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

export default DestinationPage;
