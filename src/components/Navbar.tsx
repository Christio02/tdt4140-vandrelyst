
import React from 'react';
import "../style/Navbar.css"
import { assert } from 'console';
import logo_navn from "../assets/logo_navn.png";
import { CircleUserRound } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
  
  
//nav bar full screen
const Navbar = () => {
    return (
    <div id="topnav">
        <Link id = "logo" to="/"> <img src = {logo_navn} alt="Logo i navbar" ></img> </Link>
        
        <a> <DropdownButton
                title={<CircleUserRound size={24} />}
                id="dropdown-menu"
                variant="string" >

                <Dropdown.Item href="#">Logg inn</Dropdown.Item>
                <Dropdown.Item href="#">Logg ut</Dropdown.Item>

                
            </DropdownButton> </a>
    
        <Link to="/omoss">Om oss</Link>
        
        </div>
    
    );
}
export default Navbar;

