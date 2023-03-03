import React from 'react';
import { useState, useCallback } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import './PaymentWall.css';
import { getDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../auth/firebase.js';

const perTitle = "Personal";
const perDes = "This is the personal account";
const perPrice = "$9.99";
const perLink = "/personal";

const proTitle = "Professional";
const proDes = "This is the professional account";
const proPrice = "$24.99";
const proLink = "/professional";

export default function PaymentWall() {
    const navigate = useNavigate();

    const checkAuth = useCallback( async () => {
        const customerGet = await getDoc(doc(db, "customers", auth.currentUser.uid));
        const customerData = customerGet.data();
        const sub = customerData.userSubscription;

        if (sub === "Paid") {
            navigate('/customerPortal');
        }
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            checkAuth();
        } 
    });

    return (
        <div
            style={{
                display: 'flex',
                //margin: 'auto',
                width: '100%'
            }}
        >
            {displayProduct(perTitle, perDes, perPrice, perLink)}
            {displayProduct(proTitle, proDes, proPrice, proLink)}
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}

function displayProduct(name, des, price, link) {
    const [re, setRe] = useState(false);

    return(
        <div
        >
            { !re ? (
                <div>
                    <div 
                        style={{
                            height: 500,
                            width: 250,
                            border: '1px solid white',
                            backgroundColor: '#333333',
                            color: 'white',
                            borderRadius: 10,
                            textAlign: 'center',
                            fontFamily: 'Inter'
                        }}
                    >
                        <h1
                            style={{

                            }}
                        >
                            {name}
                        </h1>
                        <h4>
                            {des}
                        </h4>
                        <h2>
                            {price}
                        </h2>
                        <button onClick={() => {
                            setRe(true)
                        }}>
                            Buy
                        </button>
                        
                    </div>
                </div>
            ) : (
                <Navigate to={link} />
            )}
            <Outlet />
        </div>
    )
}
