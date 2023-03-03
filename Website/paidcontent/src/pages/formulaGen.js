import * as React from 'react';
import { useState, useCallback } from 'react';
import './formulaGen.css';

export default function FormulaGen() {
    const [data, setData] = useState("");
    const [ready, setReady] = useState(false);
    const [type, setType] = useState("");
    const [input, setInput] = useState("");
    const [request, setRequest] = useState();
    const [excelToggle, setExcelToggle] = useState(false);
    const [sheetsToggle, setSheetsToggle] = useState(false);

    const handleInputChange = useCallback((event) => {
      setInput(event.target.value);
      setRequest({
        type: type,
        input: event.target.value
      });
    });

    const handleExcelClick = useCallback(() => {
      setExcelToggle(!excelToggle);
      setSheetsToggle(false);
      setRequest({
        type: type,
        input: input
      });
    });

    const handleSheetsClick = useCallback(() => {
      setSheetsToggle(!sheetsToggle);
      setExcelToggle(false);
      setRequest({
        type: type,
        input: input
      });
    });
  
    const fetchCall = useCallback(async () => {
      setData("");
      setRequest({
        type: type,
        input: input
      });
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
    });

    const copyFunction = useCallback( async () => {
      navigator.clipboard.writeText(data.choices[0].text);
    });
  
    return (
      <div className="formulaMain">
        <div className='mainContainer'>
            <div className='titleSection'>
            <h2 className='mainTitle'
              style={{
                fontFamily: 'Inter'
              }}
            >
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
                  handleExcelClick();
                }}
                style={{ 
                  backgroundColor: excelToggle ? '#6acff1' : 'white',
                  color: excelToggle ? "white" : "black",
                  border: excelToggle ? '2px solid #6acff1' : '2px solid black'
                }}
                >
                Excel
            </button>
            <button 
                className='sheetsButton'
                onClick={() => {
                  handleSheetsClick();
                  setType("Sheets");
                }}
                style={{
                  backgroundColor: sheetsToggle ? '#6acff1' : 'white',
                  color: sheetsToggle ? "#white" : "black",
                  border: sheetsToggle ? '2px solid #6acff1' : ' 2px solid black'
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
              value={ ready ?  data.choices[0].text : null}
              rows='4'
              cols='50'
              className='mainOutput'
              readOnly
            />
              <div>
                <button id="copyButton"
                  onClick={() => {
                    copyFunction()
                  }}
                >
                  Copy Formula
                </button>
              </div>
            </div>
        </div>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </div>
    );
}