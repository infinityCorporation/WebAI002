import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import "./Features.css";
import ai from './cpu.png';
import int from './vector.png';
import form from './folder.png';

export default function Features() {
    const titleAI = "Artificial Intelligence";
    const desAI = "Generate formulas, solve complex problems, and work faster with the help of our Artificial Intelligence.";
    const titleInt = "Integration";
    const desInt = "Integrate all our best AI features directly into your spreadsheet with an Excel Plugin.";
    const titleForm = "Formula Bank";
    const desForm = "Keep the formulas you use the most right at your fingertips while using less requests with the Formula Bank!";

    return(
        <div className='featuresMain'>
            <div
                className='featuresContent'
                style={{
                    height: 600,
                    width: '100%',
                    position: 'relative',
                    top: 150,
                    justifyContent: 'center',
                    display: 'flex',
                    background: 'white'
                }}
            >
                <div>
                    {cardDisplay(titleAI, desAI, ai)}
                </div>
                <div>
                    {cardDisplay(titleInt, desInt, int)}
                </div>
                <div>
                    {cardDisplay(titleForm, desForm, form)}
                </div>
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

function cardDisplay(title, description, src) {
    return(
        <div
            style={{
                height: 450,
                width: 350,
                position: 'relative',
                borderRadius: 15,
                fontFamily: 'Inter',
                textAlign: 'center',
                border: '2px solid white',
                margin: 10,
                alignItems: 'center',
                background: '#333333'
            }}
        >
            <img
                src={src}
                height="200" 
                width="200"
                style={{
                    position: 'relative',
                    top: 40
                }}
            />
            <h2 style={{position: 'relative', top: 40, color: '#4ad388'}}>
                {title}
            </h2>
            <h4 style={{position: 'relative', top: 40, color: 'white', fontWeight: 200, margin: '5%'}}>
                {description}
            </h4>
        </div>
    )
}