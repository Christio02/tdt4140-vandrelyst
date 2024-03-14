import { db } from "../firebase_setup/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { fetchUserReviews } from './ReviewService';
import { Destination } from './Interfaces';

export const fetchRecommendations = async (userEmail: string): Promise<Destination[]> => {
    console.log("Henter anbefalinger for e-post:", userEmail);
    const userReviews = await fetchUserReviews(userEmail);

    // Fetch all destinations once to avoid repeated fetching
    const destinationsRef = collection(db, 'destinations');
    const allDestinationsSnap = await getDocs(destinationsRef);
    let allDestinations = allDestinationsSnap.docs.map(doc => {
        const data = doc.data();
        return {
            ...data,
            id: doc.id,
            imageURL: data.mainImage // Assuming 'mainImage' field holds the image URL
        } as Destination;
    });

    const highRatedReviews = userReviews.filter(review => review.rating >= 3);

    if (highRatedReviews.length > 0) {
        console.log("Funnet mer enn 0 brukerreviews for bruker");

        let typeToRatingMap: { [key: string]: number } = {};

        for (const review of highRatedReviews) {
            const destination = allDestinations.find(dest => dest.id === review.id);
            if (destination?.type) {
                typeToRatingMap[destination.type] = Math.max(typeToRatingMap[destination.type] || 0, review.rating);
            }
        }

        let recommendedDestinations: Destination[] = [];
        let sortedTypes = Object.entries(typeToRatingMap).sort((a, b) => b[1] - a[1]);

        for (const [type, _] of sortedTypes) {
            if (recommendedDestinations.length >= 3) break;
            recommendedDestinations.push(...allDestinations.filter(dest => dest.type === type && !recommendedDestinations.includes(dest)));
        }

        // Ensure no duplicate destinations
        recommendedDestinations = [...new Set(recommendedDestinations)].slice(0, 3);

        // Fill up with top-rated destinations if needed
        if (recommendedDestinations.length < 3) {
            const topRatedDestinations = allDestinations
                .filter(dest => !recommendedDestinations.includes(dest)) // Exclude already added destinations
                .sort((a, b) => (b.rating || 0) - (a.rating || 0))
                .slice(0, 3 - recommendedDestinations.length);

            recommendedDestinations.push(...topRatedDestinations);
        }

        return recommendedDestinations;
    } else {
        console.log("Ingen anmeldelser funnet, henter mest likte destinasjoner");
        // If the user has no high-rated reviews, return the top-rated destinations
        return allDestinations.sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 3);
    }
};
