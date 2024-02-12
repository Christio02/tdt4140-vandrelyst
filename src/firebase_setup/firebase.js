// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
