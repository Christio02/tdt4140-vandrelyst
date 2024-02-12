import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import DestinationPopUp from "../components/DestinationPopUp";
import Searchbar from "../components/Searchbar";
import { db } from "../firebase_setup/firebase";
import "../style/frontpage.css";

const Frontpage = () => {
  // const [text, setText] = useState("") // State to store the input value

  // // Function to send data to the database
  // const sendData = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   try {
  //     const dataRef = await addDoc(collection(db, "tests"), {
  //       text: text,
  //     });
  //     console.log("Add entry with id: ", dataRef.id)

  //   } catch (e) {
  //     console.error("Error submiting", e)
  //   }
  // }

  /* 
  The return statement contains the JSX that will be rendered to the DOM
  So essentially here we are returning the HTML that will be displayed on the page
  */
  return (
    <div className="main-container">
      {/* AddDestinationButton is a component that we created in the components folder */}
      <Searchbar />

      <DestinationPopUp />
    </div>
  );
};

export default Frontpage;
