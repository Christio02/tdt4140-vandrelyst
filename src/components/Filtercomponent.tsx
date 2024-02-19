import React from "react";
import "../style/filtercomponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas ,faUmbrellaBeach, faCity, faPersonHiking, faPersonSkiing, faEllipsis } from '@fortawesome/free-solid-svg-icons';



function Filtercomponent () {

    
    return (
        <div className="filterContaier">
            <h2>Utforsk ditt favorittsted</h2>
            <div className = "buttons">
            <div className="button-container">
                <button><FontAwesomeIcon icon={faEarthAmericas} /></button>
                <p>Alle</p>
            </div>
            <div className="button-container">
                <button><FontAwesomeIcon icon={faUmbrellaBeach} /></button>
                <p>Strand</p>
            </div>
            <div className="button-container">
                <button><FontAwesomeIcon icon={faPersonHiking} /></button>
                <p>Natur</p>
            </div>
            <div className="button-container">
                <button><FontAwesomeIcon icon={faCity} /></button>
                <p>Storby</p>
            </div>
            <div className="button-container">
                <button><FontAwesomeIcon icon={faPersonSkiing} /></button>
                <p>Vinter</p>
            </div>
            <div className="button-container">
                <button><FontAwesomeIcon icon={faEllipsis} /></button>
                <p>Mer</p>
            </div>
            </div>
        </div>
    )

}

export default Filtercomponent;