import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import PricingComponent from './PricingComp';
import './Pricing.css';
import persIcon from './user.png';
import proIcon from './briefcase.png';
import entIcon from './flask.png';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function PricingFront() {

    const perTitle = "Personal";
    const perDes1 = "- Generate and Explain Formulas";
    const perDes2 = "- Have Complex Problems Explained";
    const perDes3 = "- Get access to the Excel Plugin";
    const perDes4 = "- Up to 250 Requests per Month";
    const perPrice = "$9.99";
    const perLink = "/personal";
    const perAvail = "Buy";

    const proTitle = "Professional";
    const proDes1 = "- Clean Data in Spreadsheets";
    const proDes2 = "- Create Item Lists and Summaries";
    const proDes3 = "- Create Spreadsheet Automations";
    const proDes4 = "- Up to 1000 Requests per Month";
    const proPrice = "$24.99";
    const proLink = "/pricing";
    const proAvail = "Coming Soon";

    const entTitle = "Enterprise";
    const entDes1 = "- Save Your Employees Time";
    const entDes2 = "- Save the Company Money";
    const entDes3 = "- Scale our Solutions on a new Level";
    const entDes4 = "- Up to Unlimited Requests";
    const entPricing = "$150.00";
    const entLink = "/features";
    const entAvail = "Contact Us";

    return(
        <div className='pricingMain'>
            <div>
                <div id='pricingMainContent'
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        position: 'relative',
                        top: 125
                    }}
                >
                    {displayProduct(perTitle, perDes1, perDes2, perDes3, perDes4, perPrice, perLink, perAvail)}
                    {displayProduct(proTitle, proDes1, proDes2, proDes3, proDes4, proPrice, proLink, proAvail)}
                    {displayProduct(entTitle, entDes1, entDes2, entDes3, entDes4, entPricing, entLink, entAvail)}
                </div>
            </div>
            <div
                className='infoSection'
                style={{
                    width: '102%',
                    height: 250,
                    position: 'absolute',
                    top: 875,
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

function displayProduct(name, des1, des2, des3, des4, price, link, avail) {
    const [re, setRe] = useState(false);

    return(
        <div
        >
            { !re ? (
                <div>
                    <div 
                        style={{
                            height: 500,
                            width: 350,
                            border: '1px solid white',
                            backgroundColor: '#333333',
                            color: 'white',
                            borderRadius: 10,
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            margin: 20,
                        }}
                    >
                        <h1
                            style={{
                                borderBottom: '1px solid white',
                                width: '80%',
                                position: 'relative',
                                left: '10%'
                            }}
                        >
                            {name}
                        </h1>
                        <div
                            style={{
                                position: 'relative',
                                top: 30
                            }}
                        >
                            <h4>
                                {des1}
                            </h4>
                            <h4>
                                {des2}
                            </h4>
                            <h4>
                                {des3}
                            </h4>
                            <h4>
                                {des4}
                            </h4>
                        </div>
                        <h2
                            style={{
                                position: 'relative',
                                top: 60,
                                fontSize: 30
                            }}
                        >
                            {price}
                        </h2>
                        <h5
                            style={{
                                position: 'relative',
                                top: 35
                            }}
                        >
                            Monthly
                        </h5>
                        <button 
                            id="prodPurchase"
                            onClick={() => {
                                setRe(true)
                            }}
                        >
                            {avail}
                        </button>
                        
                    </div>
                </div>
            ) : (
                <Navigate to={link} />
            )}
            <Outlet />
        </div>
    )
}