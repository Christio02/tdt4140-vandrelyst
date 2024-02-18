
import React from 'react';
import "../style/Navbar.css"
import { assert } from 'console';
import logo_navn from '../assets/logo_navn.png';
import { CircleUserRound } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
  
  
//nav bar full screen
const Navbar = () => {
    return (
    <div id="topnav">
        <a id = "logo" href="#home"> <img src = {logo_navn} alt="Logo i navbar" ></img> </a>
        
        <a><Dropdown style = {{color: "#C8D8E4"}}>
            <Dropdown.Toggle variant="success" id="dropdown">
            <CircleUserRound />
            </Dropdown.Toggle>
            <Dropdown.Menu style = {{color: "#C8D8E4"}} >
                <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Profil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logg Av</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> </a>
    
        <a href="#contact">Om oss</a>
        <a href="#about">Reisemål</a>
        
        </div>
    
    );
}
export default Navbar;

