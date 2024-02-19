
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
                variant="string"

                >
                <Dropdown.Item eventKey="1">Profil</Dropdown.Item>
                <Dropdown.Item eventKey="2">Logg inn</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3">Logg ut</Dropdown.Item>
            </DropdownButton> </a>
    
        <a href="#contact">Om oss</a>
        <a href="#about">Reisemål</a>
        
        </div>
    
    );
}
export default Navbar;

