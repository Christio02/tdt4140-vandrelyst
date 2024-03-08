
import React, { useState } from 'react';
import "../style/Navbar.css"
import { assert } from 'console';
import logo_navn from "../assets/logo_navn.png";
import { CircleUserRound } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { auth } from '../firebase_setup/firebase';
import { logOut, userIsAdmin } from './RegisterPanel';
  
  
//nav bar full screen
const Navbar = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    userIsAdmin().then(isAdmin =>{
        if (isAdmin == undefined) {
            return;
        }
        setIsAdmin(isAdmin);
        setIsLoading(false);
    });

    // logOut();
    return (
    <div id="topnav">
        <Link id = "logo" to="/"> <img src = {logo_navn} alt="Logo i navbar" ></img> </Link>
        
        {auth?.currentUser?.email 
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
        }
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

        <Link to="/omoss">Om oss</Link>
        
        </div>
    
    );
}
export default Navbar;

