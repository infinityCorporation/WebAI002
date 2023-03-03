import * as React from 'react';
import './PersonalCheckout.css';
import StripeContainer from './StripeContainer.js';
import { auth } from '../auth/firebase';
import { Navigate } from 'react-router-dom';
import BottomLinks from './BottomLinks';

export default function PersonalCheckout() {
    return(
        <div id="personalCheckoutDiv">
            { auth.currentUser ? (
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <h1>
                    Checkout
                </h1>
                <div>
                    <StripeContainer />
                </div>
            </div>
            ) : (
                <>
                    <Navigate to="/createAccount" />
                </>
            )}
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
            <div
                className='infoSection'
                style={{
                    width: '100%',
                    height: 250,
                    position: 'absolute',
                    bottom: -100,
                    left: 0,
                    color: 'white',
                    backgroundColor: '#1F1F1F' 
                }}
            >
                <BottomLinks />
            </div>
        </div>
    )
}