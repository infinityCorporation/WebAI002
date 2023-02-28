import * as React from 'react';
import './PersonalCheckout.css';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

export default function PersonalCheckout() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState();

    const elements = {};

    const stripeFunc = async () => { 
        await loadStripe('pk_test_51MZTBGLeql5JZZEePBXMl6f49nwS9LTvgaKOxoWesTGvNbEjq2t6VHWcG8HmneuBUzCMioMDagAEmc1WCfrz3cLE00DV4Q5ikd')
            .then(async () => {
                await fetch("https://aiserver.herokuapp.com/persCheckout", {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    mode: 'cors'
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setData(data);
                    })
                    .catch((err) => {
                        console.log({ message: err.message });
                    });
            })
            .then((stripe) => {
                elements = stripe.elements({
                    clientSecret: 'sk_test_51MZTBGLeql5JZZEep4i4uudpBRJMakqOKZjEWRNvcfmPMOEKKMgCorhzNbr5vpC2m54leCfbMAZ9MuRGoOhuvO2x005jPIqTf5'
                });
            })
            .then(() => setLoaded(true))
            .then(() => console.log("Done loading stripe, loaded successfully."))
            .catch((err) => {
                console.log({ message: err.message });
            });
    }


    if (loaded) {
        /*
        const elements = stripe.elements({
            clientSecret: 'sk_test_51MZTBGLeql5JZZEep4i4uudpBRJMakqOKZjEWRNvcfmPMOEKKMgCorhzNbr5vpC2m54leCfbMAZ9MuRGoOhuvO2x005jPIqTf5'
        });
        */

        elements.update({locale: 'fr'});

        const paymentElement = elements.create('payment')
        paymentElement.update({business: {name: 'Array Assistant'}});

        const linkAuthElement = elements.creat('linkAuthentication');
    }

    return(
        <div id="personalCheckoutDiv">
            <h3>
                This is the checkout page for the personal account.
            </h3>
            <button
                onClick={() => stripeFunc()}
            >
                Click here to get stripe stuff
            </button>
            <script src="https://js.stripe.com/v3/"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}