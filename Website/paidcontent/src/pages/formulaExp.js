import * as React from 'react';
import { useState, useCallback } from 'react';
import './formulaExp.css';

export default function FormulaExp() {
    const [data, setData] = useState("");
    const [ready, setReady] = useState(false);
    const [request, setRequest] = useState();
  
    const handleInputChange = (event) => {
      setRequest({
        equation: event.target.value
      });
    };
  
    const fetchCall = useCallback(async () => {
      setData("");
      if ( request !== undefined ) {
        await fetch("https://aiserver.herokuapp.com/dev_aiexp", {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(request)
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Actual data from the request");
                console.log(data);
                console.log(JSON.stringify(data));
                setData(data);
                setReady(true);
              })
              .catch((err) => {
                console.log({ message: err.message })
              });
      } else {
        console.log("error: request does not exist");
      }
    });
  
    return (
      <div className="formulaMain">
        <div className='mainContainer'>
            <div className='titleSection'>
                <h2 className='mainTitle'>
                    Formula Explainer
                </h2>
            </div>
            <div className='inputSection'>
                <h4 className='inputLabel'>
                    What formula do you need explained?
                </h4>
                <textarea 
                    type="text" 
                    placeholder="Enter the forumla here..." 
                    rows='4'
                    cols='50'
                    className='mainInput'
                    onChange={handleInputChange}
                />
            </div>
            <div className='submitButtonDiv'>
                <button 
                    className='submitButton'
                    onClick={() => {
                    setReady(false);
                    fetchCall();
                    }}
                    >
                    Submit
                </button>
            </div>
            <div className='outputSection'>
                <h4 className='outputLabel'>
                    Formula Output:
                </h4>
                <textarea 
                    type="text" 
                    placeholder='Input something above!'
                    value={ ready ?  data.choices[0].text : null }
                    rows='4'
                    cols='50'
                    className='mainOutput'
                    readOnly
                    />
                </div>
        </div>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </div>
)};
