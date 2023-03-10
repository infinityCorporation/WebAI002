import * as React from 'react';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Gen() {
    const [request, setRequest] = useState();
    const [ready, setReady] = useState(false);
    const [dataGen, setDataGen] = useState();

    const buildRequest = useCallback((event) => {
        setRequest({
            type: 'Excel',
            input: event.target.value
        });
        console.log(event.target.value);
    });
    
    const fetchRequest = useCallback( async () => {
        await axios.post("https://aiserver.herokuapp.com/dev_aigen", {
            type: request.type,
            input: request.input
        })
            .then((response) => {
                console.log(response);
                setDataGen(response.data);
                setReady(true);
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    });

    
    const changeVal = () => {
        try {
            Excel.run(async (context) => {

                const range = context.workbook.getSelectedRange();

                range.load("address");

                if (dataGen) {
                    const preVal = dataGen.choices[0].text;
                    const postVal = preVal.substring(preVal.indexOf("="));
                    range.values = postVal;
                } else {
                    range.values = "Please enter an input with a valid response!";
                }

                await context.sync();
                console.log(`The range address was ${range.address}.`);
            });
        } catch (err) {
            console.log({ message: err.message });
        }
    }
    
    return(
        <div className='container'>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>
            <div className="mainGen"> 
                <div className="headDiv">
                    <h2 id="title">
                        Formula Generator
                    </h2>
                </div>
                <div className="bodyDiv">
                    <div className="inputDiv">
                        <h4 className="inputTitle">
                        What should your formula do?
                        </h4>
                        <textarea 
                            type='text' 
                            className="input" 
                            placeholder='Explain Your Formula...'
                            rows='4'
                            cols='40'
                            onChange={(text) => {
                                buildRequest(text);
                            }} 
                            />
                        <button 
                            className="submitButton"
                            onClick={() => {
                                fetchRequest();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="outputDiv">
                        <h5 className="outputTitle">
                        Your formula is:
                        </h5>
                        <input className="output" type="text" value={ !ready ? "No Input Yet" : dataGen.choices[0].text }/>
                        <button 
                            className="copyButton"
                            onClick={() => {
                                changeVal();
                            }}
                        >
                        Copy to Selected Cell
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}