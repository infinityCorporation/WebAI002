import React from 'react';
import { useState, useCallback } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import './PaymentWall.css';
import { getDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../auth/firebase.js';
import BottomLinks from './BottomLinks';

const perTitle = "Personal";
const perDes1 = "- Generate and Explain Formulas";
const perDes2 = "- Have Complex Problems Explained";
const perDes3 = "- Get access to the Excel Plugin";
const perDes4 = "- Up to 250 Requests per Month";
const perPrice = "$9.99";
const perLink = "/personal";
const perAvail = "Buy";

const proTitle = "Professional";
const proDes1 = "- Clean Data in Spreadsheets";
const proDes2 = "- Create Item Lists and Summaries";
const proDes3 = "- Create Spreadsheet Automations";
const proDes4 = "- Up to 1000 Requests per Month";
const proPrice = "$24.99";
const proLink = "/pricing";
const proAvail = "Coming Soon";

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
                background: 'white'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center'
                }}
            >
                {displayProduct(perTitle, perDes1, perDes2, perDes3, perDes4, perPrice, perLink, perAvail)}
                {displayProduct(proTitle, proDes1, proDes2, proDes3, proDes4, proPrice, proLink, proAvail)}
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
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
    </div>
    )
}

function displayProduct(name, des1, des2, des3, des4, price, link, avail) {
    const [re, setRe] = useState(false);

    return(
        <div
        >
            { !re ? (
                <div>
                    <div 
                        style={{
                            height: 500,
                            width: 350,
                            border: '1px solid white',
                            backgroundColor: '#333333',
                            color: 'white',
                            borderRadius: 10,
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            margin: 20,
                        }}
                    >
                        <h1
                            style={{
                                borderBottom: '1px solid white',
                                width: '80%',
                                position: 'relative',
                                left: '10%'
                            }}
                        >
                            {name}
                        </h1>
                        <div
                            style={{
                                position: 'relative',
                                top: 30
                            }}
                        >
                            <h4>
                                {des1}
                            </h4>
                            <h4>
                                {des2}
                            </h4>
                            <h4>
                                {des3}
                            </h4>
                            <h4>
                                {des4}
                            </h4>
                        </div>
                        <h2
                            style={{
                                position: 'relative',
                                top: 60,
                                fontSize: 30
                            }}
                        >
                            {price}
                        </h2>
                        <h5
                            style={{
                                position: 'relative',
                                top: 35
                            }}
                        >
                            Monthly
                        </h5>
                        <button 
                            id="prodPurchase"
                            onClick={() => {
                                setRe(true)
                            }}
                        >
                            {avail}
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
