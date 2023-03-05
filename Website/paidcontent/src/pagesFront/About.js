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
                    height: 800,
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
                <h3
                    style={{
                    }}
                >
                    At Array Assistant, we're all about making your life easier. Our startup was founded with one core mission in mind: to help people like you work smarter, not harder. We believe that spreadsheets are one of the most powerful tools out there, but we also know that they can be time-consuming and frustrating to use. That's why we've developed a cutting-edge AI program that makes working with spreadsheets faster and more intuitive than ever before.
                <br/>
                <br/>
                    Our program is designed to help you solve complex problems, create tricky formulas, clean and sort messy data, and much more. We've also developed additional tools and resources that can help you get the most out of your spreadsheets. With Array Assistant, you'll be able to work more efficiently and effectively, whether you're using spreadsheets for work or for personal projects.
                <br/>
                <br/>
                    But don't just take our word for it. Try out our program for yourself and see the difference it can make. We're confident that once you see how easy and powerful it is to work with spreadsheets using Array Assistant, you'll wonder how you ever managed without it. So why wait? Sign up today and start working smarter, not harder, with Array Assistant.
                </h3>
            </div>
            <div
                className='infoSection'
                style={{
                    width: '102%',
                    height: 250,
                    position: 'relative',
                    top: 250,
                    left: '-1%',
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