import { useState } from 'react';
import { auth } from '../firebase_setup/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import "../style/LogInPanel.css"



const LogInPanel = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const logIn = () => {
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

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
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

    console.log(auth?.currentUser?.email);

    return (
        <div className="LogInPanel">
        <form>
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
          <button onClick={logIn} type="submit" className="btn btn-primary">Logg inn</button>
          <button onClick={logIn} type="submit" className="btn btn-primary">Logg inn</button>

        </form>
        </div>
    );
};

export default LogInPanel;