import * as React from 'react';
import './CreateAccount.css';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useState, useCallback } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../auth/firebase.js';
import BottomLinks from './BottomLinks';
import { Navigate } from 'react-router-dom';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateAccount() {
    const [passCreate, setPassCreate] = useState("");
    const [emailCreate, setEmailCreate] = useState("");
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

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
                    await axios.post("https://aiserver.herokuapp.com/createCustomer", {
                        email: auth.currentUser.email,
                        name: name
                    })
                        .then(async (data) => {
                            await setDoc(doc(db, "customers", auth.currentUser.uid), {
                                firstName: name,
                                uid: auth.currentUser.uid,
                                userEmail: auth.currentUser.email,
                                userSubscription: 'Free',
                                customerId: data.data,
                                subscriptionId: "none"
                              });
                              console.log("document was saved with is" + auth.currentUser.uid + " And customer id " + data.data);
                        })
                        .catch((err) => {
                            console.log({ message: err.message });
                        });
                } catch (err) {
                    console.log({ message: err.message });
                }
            })
            .then(async () => {
                setRedirect(true);
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    const checkAuth = useCallback( async () => {
        const customerGet = await getDoc(doc(db, "customers", auth.currentUser.uid));
        const customerData = customerGet.data();
        const sub = customerData.userSubscription;

        if (sub === "Paid") {
            navigate('/customerPortal');
        } else {
            navigate("/products");
        }
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            checkAuth();
        } 
    });

    return(
        <div>
            { redirect ? (
                <>
                    <Navigate to="/products" />
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