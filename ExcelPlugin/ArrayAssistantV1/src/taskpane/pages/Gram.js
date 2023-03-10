import React from 'react';
import './Gram.css';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import axios from 'axios';

export default function Gram() {
    const [ready, setReady] = useState(false);
    const [request, setRequest] = useState();
    const [dataGram, setDataGram] = useState();

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
        await axios.post("https://aiserver.herokuapp.com/grammar", {
            input: request.input
        })
            .then((response) => {
                setDataGram(response.data);
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

                if (dataGram) {
                    range.values = dataGram.choices[0].text;
                } else {
                    range.values = "Please submit an input";
                };

                await context.sync();
            })
        } catch (err) {
            console.log({ message: err.message });
        }
    };

    return (
        <div>
            <Link
                to="/"
            >
                <h2>
                    Home
                </h2>
            </Link>
            <div>
                <h2>
                    Grammar Checker
                </h2>
            </div>
            <div>
                <h5>
                    1. Enter or Select the Text where you need to check the grammar.
                </h5>
                <input type="text" id="gramInput" onChange={(text) => buildRequest(text)}/>
                <button id="gramInputButton" onClick={() => buildFromSheet()}>
                    Select from Cell
                </button>
            </div>
            <div>
                <h5>
                    2. Check the Grammar.
                </h5>
                <button id="generateGrammar" onClick={() => fetchRequest()}>
                    Check Grammar
                </button>
            </div>
            <div>
                <h5>
                    3. Here is your Checked text:
                </h5>
                <textarea type="text" readOnly id="grammarCheckOutput" value={ !ready ? "No Input Submitted." : dataGram.choices[0].text } />
                <button id="pasteOutputButton" onClick={() => changeVal()} >
                    Copy to Cell
                </button>
            </div>
        </div>
    )
}
