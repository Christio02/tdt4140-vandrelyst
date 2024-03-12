import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Destination } from './CardContainer';
import React from 'react';
import "../style/CardContainer.css";
  

interface DestinationCardProps {
  destination: Destination; // Antar at 'Destination' typen er definert som vist i CardContainer
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
    console.log(destination.imageURL); // Legg denne inn i DestinationCard før Card.Img-komponenten

  return (
    <Link to={`/destination/${destination.id}`} className="link" style={{ textDecoration: "none" }}>
      <Card className="card">
        <Card.Img variant="top" src={destination.imageURL} className="card-img" />
        <Card.Body>
          <Card.Title>{destination.city}</Card.Title>
          <Card.Text>{destination.country}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DestinationCard;
