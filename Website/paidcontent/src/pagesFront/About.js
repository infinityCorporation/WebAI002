import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import './About.css'

export default function About() {
    return(
        <div 
            className='featuresMain'
            style={{
                fontFamily: 'Inter'
            }}
        >
            <div 
                className='aboutContent'
                style={{
                    width: '80%',
                    position: 'relative',
                    top: 150,
                    left: '5%'
                }}
            >
                <h1
                    style={{
                        borderBottom: '1px solid black',
                        width: '50%'
                    }}
                >
                    About Us
                </h1>
                <h4
                    style={{
                    }}
                >
                    Array Assistant is a startup with one core goal. Our mission is to make spreadsheets easier and faster to use for everyone through the power of Artificial Intelligence. Through program add-ins and easy to use interfaces, we give you access to the power of our brand new AI to help you boost your productivity.
                <br/>
                <br/>
                    The Array Assistant program can help you solve complex problems, create tricky formulas, clean and sort messy data, and much more. We offer additional tools and resources which means that you can get the most out of your spreadsheets!
                </h4>
            </div>
            <div
                className='infoSection'
                style={{
                    width: '100%',
                    height: 250,
                    position: 'relative',
                    top: 250,
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