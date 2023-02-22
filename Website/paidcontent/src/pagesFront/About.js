import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import './About.css'

export default function About() {
    return(
        <div className='featuresMain'>
            <h2>
                This is the about page
            </h2>
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