import { useEffect, useState } from 'react';
import { auth } from '../firebase_setup/firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
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


// const AuthDetails = () => {
//   const [authUser, setAuthUser] = useState("");

//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user)
//       }
//       else{
//         setAuthUser(null);
//       }

//     });
//   }, [])

//   return (
//     <div>{ authUser ? <p>Signed In</p> : <p>Signed Out</p> }</div>
//     );
//   };


const UserPanel = (props : UserLogInProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //! Vet hvordan man henter ut email -> SJekker da hvis null return
            //! Ellers sjekk email mot document ID

      //! OnLogIn
     
// import { doc, setDoc } from "firebase/firestore"; 

//     const userDocument = doc(db, "users", email);
//     const data = {
//       userEmail: email,
//       userPassword: password,
//       userFullName: name,  
//       roles: {
//         user: true,
//         admin: false
//       }
//     }
//     await setDoc(userDocument, data);
            
    
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
      navigate("/");
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
};

let functions = [logIn, registerUser];

console.log(auth?.currentUser?.email);

    return (
        <div className='wholeDiv'>
            <a href="/">
              <button id="backToFrontPage" className='btn btn-primary'>Tilbake</button>
            </a>

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

        {/* Denne knappen sender inn skjemaet, logge deg inn og sende deg til hovedsiden */}
          <div className='submitAndLink'>
              <button type="submit" className="btn btn-primary" id="submitButton">{props.page}</button>
        {/* Denne knappen navigerer mellom Logg inn og Registrer deg her */}
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