import * as React from 'react';
import './Pricing.css';
import PricingComponent from '../pagesFront/PricingComp';

export default function Pricing() {
    return(
        <div className='mainPricing'>
            <h2 className='pricingTop'>
                Pricing
            </h2>
            <div className='pricingChart'>
                <PricingComponent />
            </div>
        </div>
    )
}