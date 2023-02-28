import * as React from 'react';
import './PersonalCheckout.css';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

export default function PersonalCheckout() {
    const [loaded, setLoaded] = useState(false);

    const stripe = async () => { 
        await loadStripe('pk_test_51MZTBGLeql5JZZEePBXMl6f49nwS9LTvgaKOxoWesTGvNbEjq2t6VHWcG8HmneuBUzCMioMDagAEmc1WCfrz3cLE00DV4Q5ikd')
            .then(() => setLoaded(true))
            .catch((err) => {
                console.log({ message: err.message });
            });
    }
    
    if (loaded) {
        const elements = stripe.elements({
            clientSecret: 'sk_test_51MZTBGLeql5JZZEep4i4uudpBRJMakqOKZjEWRNvcfmPMOEKKMgCorhzNbr5vpC2m54leCfbMAZ9MuRGoOhuvO2x005jPIqTf5'
        });

        var paymentElement = elements.create('payment');
    }

    return(
        <div id="personalCheckoutDiv">
            <h3>
                This is the checkout page for the personal account.
            </h3>
            <script src="https://js.stripe.com/v3/"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}