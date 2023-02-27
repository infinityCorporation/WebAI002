import * as React from 'react';
import './PricingComp.css'
import { Outlet, Link } from 'react-router-dom';

export default function PricingComponent() {
    return(
        <div 
            className='mainGrid'
            style={{
                height: 400,
                width: '60%',
                position: 'relative',
                top: 200,
                left: '20%',
                border: '2px solid black',
                borderRadius: 15,
                fontFamily: 'Inter',
                
            }}
        >
            <div
                className='personalAcc'
                style={{
                    height: 400,
                    width: '50%',
                    position: 'relative',
                    top: -21.5,
                    left: 0,
                    textAlign: 'center',
                    backgroundColor: '#333333',
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                }}
            >
                <h1 
                    style={{
                        position: 'relative',
                        top: 25,
                        height: 60,
                        color: "#4ad388",
                        }}
                >
                    Personal
                </h1>
                <div 
                    className='personalFeat'
                    style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'normal',
                        position: 'relative',
                        top: 3.5,
                        color: 'white',
                        height: 200,
                    }}
                >
                    <div
                        style={{
                            width: '80%',
                            position: 'relative',
                            left: '10%',
                            top: 20,
                            lineHeight: 1.5
                        }}
                    >
                        <p> - Generate and Create Formulas <br/>
                         - Have Formulas and Complex Problems Explained <br/>
                         - Get Access to our Excel Spreadsheet Plugin <br/>
                         - 200 Requests per Month </p>
                    </div>
                </div>
                <div 
                    className='personalbut'
                    style={{
                        height: 117,
                        borderBottomLeftRadius: 13.5
                    }}
                >
                    <Link
                        to="/"
                    >
                    <button
                        style={{
                            position: 'relative',
                            top: 40,
                            height: 60,
                            width: 200,
                            fontFamily: 'Inter',
                            fontSize: 20,
                            fontWeight: 600,
                            background: '#333333',
                            border: 'white solid',
                            color: 'white',
                            borderRadius: 15,
                        }}
                    >
                        Sign Up
                    </button>
                    </Link>
                </div>
            </div>
            <div
                className='professionalAcc'
                style={{
                    height: 400,
                    width: '49.8%',
                    position: 'relative',
                    top: -443.0,
                    left: '50%',
                    borderLeft: '2px solid black',
                    textAlign: 'center',
                    backgroundColor: '#333333',
                    borderTopRightRadius: 12,
                    borderBottomRightRadius: 12,
                }}
            >
                <h1
                    style={{
                        position: 'relative',
                        top: 25,
                        height: 60,
                        color: "#4ad388",
                        }}
                >
                    Professional
                </h1>
                <div 
                    className='personalFeat'
                    style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'normal',
                        position: 'relative',
                        top: 3.5,
                        height: 200
                    }}
                >
                    <div
                        style={{
                            width: '80%',
                            position: 'relative',
                            left: '10%',
                            top: 20,
                            lineHeight: 1.5,
                            color: 'white',
                        }}
                    >
                        <p> - Clean and Prepare Large Amounts of Data <br/>
                         - Summarize and Generate Text <br/>
                         - Access to Microsoft Excel and Google Sheets Plugins<br/>
                         - 1000 Requests per Month </p>
                    </div>
                </div>
                <div 
                    className='personalbut'
                    onClick={() => {
                        document.getElementById('tierInfo').scrollIntoView()
                    }}
                    style={{
                        height: 117,
                        borderBottomRightRadius: 13.5
                    }}
                >
                    <button
                        style={{
                            position: 'relative',
                            top: 40,
                            height: 60,
                            width: 200,
                            fontFamily: 'Inter',
                            fontSize: 20,
                            fontWeight: 600,
                            background: '#333333',
                            border: 'white solid',
                            color: 'white',
                            borderRadius: 15
                        }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}