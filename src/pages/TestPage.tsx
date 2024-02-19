import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import { useState } from "react";
import Navbar from "../components/Navbar";


const TestPage = () => {
  const [text, setText] = useState("")
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
  return (
    <>
      <Navbar />  

    </>
  );
};

export default TestPage;
