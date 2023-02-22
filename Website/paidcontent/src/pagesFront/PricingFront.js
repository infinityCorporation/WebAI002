import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import PricingComponent from './PricingComp';
import './Pricing.css';

export default function PricingFront() {
    return(
        <div className='pricingMain'>
            <div 
                className='pricingContentDiv'
                style={{
                    width: '100%',
                    height: 700
                }}
            >
                <PricingComponent />
            </div>
            <div
                className='infoSection'
                style={{
                    width: '100%',
                    height: 250,
                    position: 'relative',
                    top: 100,
                    left: 0,
                    color: 'white',
                    backgroundColor: '#1F1F1F' 
                }}
            >
                <BottomLinks />
            </div>
            <BarNav />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}