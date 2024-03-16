import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import paris from "../assets/Paris.jpeg";
import AddDestinationForm from "../components/AddDestinationForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import "../style/UserPage.css";
import App from "../App";
import { logOut, userIsAdmin } from '../components/RegisterPanel';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase_setup/firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import VisitedDestinations from "../components/VisitedDestinations";
import MyReviews from "../components/MyReviews";


const UserPage = () => {
  const navigate = useNavigate(); // used to navigate to default page
  
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [activeLink, setActiveLink] = useState("");

  //Set the active link
  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };




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
    <div className="user-page">
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
            <Link to="myDestinations" className={`link ${activeLink === "myDestinations" ? "active-link" : ""}`}
            onClick={() => handleSetActiveLink("myDestinations")}>
              Mine destinasjoner
            </Link>
            <Link to="myReviews" className={`link ${activeLink === "myReviews" ? "active-link" : ""}`}
            onClick={() => handleSetActiveLink("myReviews")}>
              Mine anmelderlser
            </Link>
            <Link to="visiteddestinations" className={`link ${activeLink === "visiteddestinations" ? "active-link" : ""}`}
            onClick={() => handleSetActiveLink("visiteddestinations")}>
              Besøkte destinasjoner
            </Link>
          </div>
        </div>
      <Routes>
        <Route path="myDestinations" element={<MyDestinations />} />
        <Route path="myReviews" element={<MyReviews />} />
        <Route path="visiteddestinations" element={<VisitedDestinations />} />
        <Route path="/" element={<App/>} />
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default UserPage;

type Destination = {
  id: string;
  mainImage: string;
  city: string;
  country: string;
  date: any;
  imageUrl: any;
};

const MyDestinations = () => {
  const [myDestinations, setMyDestinations] = useState<Destination[]>([]);

  const getMyDestinations = async (userEmail: string) => {
    const db = getFirestore();
    const destinationsRef = collection(db, "destinations");
    const q = query(destinationsRef, where("email", "==", userEmail));

    try {
      const querySnapshot = await getDocs(q);
      const destinationsPromises = querySnapshot.docs.map(async doc => {
        const dest = doc.data() as Destination;
        let imageUrl = '';
        try {
          imageUrl = await getDownloadURL(ref(getStorage(), dest.mainImage));
        } catch (error) {
          console.error("Error fetching image URL for destination:", dest.mainImage, error);
        }
        return { ...dest, id: doc.id, imageUrl };
      });
      const destinationsWithImages = await Promise.all(destinationsPromises);
      const sortedDestinations = destinationsWithImages.sort((a, b) => a.city.localeCompare(b.city));
      setMyDestinations(sortedDestinations);

    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getMyDestinations(user.email!);
      } else {
        console.log('User is not logged in.');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="user-container">
        <div style={{ marginBottom: "2rem" }}></div>
        <Searchbar
          setSearchResults={setMyDestinations}
          placeholder="Søk i mine destinasjoner"
        />
        <div className="cards">
        {myDestinations.map((dest) => (
          <div key={dest.id}>
            <Link to={`/destination/${dest.id}`} style={{ textDecoration: "none" }}>
              <Card className="card">
                <Card.Img variant="top" src={dest.imageUrl} className="card-img" />
                <Card.Body>
                  <Card.Title>{dest.city}</Card.Title>
                  <Card.Text>{dest.country}</Card.Text>
                  <Card.Footer>
                    <p>Opprettet {dest.date ? new Date(dest.date.toDate()).toLocaleDateString('nb-NO', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }) : ''}</p>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
        <AddDestinationForm />
      </div>
    </>
  );
};
