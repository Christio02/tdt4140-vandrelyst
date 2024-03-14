
export interface Review {
    id: string;
    user: string; // Anta at dette er brukerens e-post
    destination: string; // ID for destinasjonen
    rating: number;
    type: string; // Type destinasjon
  }
  
  export interface Destination {
    id: string;
    imageURL: string; // Gjør dette feltet obligatorisk
    country: string;
    city: string;
    type?: string;
    temperature?: number;
    price?: number;
    rating: number;
  }
