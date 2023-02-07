import * as React from 'react';
import { useState } from 'react';
import './formulaGen.css';

export default function FormulaGen() {
    const [data, setData] = useState("");
    const [ready, setReady] = useState(false);
    const [type, setType] = useState("");
    const [input, setInput] = useState("");
    const [request, setRequest] = useState();
  
    const handleInputChange = (event) => {
      setInput(event.target.value);
    };
  
    const handleBuild = () => {
      console.log(type + " " + input);
      setRequest({
        type: type,
        input: input
      });
      console.log(request);
    };
  
    async function fetchCall() {
      setData("");
      if ( request !== undefined ) {
        await fetch("https://aiserver.herokuapp.com/dev_aigen", {
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
    };
  
    return (
      <div className="formulaMain">
        <div className='mainContainer'>
            <div className='titleSection'>
            <h2 className='mainTitle'>
                Formula Creator
            </h2>
            </div>
            <div className='buttonSection'>
            <h4 className='formatTitle'>
                Is this a formula for excel or sheets?
            </h4>
            <button 
                className='excelButton'
                onClick={() => {
                setType("Excel");
                }}
                >
                Excel
            </button>
            <button 
                className='sheetsButton'
                onClick={() => {
                setType("Sheets");
                }}
                >
                Sheets
            </button>
            </div>
            <div className='inputSection'>
            <h4 className='inputLabel'>
                What should the formula do?
            </h4>
            <textarea 
                type="text" 
                placeholder="Explain your forumla here..." 
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
                handleBuild();
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
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
      </div>
    );
}