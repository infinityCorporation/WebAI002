import * as React from 'react';
import { useState } from 'react';
//import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase.js'
import './Account.css';

export default function Account() {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    })

    function signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
        console.log(user);
    }

    return(
        <div className='main'>
            <div className='headerDiv'>
                <h2 className='title'>
                    User Account:
                </h2>
            </div>
            { !authenticated ? (
                <>
                    <div className='googleAuth'>
                        <h4 className='emailTitle'>
                            Email:
                        </h4>
                        <input 
                            type="text" 
                            className='email'
                            class='email'
                            onChange={(text) => setEmail(text)}
                        />
                        <h4 className='passTitle'>
                            Password:
                        </h4>
                        <input 
                            type="password" 
                            className='pass'
                            class='pass'
                            onChange={(text) => setPass(text)}
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
                            User is Signed In
                        </h3>
                    </div>
                </>
            )}
        </div>
    )
}