import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase_setup/firebase'; // Adjust the import path to your Firebase config
import { markAsVisited } from '../pages/DestinationPage'; // Adjust the import path and function import if needed
import { arrayRemove,updateDoc,arrayUnion } from 'firebase/firestore';
import DestinationPage from '../pages/DestinationPage';
import "../style/DestinationPage.css";

interface VisitedButtonProps {
    destinationId: string;
  }
  
  const VisitedButton: React.FC<VisitedButtonProps> = ({ destinationId }) => {
    const [isVisited, setIsVisited] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchVisitedStatus = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
  
        if (user && user.email) {
          const userDocRef = doc(db, "users", user.email);
          const userDocSnap = await getDoc(userDocRef);
  
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const visitedDestinations: string[] = userData.visited || [];
            setIsVisited(visitedDestinations.includes(destinationId));
          }
        }
      };
  
      fetchVisitedStatus();
    }, [destinationId]);
  
    const toggleVisited = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user && user.email) {
        const userDocRef = doc(db, "users", user.email);
  
        if (isVisited) {
          await updateDoc(userDocRef, {
            visited: arrayRemove(destinationId),
          });
        } else {
          await updateDoc(userDocRef, {
            visited: arrayUnion(destinationId),
          });
        }
  
        setIsVisited(!isVisited);
      }
    };
  
    return (
        <button
          className={`mark-as-visited ${isVisited ? 'visited' : ''}`}
          onClick={toggleVisited}
          aria-label={isVisited ? 'Besøkt' : 'Ikke besøkt'}
        >
          <FontAwesomeIcon icon={isVisited ? faCheckCircle : faCircle} size="lg" />
          {isVisited ? ' Besøkt' : ' Ikke besøkt'}
        </button>
      );
  };
  
  export default VisitedButton;