import * as React from 'react';
import { useState, useCallback, useReducer, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../auth/firebase.js'
import { Outlet, useNavigate } from 'react-router-dom'
import { getDoc, setDoc, doc } from 'firebase/firestore';
import './Account.css';



export default function Account() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [readyUI, setReadyUI] =useState(false);
    const [sub, setSub] = useState("");

    const navigate = useNavigate();

    const getCreds = useCallback( async () => {
        const loadCreds = await getDoc(doc(db, "customers", auth.currentUser.uid));
        const creds = loadCreds.data();
        setEmail(creds.userEmail);
        setName(creds.firstName);
        setSub(creds.userSubscription);
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            getCreds();
            setReadyUI(true);
        } else {
            navigate("/signIn");
        }
    });

    const signOutFunction = useCallback(() => {
        signOut(auth)
            .then(() => {
                navigate("/signIn");
            });
    });

    const upgradeFunction = useCallback( async () => {
        navigate('/customerPortal/pricing');
    })

    const cancelFunction = useCallback( async () => {
        navigate('/cancel');
    })
    return(
        <div className='mainAcc'>
            <div className='headerDiv'
                style={{
                    position: 'realtive',
                    top: 30,
                    fontSize: 30
                }}
            >
                Account
            </div>
                <>
                    <div className='signedIn'>
                        <h3 className='topPage'>
                            <div className='accountDisplay'>
                                <h3 className='nameDisplay'>
                                    Name: { readyUI ? name : "Loading..." }
                                </h3>
                                <h4 className='emailDisplay'>
                                    Email: { readyUI ? email : "Loading..." }
                                </h4>
                                <h4 className='subDisplay'>
                                    Subscription: { readyUI ? sub : "Loading..." }
                                </h4>
                                <h4 className='requestDisplay'>
                                    Requests: - 
                                </h4>
                            </div>
                            <button 
                                id='signOut'
                                onClick={() => signOutFunction()}
                            >
                                Sign Out
                            </button>
                            <button
                                id='upgrade'
                                onClick={() => upgradeFunction()}
                            >
                                Upgrade
                            </button>
                            <button
                                id='cancelSubscription'
                                onClick={() => cancelFunction()}
                            >
                                Cancel Subscription
                            </button>
                        </h3>
                    </div>
                <Outlet />
                </>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </div>
    )
};

/*
styled components for add in
<NavLink 
    to="/pricing"
>
    Upgrade Account
</NavLink>
*/