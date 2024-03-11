import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
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
import App from "../App";
import { logOut, userIsAdmin } from '../components/RegisterPanel';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase_setup/firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import CardContainer from "../components/CardContainer";



interface UserProps {
  userName: string;
  email: string;
  imageUrl: string;
}

const UserPage = () => {
  const navigate = useNavigate(); // used to navigate to default page
  
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);



  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.email) {
        try {
          const userDocument = doc(db as any, "users", user.email);
          const userSnapshot = await getDoc(userDocument);

          if (userSnapshot.exists()) {
            //Getting the name
            const userData = userSnapshot.data();
            setUserName(userData.userFullName);
            setUserEmail(userData.userEmail);
            
            const storage = getStorage(); //Getting the profile pic
            const imageRef = ref(storage, `profilePic/${user.email}`);
            const imageUrl = await getDownloadURL(imageRef);
            setProfilePicture(imageUrl);  

            const adminStatus = await userIsAdmin(); //Fetch user admin status
            setIsAdmin(adminStatus);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // Handle user not logged in
      }
    });

    navigate('myDestinations');

    return () => unsubscribe();
  }, []); // empty dependency array, only navigate to myDestinations first time

  return (
    <>
      <Navbar />

      
        {/* Profile Information */}
        <div className="image-container">
          <img src={paris} alt="destination"></img>
        </div>
        <div id="topContainer">
        <button id="logUtButton"><Link to="/" id="homeLink" onClick={logOut}>Logg ut</Link></button>
          <div id="nameAndAdmin">
        <h4 className="name">{userName}</h4>
        {isAdmin && (
        <span className="admin"><FontAwesomeIcon icon={faCrown} className="crown" /> Admin</span>
        )}
        </div>
        <div className="profilepicture">
          <img src={profilePicture?.toString()} alt="profile"></img>
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
      </div>
      <Routes>
        <Route path="myDestinations" element={<MyDestinations />} />
        <Route path="myReviews" element={<MyReviews />} />
        <Route path="visitedDestinations" element={<VisitedDestinations />} />
        <Route path="/" element={<App/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default UserPage;

const MyDestinations = () => {
  const [myDestinations, setMyDestinations] = useState<any[]>([]);

  // Function to fetch destinations
  const getMyDestinations = async () => {
    const userEmail = auth.currentUser?.email;
    if (!userEmail) {
      console.log('User email not found, possibly because auth state is not initialized yet.');
      return;
    }
    try {
      const db = getFirestore();
      const destinationsRef = collection(db, "destinations");
      const q = query(destinationsRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      const destinations = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        imageUrl: '', // Initial placeholder for the image URL
      }));
      setMyDestinations(destinations);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  // useEffect to fetch destinations when the component mounts
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        getMyDestinations();
      } else {
        console.log('User is not logged in.');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Separate useEffect to fetch images once destinations are set
  useEffect(() => {
    const fetchImages = async () => {
      const updatedDestinations = await Promise.all(
        myDestinations.map(async (dest) => {
          try {
            const imageUrl = await getDownloadURL(ref(getStorage(), dest.mainImage));
            return { ...dest, imageUrl };
          } catch (error) {
            console.error("Error fetching image URL:", error);
            return { ...dest, imageUrl: '' }; // Handle the case where the image URL couldn't be fetched
          }
        })
      );
      setMyDestinations(updatedDestinations);
    };

    if (myDestinations.length > 0) {
      fetchImages();
    }
  }, [myDestinations]); // This useEffect depends on `myDestinations`




  return (
    <>
      <div className="user-container">
        <div style={{ marginBottom: "2rem" }}></div>
        <Searchbar
          setSearchResults={setMyDestinations}
          placeholder="Søk i mine destinasjoner"
        />

        {myDestinations.map((dest) => (
          <div className="your-destinations" key={dest.id}>
            <Link to={`/destination/${dest.id}`} style={{ textDecoration: "none" }}>
              <Card>
                <Card.Img variant="top" src={dest.imageUrl} />
                <Card.Body>
                  <Card.Title>{dest.city}</Card.Title>
                  <Card.Text>{dest.description}</Card.Text>
                  <Card.Footer>
                    <p>Opprettet {dest.date ? new Date(dest.date.toDate()).toLocaleDateString('nb-NO', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }) : ''}</p>
                    {/* <p>Opprettet {dest.date ? new Date(dest.date).getDate() : ''}</p> */}
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
