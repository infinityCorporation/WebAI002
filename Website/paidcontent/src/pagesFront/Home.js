import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import Image from './sheet2.jpg';
import { useCallback, useState } from 'react';
import { db } from '../auth/firebase';
import { doc, setDoc } from 'firebase/firestore';
import './Home.css';
import RightArrow from './Icons/RightArrow.png';
import { useNavigate } from 'react-router-dom';

export default function HomeFront() {
    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

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
                <div id="frontPageDiv"
                    style={{
                        position: 'relative',
                        top: 100,
                        width: '100%',
                        height: 800,
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            top: 125,
                            width: '100%',
                            height: 500,
                            justifyContent: 'center'
                        }}
                    >
                        <div id="frontTextDiv"
                            style={{
                                width: '45%',
                            }}
                        >
                            <h1 style={{ width: "80%", fontSize: 42}}>
                                Supercharge Your <span style={{color: '#4ad388', fontSize: 47}}>Spreadsheets</span> with <span style={{ color: "#4ad388", fontSize: 47}}>AI</span>.
                            </h1>
                            <h3 
                                style={{ 
                                    fontSize:25, 
                                    width: '60%',
                                    position: 'relative',
                                    top: 12,
                                    lineHeight: 1.25
                                }}
                            >
                                The AI-Driven Partner for Spreadsheet Productivity. <br/> Save <span style={{ color: '#008FFF' }}>Time</span>. Do <span style={{ color: "#008FFF" }}>More</span>.
                            </h3>
                            <button
                                id="signUpToday"
                                onClick={() => {
                                    navigate("/createAccount");
                                }}
                            >
                                <h5
                                    style={{
                                        position: 'relative',
                                        top: -17.5,
                                        fontSize: 19,
                                        marginRight: 5
                                    }}
                                >
                                    Join Today 
                                </h5>
                                <img src={RightArrow} alt="icon" height="30" width="50" 
                                    style={{ 
                                        position: 'relative', 
                                        top: 13.5,
                                    }}
                                />
                            </button>
                        </div>
                        <div id="frontContentDiv"
                            style={{
                                border: '1px solid grey',
                                height: 365,
                                width: '39%',
                                backgroundColor: 'black',
                                position: 'relative',
                                top: 20,
                            }}
                        >
                            
                        </div>
                    </div>
                </div>
                <div id="styledDiv">
                    <div id="subFrontDiv">
                        <h1 id="subHeaderOne">
                            Revolutionize Your Workflow <span style={{ color: '#008fff' }}>Today</span>.
                        </h1>
                        <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center', position: 'relative', top: 50 }}>
                            <div>
                                <div id="visualsOne">

                                </div>
                                <div id="visualsTwo">
                                    <h2 id="quote" style={{ width: '75%'}}>
                                        "All the Tools you need, at your Fingertips."
                                    </h2>
                                </div>
                            </div>
                            <div id="subTextDes" style={{ justifyContent: 'center'}}>
                                <h3 style={{ position: 'relative', top: '20%'}}>
                                    Create Formulas, Clean Data, Summarize Text, Explain Problems, Design Automations, and the list goes on! <br/> <br/>
                                    Whether you are a professional, a student, or simply someone who uses spreadsheets, Array Assistant can help you!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="thirdFrontDiv">

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