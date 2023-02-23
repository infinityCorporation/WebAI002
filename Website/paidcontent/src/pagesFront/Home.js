import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import Image from './sheet2.jpg';
import { useCallback, useState } from 'react';
import { db } from '../auth/firebase';
import { doc, setDoc } from 'firebase/firestore';
import './Home.css';

export default function HomeFront() {
    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState('');

    const valueHandler = useCallback((event) => {
        setEmail(event.target.value);
    })

    const logEmail = useCallback(async () => {
        try {
            await setDoc(doc(db, 'emails', email), {});
        } catch (err) {
            console.log({ message: err.message });
        }
    })

    return(
        <div className='homeContainer'>
            <div className='pageContainer'>
                <div 
                    className='contentDiv'
                    style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        height: 700,
                    }}
                >
                    <img src={Image} alt="MainVisual" width="500" height="200" 
                        style={{
                            position: 'relative',
                            top: 300
                        }}
                    />
                    <h1
                        style={{
                            textAlign: 'center',
                            position: 'relative',
                            top: 300,
                            fontSize: 42,
                        }}
                    >
                        <span style={{color: '#4ad388'}}>Spreadsheet Productivity</span> Boosted with <span style={{color: '#4ad388'}}>AI</span>
                    </h1>
                    <div 
                        className='underline'
                        style={{
                            height: 1.5,
                            width: '60%',
                            backgroundColor: 'black',
                            position: 'relative',
                            top: 280,
                            left: '20%'
                        }}
                    ></div>
                    <h2
                        id='waitlistTop'
                        style={{
                            position: 'relative',
                            top: 265
                        }}
                    >
                        Save Time, Do More.
                    </h2>
                </div>
                <div 
                    className='signUpForm'
                    id='waitlistForm'
                    style={{
                        width: '90%',
                        height: 500,
                        position: 'relative',
                        top: 50,
                        left: '5%',
                        borderRadius: 15,
                        margin: 0,
                        backgroundColor: '#333333',
                        color: 'white',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <p
                        style={{
                            position: 'relative',
                            top: '10%',
                            fontSize: 45,
                            fontWeight: 200
                        }}
                    >
                        Array Assistant is Launching <span style={{color: '#4ad388'}}> Soon</span>!
                    </p>
                    <h2
                        style={{
                            width: '60%',
                            position: 'relative',
                            top: '12%',
                            left: '20%',
                            fontWeight: 300
                        }}
                    >
                        <span style={{color: '#4ad388'}}>Until then... </span>Sign Up for our waiting list to get updated when we launch. You'll also get
                        an exclusive promo code for a launch discount!
                    </h2>
                    { !submit ? (
                    <>
                        <input 
                            type='text' 
                            className='emailInput'
                            placeholder='Email...'
                            value={email}
                            onChange={(event) => valueHandler(event)}
                            style={{
                                position: 'relative',
                                top: '15%',
                                borderRadius: 15,
                                height: 40,
                                width: 400,
                                border: '1px solid white',
                                fontFamily: 'Inter',
                                fontSize: 20,
                                textAlign: 'center'
                            }}
                        />
                        <div
                            style={{
                                position: 'relative',
                                top: '20%'
                            }}
                        >
                            <button
                                className='joinButton'
                                onClick={() => {
                                    setSubmit(!submit);
                                    logEmail();
                                }}
                                style={{
                                    borderRadius: 15,
                                    height: 45,
                                    width: 400,
                                    border: '1px solid black',
                                    fontFamily: 'Inter',
                                    fontSize: 22.5,
                                    backgroundColor: 'white'
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </>
                    ) : (
                        <>
                            <h2
                                style={{
                                    position: 'relative',
                                    top: '20%'
                                }}
                            >
                                Thanks For Signing Up!
                            </h2>
                        </>
                    ) }
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
            </div>
            <BarNav />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}