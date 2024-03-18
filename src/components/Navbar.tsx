import React, { useEffect, useState } from 'react';
import "../style/Navbar.css"
import logo_navn from "../assets/logo_navn.png";
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase_setup/firebase';
import { userIsAdmin } from './RegisterPanel';
import { onAuthStateChanged, User } from 'firebase/auth';
import DestinationPopUp from "./AddDestinationForm";
  
const Navbar = () => {

    //  Må sette STATE for om du er admin/logget inn og listene for om man er logget inn
    // eller admin. 
    // Usikker på om userIsAdmin ble helt riktig brukt, men freestyla og det funka
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserIsAdmin, setCurrentUserIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                userIsAdmin().then(isAdmin => {
                    setCurrentUserIsAdmin(isAdmin);
                    setIsLoading(false);
                });
            } else {
                setCurrentUser(null);
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
    <div id="topnav">
        <Link id = "logo" to="/"> <img src = {logo_navn} alt="Logo i navbar" ></img> </Link>
        {isLoading ? (
                <p>Laster...</p>
            ) : auth?.currentUser ? (
                currentUserIsAdmin ? (
                    <a href='/mypage' className="LogInMyPage"><CircleUserRound size={25} id="icon"/> Min side</a>

                ) : (
                    <a href='/mypage' className="LogInMyPage"><CircleUserRound size={25} id="icon"/> Min side</a>
                )
            ) : (
                <a href='/logginn' className="LogInMyPage"  ><CircleUserRound size={25} id="icon"/>Logg inn</a> 
            )}

        {currentUser &&
            <a>
                <div className="destinationPopupContainer">
                    <DestinationPopUp />
                </div>
            </a>
        }

        </div>
    );
}
export default Navbar;

