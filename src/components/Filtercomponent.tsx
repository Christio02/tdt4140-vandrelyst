import React, {useState} from "react";
import "../style/filtercomponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas ,faUmbrellaBeach, faCity, faPersonHiking, faPersonSkiing, faEllipsis, faStar, faTag, faThermometerHalf, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


interface FilterComponentProps {
    onFilterChange: (filter: string) => void; 
    onSortChange: (criterion: string) => void; 
    activeSort: string | null;  
    sortDirection: 'asc' | 'desc';
  }

function FilterComponent({ onFilterChange, onSortChange, activeSort, sortDirection }: FilterComponentProps) {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterSelection = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filterContainer">
      <h4 style={{textAlign: 'center'}}>Utforsk ditt favorittsted</h4>
      <div className="buttons">
        <div className="button-container" onClick={() => handleFilterSelection('Alle')}>
          <button className={selectedFilter === 'Alle' ? 'active' : ''}><FontAwesomeIcon icon={faEarthAmericas} className="icon" /></button>
          <p>Alle</p>
        </div>
        <div className="button-container" onClick={() => handleFilterSelection('Strand')}>
          <button className={selectedFilter === 'Strand' ? 'active' : ''}><FontAwesomeIcon icon={faUmbrellaBeach} className="icon" /></button>
          <p>Strand</p>
        </div>
            <div className="button-container" onClick={() => handleFilterSelection('Natur')}>
          <button className={selectedFilter === 'Natur' ? 'active' : ''}><FontAwesomeIcon icon={faPersonHiking} className="icon" /></button>
          <p>Natur</p>
        </div>
            <div className="button-container" onClick={() => handleFilterSelection('Storby')}>
          <button className={selectedFilter === 'Storby' ? 'active' : ''}><FontAwesomeIcon icon={faCity} className="icon" /></button>
          <p>Storby</p>
        </div>
            <div className="button-container" onClick={() => handleFilterSelection('Vinter')}>
          <button className={selectedFilter === 'Vinter' ? 'active' : ''}><FontAwesomeIcon icon={faPersonSkiing} className="icon" /></button>
          <p>Vinter</p>
        </div>
            <div className="button-container" onClick={() => setShowSortOptions(!showSortOptions)}>
  <button className="more-options-button"><FontAwesomeIcon icon={faEllipsis} className="icon"/></button>
  <p>Sortering</p>
</div>
{showSortOptions && (
  <>
    <div className="button-container" onClick={() => onSortChange('Temperature')}>
      <button className={`${activeSort === 'temperature' ? 'active' : ''} sorting-button`}><FontAwesomeIcon icon={faThermometerHalf}></FontAwesomeIcon></button>
      {activeSort === 'temperature' && (
        <FontAwesomeIcon icon={sortDirection === 'asc' ? faArrowUp : faArrowDown} className="direction-icon" />
      )}
      <p>Temperatur</p>
    </div>

    <div className="button-container" onClick={() => onSortChange('Price')}>
      <button className={`${activeSort === 'price' ? 'active' : ''} sorting-button`}><FontAwesomeIcon icon={faTag}></FontAwesomeIcon></button>
      {activeSort === 'price' && (
        <FontAwesomeIcon icon={sortDirection === 'asc' ? faArrowUp : faArrowDown} className="direction-icon" />
      )}
      <p>Pris</p>
    </div>
    <div className="button-container" onClick={() => onSortChange('Rating')}>
      <button className={`${activeSort === 'rating' ? 'active' : ''} sorting-button`}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
      {activeSort === 'rating' && (
        <FontAwesomeIcon icon={sortDirection === 'asc' ? faArrowUp : faArrowDown} className="direction-icon" />
      )}
      <p>Rating</p>
    </div>
  </>
)}


            </div>
        </div>
    )

}

export default FilterComponent;