import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { fetchRecommendations } from './RecommendationService';
import { Destination } from './CardContainer';
import DestinationCard from './DestinationCard';

interface RecommendedDestinationsProps {
    userEmail: string | null;
  }

  const RecommendedDestinations: React.FC<RecommendedDestinationsProps> = ({ userEmail }) => {
  const [destinations, setDestinations] = useState<Destination[]>([]);


  useEffect(() => {
    if (userEmail) {
      fetchRecommendations(userEmail).then(destinations => {
        setDestinations(destinations);
      });
    }
  }, [userEmail]);

  return (
    <div className="container">
      <h3 className="title" >Anbefalte destinasjoner </h3>
      <div className="cards">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedDestinations;

