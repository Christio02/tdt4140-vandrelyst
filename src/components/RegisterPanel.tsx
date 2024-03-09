import { useEffect, useState } from 'react';
import { auth } from '../firebase_setup/firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import "../style/RegisterPanel.css"
import { useNavigate } from "react-router-dom";
// import { doc, getDocs} from "firebase/firestore";
import { db } from '../firebase_setup/firebase.js';
import { collection } from 'firebase/firestore';
import { where, query} from 'firebase/firestore';


import { doc, setDoc, getDoc } from "firebase/firestore"; 




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



const makeEntryForUser = (email:string, password:string,  
  name:string, phoneNumber:string,
  adminPrivileges:boolean) => {
  const userDocument = doc(db, "users", email);
  const data = {
    userEmail: email,
    userPassword: password,
    userFullName: name,
    userPhoneNumber: phoneNumber,
    isAdmin: adminPrivileges
  }
  console.log(data);
  console.log(userDocument);

  setDoc(userDocument, data);
}

export const userIsAdmin = async () => {
  //! Sjekk om logget inn
  // console.log("INNE NÅ")
  if (auth?.currentUser?.email === undefined) {
    console.log("Ikke logget inn");
    return false; 
  } 
  //! Vet at logget inn, men typescript klagde
  //! Derfor kan checkEmail settes til ''
  const checkEmailForUserEntry = auth.currentUser.email || ''; 
 
  //! Henter ut referanse til document i collection
  const userDocument = doc(db, "users", checkEmailForUserEntry);
  
  //! Henter data fra document
  try {
    console.log("INNE I TRY")
    const snapshotOfData = await getDoc(userDocument);
    
    //! Sjekke om snapshotQuery faktisk finnes
    if (snapshotOfData.exists()) {
        const userInfo = snapshotOfData.data();  
        // console.log("SJEKKSJEKKSJEKK")
        console.log("Document data:", userInfo);
        console.log(userInfo.isAdmin);
        return userInfo.isAdmin;
      }
      
      else {
        console.log("No such document!");
      }
    }
  catch (error) {
        console.log(error);
        return false;
  };
};

export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
        // An error happened.
      });
    console.log("Logget ut");
}

const RegisterPanel = (props : UserLogInProps) => {

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //! Vet hvordan man henter ut email -> SJekker da hvis null return
            //! Ellers sjekk email mot document ID

      //! OnLogIn
      

    // const userDocument = doc(db, "users", email);
    // const data = {
    //   userEmail: email,
    //   userPassword: password,
    //   userFullName: name,
    //   userPhoneNumber: phoneNumber,
    //   admin: true
     
    // }
    // setDoc(userDocument, data);
            
    
    // Her skal man hente ut lagret data om brukeren for å se om admin == true eller ikke
    // SKal da conditionally rendere ulike ting
    // Denne UseEffect og render eller ikke skal da fungere på alle komponenter, siden vi alltid bruker kun IKKE-full refresh, og da forblir innlogget.
    
  });

  

  const logIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      //! Sende tilbake til forsiden
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

    //! Lage entry
    const isAdmin = false;
    makeEntryForUser(email, password, name, phoneNumber, isAdmin);
    
    //! Logg inn og bli sendt tilbake til forside
    logIn(event);
    })
    .catch((error) => {
      const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
};



let functions = [logIn, registerUser];

console.log(auth?.currentUser?.email);
// userIsAdmin().then(isAdmin => {
  // console.log("BOOL ER: " + isAdmin);
// });

    return (
        <div className='wholeDiv'>
            <a href="/">
              <button id="backToFrontPage" className='btn btn-primary'>Tilbake</button>
            </a>
            <button onClick={logOut} id="backToFrontPage" className='btn btn-primary'>Logg ut</button>

        <div className="RegisterPanel">
        <h1>{props.page} her</h1>
        <form onSubmit={functions[props.index]}>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Fullt navn</label>
            <input 
            type="text" 
            className="form-control" 
            id="inputText" 
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPhoneNumber" className="form-label">Telefonnummer</label>
            <input 
            type="text"
            className="form-control" 
            id="inputPhoneNumber" 
            aria-describedby="emailHelp"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            
            />
          </div>


          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">E-post</label>
            <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Passord</label>
            <input 
            type="password" 
            className="form-control" 
            id="inputPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
            />
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
// Legge inn navn telefonnummer i Registrer deg her OK
// Skrive brukerens data til databasen når man registrerer seg OK
// Vite hvordan man conditionally renderer OK
// Finne ut queries og henting fra Firebase

export default RegisterPanel;