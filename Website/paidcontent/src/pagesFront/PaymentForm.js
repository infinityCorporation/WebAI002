import * as React from 'react';
import { useState } from 'react';
import './PaymentForm.css';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#4ad388",
            color: "#4ad388",
            fontWeight: 500,
            fontFamily: 'Inter',
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
                const {id} = paymentMethod;
                const response = await axios.post("http://aiserver.herokuapp.com/payment", {
                    amount: 999,
                    id: id
                });

                if (response.data.success) {
                    console.log("Successful Payment");
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
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button
                            className='buyButton'
                        >
                            Pay
                        </button>
                        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
                    </form>
                </>
            ) : (
                <>
                    <h2>
                        Thanks for purchasing your subscription!
                    </h2>
                </>
            )}
        </>
    )
}
