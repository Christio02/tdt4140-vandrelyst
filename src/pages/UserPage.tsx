import {
  faCrown,
  faEarthAmericas,
  faGlobe,
  faGlobeAfrica,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faMailBulk,
  faPaperPlane,
  faPeopleArrowsLeftRight,
  faPhone,
  faPlane,
  faPlaneCircleCheck,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import paris from "../assets/Paris.jpeg";
import CardImage from "../assets/globe.png";
import Ola from "../assets/profilbilde.jpeg";
import AddDestinationForm from "../components/AddDestinationForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import "../style/UserPage.css";
import { StarRating } from "./DestinationPage";

interface UserProps {
  name: string;
  userName: string;
}

const UserPage = () => {
  const navigate = useNavigate(); // used to navigate to default page

  useEffect(() => {
    navigate("myDestinations");
  }, []); // empty dependency array, only navigate to myDestinations first time

  return (
    <>
      <Navbar />

      <div>
        {/* Profile Information */}
        <div className="image-container">
          <img src={paris} alt="destination"></img>
        </div>
        <h4 className="name">Ola Nordmann</h4>
        <div className="admin">Admin</div>
        <div className="crown">
          <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>
        </div>
        <div className="profilepicture">
          <img src={Ola} alt="profile"></img>
        </div>
      </div>
      {/* Navigations */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "6rem",
          marginLeft: "1rem",
        }}
      >
        <Link to="myDestinations" style={{ textDecoration: "none" }}>
          Mine destinasjoner
        </Link>
        <Link to="myReviews" style={{ textDecoration: "none" }}>
          Mine anmelderlser
        </Link>
        <Link to="visitedDestinations" style={{ textDecoration: "none" }}>
          Besøkte destinasjoner
        </Link>
      </div>
      <Routes>
        <Route path="myDestinations" element={<MyDestinations />} />
        <Route path="myReviews" element={<MyReviews />} />
        <Route path="visitedDestinations" element={<VisitedDestinations />} />
      </Routes>
      <Footer />
    </>
  );
};

export default UserPage;

const MyDestinations = () => {
  // the destinations added

  const [myDestinations, setMydestinations] = useState<any[]>([]);

  const getMydestinations = (name: UserProps) => {
    // communicate with database
  };

  return (
    <>
      <div className="user-container">
        <div style={{ marginBottom: "5rem" }}></div>
        <Searchbar
          setSearchResults={setMydestinations}
          placeholder="Søk i mine destinasjoner"
        />
        <div className="your-destinations">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title>Paris</Card.Title>
                <Card.Text>Lorem ipsum</Card.Text>
                <Card.Footer>
                  <p>Opprettet 04.03.24</p>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <AddDestinationForm />
        </div>
      </div>
    </>
  );
};

interface MyReviewsProps {
  rating?: number;
}

const MyReviews = ({ rating }: MyReviewsProps) => {
  // the reviews that user has made
  const [myReviews, setMyReviews] = useState<any[]>([]);
  // pass rating down from user entry in database, and calculate average rating based on total number of reviews
  return (
    <>
      <div className="user-container">
        {/* Add content for MyReviews subpage */}

        <Searchbar
          setSearchResults={setMyReviews}
          placeholder="Søk i mine anmeldelser"
        />
        <div className="my-reviews-container">
          <div className="my-reviews-header">
            <h3>Dine anmeldelser</h3>
            <StarRating rating={rating || 0} />
          </div>
        </div>
      </div>
    </>
  );
};

const VisitedDestinations = () => {
  // all the visisted destinations
  return (
    <>
      <div className="user-container">
        {/* Add content for VisitedDestinations subpage */}
      </div>
    </>
  );
};
