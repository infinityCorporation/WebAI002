import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import PricingComponent from './PricingComp';
import './Pricing.css';
import persIcon from './user.png';
import proIcon from './briefcase.png';
import entIcon from './flask.png';

export default function PricingFront() {

    const persTitle = "Personal Tier";
    const persDes = "The personal account is our the perfect account for everyday use. It includes some of our best productivity and AI tools! Routinely used by Students, Teachers, and People to manage their work, bills, and spreadsheets more easily!";
    const persDesTwo = "Try is today, we promise you won't be disappointed! Start spending less time looking at spreadsheets and more time doing what matters most to you."
    
    const proTitle = "Professional Tier";
    const proDes = "For those of you who want a little, or a lot, more out of your Array Assistant... This is the tier for you! With added features, such as more plugins, data cleaning, summarization, and much more, this can save any professional time.";
    const proDesTwo = "While this tier is still in development, you can sign up for our waitlist to be notified when it releases!";

    const entTitle = "Enterprise Tier";
    const entDes = "We are working hard to develop a full scale solution for Businesses around the world. Array Assistant can save your workers hours and your business money!";
    const entDesTwo = "If you are interested in getting Array Assistant for your business, contact us today to learn more and get a spot on the Enterprise waitlist!"
    return(
        <div className='pricingMain'>
            <div>
                <div 
                    className='pricingContentDiv'
                    style={{
                        width: '100%',
                        height: 700
                    }}
                >
                    <PricingComponent />
                </div>
                <div>
                    {bottomCardDisplay(persTitle, persDes, persDesTwo, persIcon)}
                    {bottomCardDisplay(proTitle, proDes, proDesTwo, proIcon)}
                    {bottomCardDisplay(entTitle, entDes, entDesTwo, entIcon)}
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

function bottomCardDisplay(tierTitle, tierDescription, tierDescriptionTwo, tierIcon) {
    return(
        <div 
            className='botCardDiv'
            style={{
                width: '65%',
                height: 260,
                backgroundColor: "#333333",
                color: 'white',
                position: 'relative',
                left: '16.5%',
                top: -50,
                borderRadius: 15,
                fontFamily: 'Inter',
                paddingLeft: 15,
                
            }}
        >
            <h2
                style={{
                    color: '#4ad388',
                    fontSize: 30,
                    position: 'relative',
                    top: 10
                }}
            >
                {tierTitle}
            </h2>
            <h4
                style={{
                    width: '60%',
                }}
            >
                {tierDescription}
            </h4>
            <h4
                style={{
                    width: '60%',
                }}
            >
                {tierDescriptionTwo}
            </h4>
            <img src={tierIcon} height="190px" width="190px"
                style={{
                    position: 'relative',
                    top: -180,
                    right: -700
                }}
            />
        </div>
    )
}