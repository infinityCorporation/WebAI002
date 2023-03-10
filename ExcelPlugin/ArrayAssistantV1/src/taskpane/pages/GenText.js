import React from 'react';
import './GenText.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useCallback } from 'react';

export default function GenText() {
    const [request, setRequest] = useState({
        subject: "",
        length: "100"
    });
    const [subject, setSubject] = useState();
    const [length, setLength] = useState("100");
    const [ready, setReady] = useState(false);
    const [dataGenText, setDataGenText] = useState();

    const buildRequestSubject = useCallback((e) => {
        setSubject(e.target.value);
        console.log(e.target.value);
    });

    const buildRequestLength = useCallback((e) => {
        setLength(e.target.value);
        console.log(e.target.value);
    });

    const buildRequest = useCallback(() => {
        let request;
        if (subject) {
            request = {
                subject: subject,
                length: length
            }
            return request;
        } else {
            console.log("no subject given");
        };
    })

    const fetchRequest = useCallback( async () => {
        const request = buildRequest();
        await axios.post("https://aiserver.herokuapp.com/text_aigen", {
            subject: request.subject,
            length: request.length
        })
            .then((response) => {
                console.log(response);
                setDataGenText(response.data);
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

                if (dataGenText) {
                    const preVal = dataGenText.choices[0].text;
                    range.values = preVal;
                } else {
                    range.values = "Please Enter Input and Generate a Response.";
                }

                await context.sync();
                console.log(`The range address was ${range.address}.`);
            })
        } catch (err) {
            console.log({ message: err.message });
        };
    }

    return (
        <div>
            <Link
                to="/"
            >
                <h2>
                    Home
                </h2>
            </Link>
            <h2>
                Generate Text
            </h2>
            <h5>
                Generate Text from a given topic or subject. <br/>
            </h5>
            <div>
                <h5>
                    1. Enter Topic or Subject
                </h5>
                <input type="text" id="subjectInput" onChange={(text) => {buildRequestSubject(text);}}/>
                <button>
                    Copy from Cell
                </button>
            </div>
            <div>
                <h5>
                    2. Enter the Length of the Description
                </h5>
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <input type="number" id="subjectLength" onChange={(text) => {buildRequestLength(text);}}/>
                    <h5>
                        Words
                    </h5>
                </div>
            </div>
            <div>
                <button onClick={() => {fetchRequest();}}>
                    Generate
                </button>
            </div>
            <div>
                <h5>
                    3. Generated Text:
                </h5>
                <textarea type="text" readOnly id="subjectOutput" value={ !ready ? "No Input Yet" : dataGenText.choices[0].text} />
                <button onClick={() => {changeVal();}}>
                    Copy to Cell
                </button>
            </div>
        </div>
    )
}
