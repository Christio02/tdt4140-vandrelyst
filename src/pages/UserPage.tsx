import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import paris from "../assets/Paris.jpeg"
import Ola from "../assets/profilbilde.jpeg";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import { Card } from "react-bootstrap";
import CardImage from "../assets/globe.png"
import "../style/UserPage.css"
import { BrowserRouter as Router, Link,  Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faPhone, faMailBulk, faGlobe, faGlobeAmericas, faPlaneDeparture, faPlaneCircleCheck, faPaperPlane, faPlane, faGlobeAfrica, faGlobeAsia, faGlobeEurope, faPeopleArrowsLeftRight, faCrown} from '@fortawesome/free-solid-svg-icons';
import AddDestinationForm from "../components/AddDestinationForm";

interface UserProps {
    name: string;
    userName: string;
}

const UserPage = () => {
    return (
        <>
        <Router>
        <Navbar/>
        <div>
          <Link to="/myDestinations">Mine destinasjoner</Link>
          <Link to="/myReviews">Mine anmelderlser</Link>
          <Link to="/visitedDestinations">Besøkte destinasjoner</Link>
        </div>
        <Routes>
          <Route path="/myDestinations" element={<MyDestinations />} />
          <Route path="/myReviews" element={<MyReviews />} />
          <Route path="/visitedDestinations" element={<VisitedDestinations />} />
        </Routes>
        <Footer/>
      </Router>
      </>
    )
    
}

// export UserPage;




const MyDestinations = () => {
    // the destinations added 
    
    const [myDestinations, setMydestinations] = useState<any[]>([]);

    const getMydestinations = (name: UserProps) => {
        // communicate with database
    }

    return (
        <>
        <Navbar/>
        <div className="user-container">
            <div className="image-container">
                <img src={paris}></img>
            </div>
            <h4 className="name">
                Ola Nordmann
            </h4>
            <div className="admin">
                Admin
            </div>
            <div className="crown">
                <FontAwesomeIcon icon = {faCrown}></FontAwesomeIcon>
            </div>
            <div className="profilepicture">
                <img src={Ola}></img>
            </div>

        <div style={{marginBottom: "5rem"}}></div>
        <Searchbar setSearchResults={setMydestinations} placeholder="Søk i mine destinasjoner" title=""/>

        <div className="your-destinations">
        <Link to="/" style = {{textDecoration: "none"}}>
        <Card>
            <Card.Img variant="top" src={CardImage}/>
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
        <div style={{marginBottom: "2rem"}}>
        <AddDestinationForm/>
        </div>

        </div>
        <Footer/>
        </>
    )

}

export default MyDestinations;

const MyReviews = () => {
    // the reviews that user has made
    return (
        <>
       
       
        </>

    )
}

const VisitedDestinations = () => {
    // all the visisted destinations
    return (
        <></>
    )
}
