import * as React from 'react';
import { useState, useCallback, useReducer, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../auth/firebase.js'
import { Outlet } from 'react-router-dom'
import { getDoc, setDoc, doc } from 'firebase/firestore';
import './Account.css';



export default function Account() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passCreate, setPassCreate] = useState("");
    const [emailCreate, setEmailCreate] = useState("");
    const [name, setName] = useState("");
    const [userInfo, setUserInfo] = useState();
    const [readyUI, setReadyUI] =useState(false);

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
                default:
                    return {
                        ...prevState,
                        userAuth: null,
                        accCreate: false
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

    const createName = useCallback((event) => {
        setName(event.target.value);
    })

    const createEmail = useCallback((event) => {
        setEmailCreate(event.target.value);
    });

    const createPass = useCallback((event) => {
        setPassCreate(event.target.value);
    });

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            dispatch({ type: "RESTORE", userObj: user });
        } else {
            dispatch({ type: "SIGN_IN" });
        }
    }, []);

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch({ type: "SIGN_IN", userObj: user, create: false  })
            })
            .then(async () => {
                try {
                    const loadVals = await getDoc(doc(db, 'customers', auth.currentUser.uid));
                    setUserInfo(loadVals.data());
                    setReadyUI(true);
                } catch (err) {
                    console.log({ message: err.message });
                }
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    const signUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "SIGN_UP", userObj: user, create: false});
            })
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
            .then(async () => {
                try {
                    const loadVals = await getDoc(doc(db, 'customers', auth.currentUser.uid));
                    setUserInfo(loadVals);
                    setReadyUI(true);
                } catch (err) {
                    console.log({ message: err.message });
                }
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
                            <div className='googleAuthDiv1'>
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
                            <div className='googleAuthDiv2'>
                                <h4 className='nameTitle'>
                                    First Name:
                                </h4>
                                <input
                                    type="text"
                                    className='name'
                                    onChange={createName}
                                />
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
                                    onClick={() => {
                                        signUp(emailCreate, passCreate, name);
                                    }}
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
                            <div className='accountDisplay'>
                                <h3 className='nameDisplay'>
                                    { readyUI ? `Name: ${userInfo.firstName}` : `Name: Please Sign In`}
                                </h3>
                                <h4 className='emailDisplay'>
                                    { auth.currentUser ? `Email: ${auth.currentUser.email}` : `Email: Please Sign In`}
                                </h4>
                                <h4 className='subDisplay'>
                                    { readyUI ? `Subscription: ${userInfo.userSubscription}` : `Subscription: Free Plan` }
                                </h4>
                            </div>
                            <button 
                                className='signOut'
                                onClick={() => signOutFunction()}
                            >
                                Sign Out
                            </button>
                        </h3>
                        
                    </div>
                    <Outlet />
                </>
            )}
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