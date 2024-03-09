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
import { link } from "fs";
import { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import paris from "../assets/Paris.jpeg";
import paris3 from "../assets/fly.png";
import CardImage from "../assets/oslo.jpeg";
import { default as Ola } from "../assets/profilbilde.jpeg";
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
        <span className="admin">Admin</span>
        <div className="crown">
          <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>
        </div>
        <div className="profilepicture">
          <img src={Ola} alt="profile"></img>
        </div>
      </div>
      {/* Navigations */}
      <div className="my-page-link">
        <Link to="myDestinations" className="link">
          Mine destinasjoner
        </Link>
        <Link to="myReviews" className="link">
          Mine anmelderlser
        </Link>
        <Link to="visitedDestinations" className="link">
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
  const mockDestinations = [
    {
      id: 1,
      name: "Paris",
      description: "Lorem ipsum",
      imageUrl: "https://example.com/paris.jpg",
      createdDate: "04.03.24",
    },
    {
      id: 2,
      name: "London",
      description: "Lorem ipsum",
      imageUrl: "https://example.com/london.jpg",
      createdDate: "05.03.24",
    },
    // add more destinations as needed
  ];
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

        {mockDestinations.map((dest) => (
          <div className="your-destinations" key={dest.id}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Card>
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                  <Card.Title>{dest.name}</Card.Title>
                  <Card.Text>{dest.description}</Card.Text>
                  <Card.Footer>
                    <p>Opprettet {dest.createdDate}</p>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}

        <AddDestinationForm />
      </div>
    </>
  );
};

interface MyReviewsProps {
  rating?: number;
  reviewTitle?: string;
  comment?: string;
  date?: string;
}

const MyReviews = ({ rating, reviewTitle, comment, date }: MyReviewsProps) => {
  const images = [
    { name: "Ola", src: Ola },
    { name: "Paris", src: paris },
    { name: "Paris3", src: paris3 },
  ];

  const myReviewsData: MyReviewsProps[] = [
    {
      rating: 4,
      reviewTitle: "Amazing Experience",
      comment:
        "Paris was amazing. The Eiffel Tower was a sight to behold. Would definitely recommend!",
      date: "2022-01-01",
    },
    {
      rating: 5,
      reviewTitle: "Unforgettable Journey",
      comment:
        "The Louvre Museum was breathtaking. The Mona Lisa is truly a masterpiece!",
      date: "2022-02-15",
    },
    {
      rating: 3,
      reviewTitle: "Good, but could be better",
      comment:
        "The food was great, but the service was a bit slow. Overall, a good experience.",
      date: "2022-03-10",
    },
  ];

  // the reviews that user has made
  const [myReviews, setMyReviews] = useState<any[]>([]);
  // pass rating down from user entry in database, and calculate average rating based on total number of reviews

  // render all reviews (map over)
  return (
    <>
      <div className="user-container">
        {/* Add content for MyReviews subpage */}

        <Searchbar
          setSearchResults={setMyReviews}
          placeholder="Søk i mine anmeldelser"
        />
        <div className="my-reviews-container">
          <h3>Dine anmeldelser</h3>
          <StarRating rating={rating || 0} />
          <div className="carousel-data">
            {myReviewsData.map((review, index) => (
              <div key={index} className="my-review">
                <div className="my-review-header">
                  <h3>{review.reviewTitle}</h3>
                  <StarRating rating={review.rating || 0} />
                </div>
                <div className="image-carousel">
                  <Carousel
                    controls
                    indicators
                    interval={4000}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Carousel.Item>
                      <img src={CardImage} alt="paris" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={CardImage} alt="paris" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={CardImage} alt="paris" />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="my-review-body">
                  <h6>Kommentar</h6>
                  <p>{review.comment}</p>
                  <div className="my-review-footer">
                    <span style={{ fontWeight: "500" }}>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const VisitedDestinations = () => {
  const [visitedDestination, setVisitedDestinations] = useState<any[]>([]);
  return (
    <>
      <div className="visited-container">
        <Searchbar
          setSearchResults={setVisitedDestinations}
          placeholder="Søk på dine besøkte destinasjoner"
        />

        <div className="visited-carousel">
          <Card>
            <Card.Img variant="top" src={CardImage}></Card.Img>
            <div style={{ padding: "2rem" }}>
              <Card.Title>Tromsø</Card.Title>
              <Card.Text>Norge</Card.Text>
            </div>
          </Card>
          <span style={{ position: "relative", top: "2rem" }}>
            <h4>20.03.23 - 05.04.23</h4>
          </span>
        </div>
      </div>
    </>
  );
};
