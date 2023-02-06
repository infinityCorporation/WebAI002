import * as React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const [ready, setReady] = useState(false);
  const [type, setType] = useState("");
  const [input, setInput] = useState("");
  const [request, setRequest] = useState({});

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  async function submitClick() {
    if (type) {
      if (input) {
        const requestBuild = {
          type: type,
          input: input
        };
        setRequest(requestBuild);
        console.log(JSON.stringify(request));
      } else {
        console.log("error: no input selected");
      };
    } else {
      console.log("error: no type selected");
    };

    if (request) {
      await fetch("https://aiserver.herokuapp.com/dev_req", {
        body: JSON.stringify(request)
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setReady(true);
        })
        .catch((err) => {
          console.log({ message: err.message })
        })
    }
  };

  return (
    <div className="App">
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
          placeholder="Explain your forumla here" 
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
            submitClick();
          }}
          >
          Submit
        </button>
      </div>
      <div className='outputSection'>
        <h3 className='outputLabel'>
          Formula Output
        </h3>
        <textarea 
          type="text" 
          placeholder={ ready ?  data.text : "Nothing yet..."}
          rows='4'
          cols='50'
          className='mainOutput'
          readOnly
          />
      </div>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
    </div>
  );
}

export default App;
