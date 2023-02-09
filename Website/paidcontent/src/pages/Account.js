import * as React from 'react';
import { useState, useCallback, useReducer, useEffect } from 'react';
import { signInWithEmailAndPassword, sendEmailVerification, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase.js'
import './Account.css';



export default function Account() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passCreate, setPassCreate] = useState("");
    const [emailCreate, setEmailCreate] = useState("");

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "SIGN_IN":
                    return {
                        ...prevState,
                        userAuth: action.userObj,
                        accCreate: action.create,
                    };
                case "RESTORE":
                    return {
                        ...prevState,
                        userAuth: action.userObj,
                        accCreate: action.create
                    }
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        userAuth: null,
                        accCreate: action.create
                    };
                case "SIGN_UP":
                    return {
                        ...prevState,
                        userAuth: action.userObj,
                        accCreate: action.create
                    };
                case "TO_CREATE":
                    return {
                        ...prevState,
                        userAuth: null,
                        accCreate: action.create
                    };
                case "TO_SIGN":
                    return {
                        ...prevState,
                        userAuth: null,
                        accCreate: action.create
                    }
            }
        },
        {
            userAuth: null,
            accCreate: false
        }
    );

    const handleEmail = useCallback((event) => {
        setEmail(event.target.value);
    });

    const handlePass = useCallback((event) => {
        setPass(event.target.value);
    });

    const createEmail = useCallback((event) => {
        setEmailCreate(event.target.value);
    });

    const createPass = useCallback((event) => {
        setPassCreate(event.target.value);
    });

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "SIGN_IN", userObj: user, create: false  })
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("The email verification has been sent.")
                    })
                    .catch((err) => ({ message: err.message }));
                const user = userCredential.user;
                dispatch({ type: "SIGN_UP", userObj: user, create: false});
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    const signUpPage = () => {
        dispatch({ type: "TO_CREATE", create: true })
    }

    const signInPage = () => {
        dispatch({ type: "TO_SIGN", create: false })
    }

    const signOutFunction = useCallback(() => {
        signOut(auth)
            .then(() => {
                setEmail("");
                setPass("");
                dispatch({ type: "SIGN_OUT" });
            });
    });

    return(
        <div className='mainAcc'>
            <div className='headerDiv'>
                <h2 className='title'>
                    { !state.userAuth ? 'Login' : 'Account' }
                </h2>
            </div>
            { !state.userAuth ? (
                <>
                    { !state.accCreate ? (
                        <>
                            <div className='googleAuthDiv'>
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
                                    onChange={handlePass}
                                />
                                <button 
                                    className='buttonIn'
                                    onClick={() => signIn(email, pass)}
                                >
                                    Sign In
                                </button>
                                <button
                                    className='buttonUp'
                                    onClick={() => signUpPage()}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='googleAuthDiv'>
                                <h4 className='emailTitle'>
                                    Email:
                                </h4>
                                <input 
                                    type="text" 
                                    className='email'
                                    onChange={createEmail}
                                />
                                <h4 className='passTitle'>
                                    Password:
                                </h4>
                                <input 
                                    type="password" 
                                    className='pass'
                                    onChange={createPass}
                                />
                                <button 
                                    className='buttonIn'
                                    onClick={() => signUp(emailCreate, passCreate)}
                                >
                                    Create Account
                                </button>
                                <button
                                    className='buttonUp'
                                    onClick={() => signInPage()}
                                >
                                    Back to Sign In
                                </button>
                            </div>
                        </>
                    ) }
                </>
            ) : (
                <>
                    <div className='signedIn'>
                        <h3 className='topPage'>
                            <h3 className='emailDisplay'>
                                {auth.currentUser.email}
                            </h3>
                            <button 
                                className='signOut'
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