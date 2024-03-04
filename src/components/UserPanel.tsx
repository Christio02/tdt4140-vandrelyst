import { useState } from 'react';
import { auth } from '../firebase_setup/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import "../style/UserPanel.css"




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


const logIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    console.log("Logget inn");
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
    console.log("Registrert bruker");
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
            <a href="/">
              <button type="submit" className="btn btn-primary" id="submitButton">{props.page}</button>
            </a>
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
// Redirecte tilbake til Home Page når man logger inn
// Legge inn navn telefonnummer i Registrer deg her
// 
// 

export default UserPanel;