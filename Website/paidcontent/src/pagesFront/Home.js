import * as React from 'react';
import BarNav from './BarComponent';
import Image from './sheet2.jpg';
import './Home.css';

export default function HomeFront() {
    return(
        <div className='homeContainer'>
            <BarNav />
            <div 
                className='contentDiv'
                style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    height: 600,
                }}
            >
                <img src={Image} alt="MainVisual" width="500" height="200" 
                    style={{
                        position: 'relative',
                        top: 200
                    }}
                />
                <h1
                    style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: 200
                    }}
                >
                    Spreadsheet Productivity Boosted with AI
                </h1>
                <div 
                    className='underline'
                    style={{
                        height: 1.5,
                        width: '50%',
                        backgroundColor: 'black',
                        position: 'relative',
                        top: 185,
                        left: '25%'
                    }}
                ></div>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}