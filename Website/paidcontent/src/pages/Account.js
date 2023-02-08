import * as React from 'react';
import { useState } from 'react';
//import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../auth/firebase.js'
import './Account.css';



export default function Account() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePass = (event) => {
        setPass(event.target.value);
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
        }
    })

    function signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                return user;
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    const signOutFunction = () => {
        signOut(auth)
            .then(() => {
                console.log("User has been signed out");
                console.log(auth.currentUser)
            });
    };

    return(
        <div className='main'>
            <div className='headerDiv'>
                <h2 className='title'>
                    User Account:
                </h2>
            </div>
            { !auth.currentUser ? (
                <>
                    <div className='googleAuth'>
                        <h4 className='emailTitle'>
                            Email:
                        </h4>
                        <input 
                            type="text" 
                            className='email'
                            onChange={handleEmail}
                        />
                        <h4 className='passTitle'>
                            Password:
                        </h4>
                        <input 
                            type="password" 
                            className='pass'
                            value={pass}
                            onChange={handlePass}
                        />
                    </div>
                    <button 
                        className='button'
                        onClick={() => signIn(email, pass)}
                    >
                        Sign In
                    </button>
                </>

            ) : (
                <>
                    <div className='signedIn'>
                        <h3 className='topPage'>
                            <h3 className='email'>
                                {auth.currentUser.email}
                            </h3>
                            <button 
                                className='signout'
                                onClick={() => signOutFunction()}
                            >
                                Sign Out
                            </button>
                        </h3>
                        
                    </div>
                </>
            )}
        </div>
    )
}