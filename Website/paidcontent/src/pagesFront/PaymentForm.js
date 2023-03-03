import * as React from 'react';
import { useState } from 'react';
import './PaymentForm.css';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { auth, db } from '../auth/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#4ad388",
            color: "#4ad388",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#4ad388" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee",
        }
    }
}


export default function PaymentForm() {
    const [success, setSuccess] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });


        if (!error) {
            try {
                const customer = await getDoc(doc(db, "customers", auth.currentUser.uid))
                const customerData = customer.data();

                const {id} = paymentMethod;
                const response = await axios.post("https://aiserver.herokuapp.com/payment", {
                    id: id,
                    customer: customerData.customerId
                });

                if (response.data.success) {
                    console.log(response.data.id);
                    await updateDoc(doc(db, "customers", auth.currentUser.uid), {
                        userSubscription: "Paid",
                        subscriptionId: response.data.id
                    })
                    setSuccess(true);
                };
            } catch (err) {
                console.log({ message: err.message });
            };
        } else {
            console.log({ message: error.message });
        }

    };

    return (
        <>
            { !success ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <fieldset 
                            className="FormGroup"
                        >
                            <div
                                className="FormRow"
                            >
                                <CardElement options={CARD_OPTIONS} style={{ fontFamily: 'Inter'}} />
                                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
                            </div>
                        </fieldset>
                        <button
                            className='buyButton'
                        >
                            Purchase
                        </button>
                        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
                    </form>
                </>
            ) : (
                <>
                    <h2>
                        Thanks for purchasing your subscription!
                    </h2>
                    <Navigate to="/customerPortal" />
                </>
            )}
        </>
    )
}
