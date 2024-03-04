import React from "react";
import "../style/filtercomponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas ,faUmbrellaBeach, faCity, faPersonHiking, faPersonSkiing, faEllipsis } from '@fortawesome/free-solid-svg-icons';


interface FilterComponentProps {
    onFilterChange: (filter: string) => void; 
  }

function FilterComponent({ onFilterChange }: FilterComponentProps) {

    
    return (
        <div className="filterContainer">
            <h4>Utforsk ditt favorittsted</h4>
            <div className = "buttons">
            <div className="button-container" onClick={() => onFilterChange('Alle')}>
                <button><FontAwesomeIcon icon={faEarthAmericas} /></button>
                <p>Alle</p>
            </div>
            <div className="button-container" onClick={() => onFilterChange('Strand')}>
                <button><FontAwesomeIcon icon={faUmbrellaBeach} /></button>
                <p>Strand</p>
            </div>
            <div className="button-container" onClick={() => onFilterChange('Natur')}>
                <button><FontAwesomeIcon icon={faPersonHiking} /></button>
                <p>Natur</p>
            </div>
            <div className="button-container" onClick={() => onFilterChange('Storby')}>
                <button><FontAwesomeIcon icon={faCity} /></button>
                <p>Storby</p>
            </div>
            <div className="button-container" onClick={() => onFilterChange('Vinter')}>
                <button><FontAwesomeIcon icon={faPersonSkiing} /></button>
                <p>Vinter</p>
            </div>
            <div className="button-container">
                <button><FontAwesomeIcon icon={faEllipsis} className="icon"/></button>
                <p>Mer</p>
            </div>
            </div>
        </div>
    )

}

export default FilterComponent;