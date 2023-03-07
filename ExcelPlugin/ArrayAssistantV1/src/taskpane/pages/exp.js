import * as React from 'react';
import { useState, useCallback } from 'react';
import './exp.css';
import { Link } from 'react-router-dom';

export default function Exp() {
    const [type, setType] = useState("none");
    const [text, setText] = useState("")
    const [request, setRequest] = useState();
    const [dataExp, setDataExp] = useState();
    const [ready, setReady] = useState(false);

    const setFormType = useCallback(() => {
        setType("Formula");
    });

    const setLongType = useCallback(() => {
        setType("Long");
    });

    const setTextInput = useCallback((event) => {
        setText(event.target.value)
    });

    const expRequestBuilder = useCallback(() => {
        if (type == "none") {
            setType("Long")
            setRequest({
                equation: text
            });
        } else {
            setRequest({
                equation: text
            })
        }
    });

    const fetchRequest = useCallback( async () => {
        expRequestBuilder();
        if (type == "Formula") {
            await fetch("https://aiserver.herokuapp.com/dev_aiexp", {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(request)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setDataExp(data);
                    setReady(true);
                })
                .catch((err) => {
                console.log({ message: err.message });
                })
        } else if (type == "Long") {
            await fetch("https://aiserver.herokuapp.com/dev_aiexplong", {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(request)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setDataExp(data);
                    setReady(true);
                })
                .catch((err) => {
                console.log({ message: err.message });
                })
        }
    });

    return(
        <div className='expMain'>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>
            <div className='expInputStart'>
                <h3 className='expTitle'>
                    Explainer
                </h3>
                <h5 className='label1'>
                    What do you need Explained?
                </h5>
                <button 
                    className='formBut'
                    onClick={() => {
                        setFormType();
                    }}
                >
                    Formula
                </button>
                <button 
                    className='probBut'
                    onClick={() => {
                        setLongType();
                    }}
                >
                    Problem
                </button>
            </div>
            <div className='expInputMainDiv'>
                <h5 className='expMainInputTitle'>
                    Enter what you need Explained:
                </h5>
                <textarea 
                    type='text' 
                    className="input" 
                    placeholder='What Needs Explaining...'
                    rows='4'
                    cols='40'
                    onChange={(text) => {
                        setTextInput(text);
                    }} 
                    />
                <button 
                    className='expInputSubmit'
                    onClick={() => {
                        fetchRequest();
                    }}
                >
                    Submit
                </button>
            </div>
            <div className='expMainOutputDiv'>
                <h5 className='expOutputTitle'>
                    Answer:
                </h5>
                <textarea
                    type='text' 
                    className="input" 
                    value={ !ready ? "Enter an input above!" : dataExp.choices[0].text }
                    rows='4'
                    cols='40'
                />
            </div>
        </div>
    )
}