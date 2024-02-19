
import React from 'react';
import "../style/Navbar.css"
import { assert } from 'console';
import logo_navn from "../assets/logo_navn.png";
import { CircleUserRound } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
  
  
//nav bar full screen
const Navbar = () => {
    return (
    <div id="topnav">
        <a id = "logo" href="#home"> <img src = {logo_navn} alt="Logo i navbar" ></img> </a>
        
        <a> <DropdownButton
                title={<CircleUserRound size={24} />}
                id="dropdown-menu"
                variant="string" >

                <Dropdown.Item href="#">Logg inn</Dropdown.Item>
                <Dropdown.Item href="#">Logg ut</Dropdown.Item>

                
            </DropdownButton> </a>
    
        <a href="#about">Om oss</a>
        
        </div>
    
    );
}
export default Navbar;

