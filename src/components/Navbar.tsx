
import React, { useEffect, useState } from 'react';
import "../style/Navbar.css"
import { assert } from 'console';
import logo_navn from "../assets/logo_navn.png";
import { CircleUserRound } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { auth } from '../firebase_setup/firebase';
import { logOut, userIsAdmin } from './RegisterPanel';
import { onAuthStateChanged } from 'firebase/auth';
import DestinationPopUp from "./AddDestinationForm";
  
  
//nav bar full screen
const Navbar = () => {

//  Må sette STATE for om du er admin/logget inn og listene for om man er logget inn
// eller admin. 
// Usikker på om userIsAdmin ble helt riktig brukt, men freestyla og det funka
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserIsAdmin, setcurrentUserIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);



    
    useEffect(() => {
        auth.onAuthStateChanged( user => {
            console.log(user?.email)

            userIsAdmin().then(isAdmin =>{
                setcurrentUserIsAdmin(isAdmin);
                setIsLoading(false);
            });

        })
    },[])



    // logOut();

    return (
    <div id="topnav">
        <Link id = "logo" to="/"> <img src = {logo_navn} alt="Logo i navbar" ></img> </Link>
        {isLoading ? (
                <p>Laster...</p>
            ) : auth?.currentUser ? (
                currentUserIsAdmin ? (
                    <a href='/mypage' className="LogInMyPage"><CircleUserRound size={25} id="icon"/> Min side (A)</a>

                ) : (
                    <a href='/mypage' className="LogInMyPage"><CircleUserRound size={25} id="icon"/> Min side (B)</a>
                )
            ) : (
                <a href='/logginn' className="LogInMyPage"  ><CircleUserRound size={25} id="icon"/>Log inn</a> 
            )}


        {/* {auth?.currentUser?.email 
            ? // HVIS LOGGET INN:
                // Sjekk om loader(håndtere at det er asynkront) 
                // , om admin eller om vanlig bruker 
            
            (isLoading ? (<p>VET IKKE</p>)
            : 
            isAdmin ? (<p>ADMIN</p>)
                : 
                <p>VANLIG BRUKER</p>
            )
            :
            <a href='/logginn'> <button type="button" id="LogInIcon">LOGG INN HER</button></a> 
        } */}
        {
        // // Kun hvis logget inn
        // (isLoading ? (<p>VET IKKE</p>)
        // : 
        // isAdmin ? (<p>ADMIN</p>)
        //     : 
        //     <p>VANLIG BRUKER</p>
        // )
        // ! Må linke til minside på en annen måte siden dette forcer refresh
            // <DropdownButton
            // title={<CircleUserRound size={24} />}
            // id="dropdown-menu"
            // variant="string" >

            //     <Dropdown.Item as={Link} to="/minside">Min side</Dropdown.Item>
            //     <Dropdown.Item> Logg ut </Dropdown.Item>

                
            // </DropdownButton>

        // auth?.currentUser?.email 
        // ? 
            // <p>JA</p>
            // <DropdownButton
            //     title={<CircleUserRound size={24} />}
            //     id="dropdown-menu"
            //     variant="string" >

            //! Må linke til minside på en annen måte siden dette forcer refresh
                // <Dropdown.Item href="/minside">Min side</Dropdown.Item>
            //     <Dropdown.Item> Logg ut </Dropdown.Item>

                
            // </DropdownButton>
        // <a href='/logginn'> <button type="button" id="LogInIcon"><CircleUserRound size={24} /></button></a> 
        // <a href='/minside'> <button type="button" id="LogInIcon">{auth?.currentUser?.email}</button> </a>
                // : 
                // <a href='/logginn'> <button type="button" id="LogInIcon"><CircleUserRound size={24} /></button></a> 
        }

        <a>
            <div className="destinationPopupContainer">
                <DestinationPopUp />
            </div>
        </a>
        <a href="/omoss">Om oss</a> 

        </div>

        
    
    );
}
export default Navbar;

