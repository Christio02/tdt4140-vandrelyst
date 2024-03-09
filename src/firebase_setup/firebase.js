import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import { getAuth } from "firebase/auth"; // Import Firebase Authentication module


/*
TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries

Your web app's Firebase configuration
For Firebase JS SDK v7.20.0 and later, measurementId is optional
*/

export const firebaseConfig = {
  apiKey: "AIzaSyBXE-Phv00ZXP07Stl2sanuiPNjO0dDDxc",
  authDomain: "reiseinspirasjon-b2579.firebaseapp.com",
  projectId: "reiseinspirasjon-b2579",
  storageBucket: "reiseinspirasjon-b2579.appspot.com",
  messagingSenderId: "172470559176",
  appId: "1:172470559176:web:a56f693d1b58e1050da0fd",
  measurementId: "G-RT48LKNXCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const storageRef = ref(
  storage,
  "gs://reiseinspirasjon-b2579.appspot.com"
);
export const db = getFirestore(app);
export const destinationRef = collection(db, "destinations");
export const userRef = collection(db, "users");
// const querySnapshot = await getDocs(destinationRef);

export const auth = getAuth(app);



