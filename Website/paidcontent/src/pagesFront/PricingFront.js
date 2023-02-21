import * as React from 'react';
import BarNav from './BarComponent';
import './Pricing.css';

export default function PricingFront() {
    return(
        <div className='pricingMain'>
            <BarNav />
            <div>
                <h3>
                    This is the pricing page.
                </h3>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}