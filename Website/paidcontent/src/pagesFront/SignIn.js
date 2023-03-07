import * as React from 'react';
import './SignIn.css';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { auth, db } from '../auth/firebase.js';
import { useState, useCallback } from 'react';
import BottomLinks from './BottomLinks';
import { getDoc, doc } from 'firebase/firestore';
import { SwitchLink } from './StyledLink';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [secRe, setSecRe] = useState(false);

    const navigate = useNavigate();

    const handleEmail = useCallback((event) => {
        setEmail(event.target.value);
    });

    const handlePass = useCallback((event) => {
        setPass(event.target.value);
    });

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async () => {
                const customerGet = await getDoc(doc(db, "customers", auth.currentUser.uid));
                const customerData = customerGet.data();
                const sub = customerData.userSubscription;
                if (sub === "Paid") {
                    setSecRe(true);
                    console.log("true");
                }
            })
            .then(() => {
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
        <div id="signInDiv">
            { !redirect ? (
                <>
                    <h1 id="signInTitle">
                        Sign In
                    </h1>
                    <div id='googleAuthDiv1'>
                        <h4 id='emailTitle'>
                            Email:
                        </h4>
                        <input 
                            type="text" 
                            id='email'
                            onChange={handleEmail}
                        />
                        <h4 id='passTitle'>
                            Password:
                        </h4>
                        <input 
                            type="password" 
                            id='pass'
                            onChange={handlePass}
                        />
                        <div>
                            <button 
                                id='buttonIn'
                                onClick={() => signIn(email, pass)}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        <SwitchLink
                            id='buttonUp'
                            to="/createAccount"
                            style={{
                                position: 'relative',
                                top: 25
                            }}
                        >
                            Create Account
                        </SwitchLink>
                    </div>
                    <div
                        className='infoSection'
                        style={{
                            width: '102%',
                            height: 250,
                            position: 'absolute',
                            bottom: 0,
                            left: "-1%",
                            margin: 0,
                            color: 'white',
                            backgroundColor: '#1F1F1F'
                        }}
                    >
                        <BottomLinks />
                    </div>
                    <Outlet />
                </>
            ) : (
                <>
                    { !secRe ? (
                        <Navigate to="/products" />
                    ) : (
                        <Navigate to="/customerPortal" />
                    )}
                </>
            )}
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}
