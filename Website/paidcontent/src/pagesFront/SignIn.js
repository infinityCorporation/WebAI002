import * as React from 'react';
import './SignIn.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../auth/firebase.js';
import { useState, useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BottomLinks from './BottomLinks';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleEmail = useCallback((event) => {
        setEmail(event.target.value);
    });

    const handlePass = useCallback((event) => {
        setPass(event.target.value);
    });

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setRedirect(true);
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

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
                        <button 
                            id='buttonIn'
                            onClick={() => signIn(email, pass)}
                        >
                            Sign In
                        </button>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        <Link
                            id='buttonUp'
                            to="/createAccount"
                            style={{
                                position: 'relative',
                                top: 25,
                                textDecoration: 'none',
                                fontFamily: 'Inter',
                            }}
                        >
                            Create Account
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
                    <Outlet />
                </>
            ) : (
                <>
                    <Navigate to="/personal" />
                </>
            )}
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}