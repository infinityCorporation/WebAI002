import * as React from 'react';
import './CreateAccount.css';
import { setDoc, doc } from 'firebase/firestore';
import { useState, useCallback } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../auth/firebase.js';
import BottomLinks from './BottomLinks';
import { Navigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

export default function CreateAccount() {
    const [passCreate, setPassCreate] = useState("");
    const [emailCreate, setEmailCreate] = useState("");
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createName = useCallback((event) => {
        setName(event.target.value);
    })

    const createEmail = useCallback((event) => {
        setEmailCreate(event.target.value);
    });

    const createPass = useCallback((event) => {
        setPassCreate(event.target.value);
    });

    const signUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                try {
                    await setDoc(doc(db, "customers", auth.currentUser.uid), {
                        firstName: name,
                        uid: auth.currentUser.uid,
                        userEmail: auth.currentUser.email,
                        userSubscription: 'Free'
                      });
                    console.log("document was saved with is" + auth.currentUser.uid);
                } catch (err) {
                    console.log({ message: err.message });
                }
            })
            .then(() => {
                //create a checkout session through the server here
                setRedirect(true);
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    return(
        <div>
            { redirect ? (
                <>
                    <Navigate to="/personal" />
                </>
            ): (
                <>
                    <div id="accountCreationDiv">
                        <h1 id="accountCreationHeader">
                            Create An Account
                        </h1>
                        <div id='googleAuthDiv2'>
                            <h4 className='nameTitle'>
                                First Name:
                            </h4>
                            <input
                                type="text"
                                id='name'
                                onChange={createName}
                            />
                            <h4 id='emailTitle'>
                                Email:
                            </h4>
                            <input 
                                type="text" 
                                id='email'
                                onChange={createEmail}
                            />
                            <h4 id='passTitle'>
                                Password:
                            </h4>
                            <input 
                                type="password" 
                                id='pass'
                                onChange={createPass}
                            />
                            <button 
                                id='buttonIn'
                                onClick={() => {
                                    signUp(emailCreate, passCreate, name);
                                }}
                            >
                                Create Account
                            </button>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Link
                                id="toSignIn"
                                to="/signIn"
                                style={{
                                    position: 'relative',
                                    top: 25,
                                    textDecoration: 'none',
                                    fontFamily: 'Inter',
                                }}
                            >
                                Sign In
                            </Link>
                        </div>
                        <div
                            className='infoSection'
                            style={{
                                width: '103%',
                                height: 250,
                                position: 'relative',
                                top: 100,
                                left: "-1.5%",
                                margin: 0,
                                color: 'white',
                                backgroundColor: '#1F1F1F'
                            }}
                        >
                            <BottomLinks />
                        </div>
                        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
                    </div>
                    <Outlet />
                </>
            )}
        </div>
    )
}