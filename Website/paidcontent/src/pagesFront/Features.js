import * as React from 'react';
import BarNav from './BarComponent';
import "./Features.css";

export default function Features() {
    return(
        <div className='featuresMain'>
            <BarNav />
            <h3>
                This is the Features Page
            </h3>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}