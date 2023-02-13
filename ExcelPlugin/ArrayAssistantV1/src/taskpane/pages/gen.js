import * as React from 'react';
import { useState, useCallback } from 'react';

export default function Gen() {
    const [request, setRequest] = useState();
    const [data, setData] = useState('');
    //const [equation, setEquation] = useState('');
    const [ready, setReady] = useState(false);

    const buildRequest = useCallback((event) => {
        setRequest({
            type: 'Excel',
            input: event.target.value
        });
        console.log(event.target.value);
    });
    
    const fetchRequest = useCallback( async () => {
        await fetch("https://aiserver.herokuapp.com/dev_aigen", {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setReady(true);
            })
            .catch((err) => {
            console.log({ message: err.message });
            })
    });

    
    const changeVal = () => {
        try {
            Excel.run(async (context) => {

                const range = context.workbook.getSelectedRange();

                range.load("address");

                if (data) {
                    range.values = data.choices[0].text;
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
        <div className="main">
        <div className="headDiv">
          <h3 className="title">
            Array Assistant
          </h3>
        </div>
        <div className="bodyDiv">
          <div className="inputDiv">
            <h5 className="inputTitle">
              What should your formula do?
            </h5>
            <input 
                type='text' 
                className="input" 
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
            <input className="output" type="text" value={ !ready ? "No Input Yet" : data.choices[0].text }/>
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
    )
}