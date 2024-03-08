import { useEffect, useState } from 'react';
import { auth } from '../firebase_setup/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import "../style/UserPanel.css"
import { useNavigate } from "react-router-dom";
import { doc, getDocs} from "firebase/firestore";
import { db } from '../firebase_setup/firebase.js';
import { collection } from 'firebase/firestore';
import { where, query} from 'firebase/firestore';

// Input: logIn, registerUser-routing
// props = { indexForFunk: 0 eller 1
        //   link: /logginn eller /registrering
//  } 
// 
type UserLogInProps = {
  index : number;
  page : string;
  linkToPage : string;
  link : string;

} 


const UserPanel = (props : UserLogInProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const fetchData = async () => {
    const [userData, setUserData] = useState({}); // State to store user data
    
    try {
      const currentUser = auth.currentUser; // Get the current user
      if (currentUser) {
        // If a user is logged in, fetch data for that user
        const userQuery = query(collection(db, 'users'), where('email', '==', currentUser.email));
        const querySnapshot = await getDocs(userQuery);

        // Create an object to store user data
        type UserData = {
          [key: string]: any; // This is a generic type for the document fields, adjust as per your data structure
        };
        const userDataObject: UserData = {};
        querySnapshot.forEach(doc => {
          // Populate the object with data from each document
          userDataObject[doc.id] = doc.data();
        });

        // Set the state with the retrieved user data
        setUserData(userDataObject);
      } else {
        console.log('No user logged in.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  
  const checkForUser = async () => {
      const email = auth?.currentUser?.email;
      
      if (email === undefined) {
        console.log("Går ikke");
        return;
      }
      console.log("HEI");
      const usersCollection = collection(db, "users");
      const currentUser = query(
        usersCollection,
        where("firstName", "==", "hei")
      );
      const snapshot = await getDocs(currentUser);
      console.log(snapshot.docs.forEach((p) => console.log(p)));

  }

  useEffect(() => {
      fetchData();
      // checkForUser();
  });

const logIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate("/");
      console.log("Logget inn");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Er allerede innlogget med en annen bruker");
    });
};

const registerUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Registrert bruker");
    logIn(event);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
};

const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    console.log("Logget ut");
}

let functions = [logIn, registerUser];

console.log(auth?.currentUser?.email);

    return (
        <div className='wholeDiv'>
            <a href="/">
              <button id="backToFrontPage" className='btn btn-primary'>Tilbake</button>
            </a>
            <button onClick={logOut} id="backToFrontPage" className='btn btn-primary'>Logg ut</button>

        <div className="UserPanel">
        <h1>{props.page} her</h1>
        <form onSubmit={functions[props.index]}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">E-post</label>
            <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Passord</label>
            <input 
            type="password" 
            className="form-control" 
            id="inputPassword"
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='submitAndLink'>
              <button type="submit" className="btn btn-primary" id="submitButton">{props.page}</button>
            <a href={props.link}>            
              <button type="button" className="btn btn-primary" id="linkButton">{props.linkToPage}</button>
            </a>
          </div>
        </form>
        </div>
        </div>
    );
};

// Logg inn når du registrerer OK
// Forbli logget inn OK
// Redirecte tilbake til Home Page når man logger inn OK
// Koble til at man lager bruker i databasen med gitt info
// Legge inn navn telefonnummer i Registrer deg her
// 

export default UserPanel;