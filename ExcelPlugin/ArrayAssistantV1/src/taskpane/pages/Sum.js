import React from 'react';
import "./Sum.css";
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import axios from 'axios';

export default function Sum() {
    const [ready, setReady] = useState(false);
    const [request, setRequest] = useState();
    const [dataSum, setDataSum] = useState();

    const buildRequest = useCallback((e) => {
        setRequest({
            input: e.target.value
        })
        console.log(e.target.value);
    })

    const buildFromSheet = useCallback(() => {
        try {
            Excel.run(async (context) => {
                const range = context.workbook.getSelectedRange();

                range.load("values");

                await context.sync();

                setRequest({
                    input: range.values
                })
            })
        } catch (err) {
            console.log({ message: err.message });
        };
    });

    const fetchRequest = useCallback(async () => {
        await axios.post("https://aiserver.herokuapp.com/summarize", {
            input: request.input
        })
            .then((response) => {
                setDataSum(response.data);
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

                range.load("values");

                if (dataSum) {
                    range.values = dataSum.choices[0].text;
                } else {
                    range.values = "Please submit an input";
                };

                await context.sync();
            })
        } catch (err) {
            console.log({ message: err.message });
        }
    }

    return (
        <div>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>
            <h2>
                Summarize large amounts of text.
            </h2>
            <div>
                <h5>
                    1. What text do you need summarized?
                </h5>
                <input type='text' id='sumTextInput' onChange={(text) => buildRequest(text)}/>
                <button id="sumTextButton" onClick={() => buildFromSheet()}>
                    Select from Cell
                </button>
            </div>
            <div>
                <h5>
                    2. Generate Summary.
                </h5>
                <button id="sumGenButton" onClick={() => fetchRequest()}>
                    Generate
                </button>
            </div>
            <div>
                <h5>
                    3. Your Generated Summary:
                </h5>
                <textarea readOnly type='text' value={ !ready ? 'No Input Submitted' : dataSum.choices[0].text } />
                <button id="sumCopyButton" onClick={() => changeVal()}>
                    Copy to Cell
                </button>
            </div>
        </div>
    )
}
