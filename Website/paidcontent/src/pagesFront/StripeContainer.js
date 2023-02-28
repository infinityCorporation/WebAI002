import * as React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51MZTBGLeql5JZZEePBXMl6f49nwS9LTvgaKOxoWesTGvNbEjq2t6VHWcG8HmneuBUzCMioMDagAEmc1WCfrz3cLE00DV4Q5ikd";

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
    return(
        <div
            style={{
                width: '50%',
            }}
        >
            <Elements 
                stripe={stripeTestPromise}
            >
                <PaymentForm />
            </Elements>
        </div>
    )
}