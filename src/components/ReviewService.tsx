import { db, storage } from "../firebase_setup/firebase";
import { Review } from './Interfaces';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const fetchUserReviews = async (userEmail: string): Promise<Review[]> => {
  const reviewsRef = collection(db, 'reviews');
  const q = query(reviewsRef, where('user', '==', userEmail));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Review);
};
