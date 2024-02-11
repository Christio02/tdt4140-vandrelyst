import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import { useState } from "react";
import AddDestinationButton from "../components/AddDestinationButton";



const TestPage = () => {
  
  const [text, setText] = useState("") // State to store the input value
  
  // Function to send data to the database
  const sendData = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const dataRef = await addDoc(collection(db, "tests"), {
        text: text,
      });
      console.log("Add entry with id: ", dataRef.id)
  
    } catch (e) {
      console.error("Error submiting", e)
    }
  }

  /* 
  The return statement contains the JSX that will be rendered to the DOM
  So essentially here we are returning the HTML that will be displayed on the page
  */
  return (
    <>
      <form>
        <input type = "text" onChange={(e) => setText(e.target.value)}></input>
        <button onClick={sendData}>Click here!</button>
      </form>
      {/* AddDestinationButton is a component that we created in the components folder */}
      <AddDestinationButton className="createButton"></AddDestinationButton>
    </>
  );
};

export default TestPage;
