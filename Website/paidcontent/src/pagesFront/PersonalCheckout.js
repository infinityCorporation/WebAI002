import * as React from 'react';
import './PersonalCheckout.css';
import StripeContainer from './StripeContainer.js';
import { auth } from '../auth/firebase';
import { Navigate } from 'react-router-dom';

export default function PersonalCheckout() {
    return(
        <div id="personalCheckoutDiv">
            { auth.currentUser ? (
            <div>
                <h3>
                    This is the checkout page for the personal account.
                </h3>
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
        </div>
    )
}