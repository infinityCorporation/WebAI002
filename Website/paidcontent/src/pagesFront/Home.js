import * as React from 'react';
import BarNav from './BarComponent';
import './Home.css';

export default function HomeFront() {
    return(
        <div className='homeContainer'>
            <BarNav />
            <h3>
                Welcome to Array Assistant!
            </h3>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}