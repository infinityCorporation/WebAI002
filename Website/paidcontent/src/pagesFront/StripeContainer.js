import * as React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import BottomLinks from './BottomLinks';

const PUBLIC_KEY = "pk_test_51MZTBGLeql5JZZEePBXMl6f49nwS9LTvgaKOxoWesTGvNbEjq2t6VHWcG8HmneuBUzCMioMDagAEmc1WCfrz3cLE00DV4Q5ikd";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return(
        <div
            style={{
                height: 500,
                position: 'relative',
                left: '30%'
            }}
        >
            <div
                style={{
                    width: '40%',
                    border: '1px solid white',
                    height: 200,
                    background: '#333333',
                    padding: 20,
                    borderRadius: 15,
                }}
            >
                <h2
                    style={{
                        color: 'white',
                        textAlign: 'left',
                        width: '100%',
                        position: 'relative',
                        left: 20,
                    }}
                >
                    Personal: <span> $9.99<span style={{fontSize: 12}}>/Monthly</span></span>
                </h2>
                <Elements 
                    stripe={stripeTestPromise}
                >
                    <PaymentForm />
                </Elements>
            </div>
        </div>
    )
}