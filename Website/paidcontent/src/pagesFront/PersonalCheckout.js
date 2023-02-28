import * as React from 'react';
import './PersonalCheckout.css';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import StripeContainer from './StripeContainer.js';

export default function PersonalCheckout() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState();
    const [key, setKey] = useState();
    const cardId = 'ic_1ITi6XKYfU8ZP6raDAXem8ql';
    
    const stripeFunc = async () => { 
        await loadStripe('pk_test_51MZTBGLeql5JZZEePBXMl6f49nwS9LTvgaKOxoWesTGvNbEjq2t6VHWcG8HmneuBUzCMioMDagAEmc1WCfrz3cLE00DV4Q5ikd')
            .then(async (stripe) => {
                console.log(stripe);

                await fetch("https://aiserver.herokuapp.com/secret", {
                    method: "GET",
                    
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setData(data);
                    })
                    .catch((err) => {
                        console.log({ message: err.message });
                    });

                console.log(stripe);

                const elements = stripe.elements({
                    clientSecret: data.client_secret
                });

                const nonceResult = stripe.createEphemeralKeyNonce({
                    issuingCard: cardId,
                });

                const nonce = nonceResult.nonce;

                fetch('https://aiserver.herokuapp.com/ephemeral-keys', {
                    method: 'POST',
                    body: `issuing_card=${cardId}&nonce=${nonce}`,
                  })
                  .then((response) => response.json())
                  .then((response) => {
                    setKey(response.ephemeralKeySecret);
                  })
                  .then(() => {
                    console.log("first step is complete and the key has been called");
                  })
                  .catch((err) => {
                    console.log({ message: err.message });
                  });
            })
            .then( () => {
                //elements.update({locale: 'fr'});

                /*
                const address = elements.create('address', {
                    mode: 'billing',
                })
                const paymentElement = elements.create('payment')
                paymentElement.update({business: {name: 'Array Assistant'}});
                const linkAuthElement = elements.create('linkAuthentication');
                */

                //Create a nonce
                
            })
            .then(() => console.log("Done loading stripe, loaded successfully."))
            .catch((err) => {
                console.log({ message: err.message });
            });
    }

    return(
        <div id="personalCheckoutDiv">
            <h3>
                This is the checkout page for the personal account.
            </h3>
            <div>
                <StripeContainer />
            </div>
            <script src="https://js.stripe.com/v3/"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}