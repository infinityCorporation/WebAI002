import * as React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [on, setOn] = useState(false);
  const [data, setData] = useState("");
  const [ready, setReady] = useState(false);

  async function get() {
    console.log("Fetch has been called");
    await fetch("https://aiserver.herokuapp.com/dev_test", "GET")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dataJSON = JSON.stringify(data);
        setData(dataJSON);
        setReady(true);
      })
      .catch((err) => {
        console.log({ message: err.message })
    });
  }
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
        <button className='excelButton'>
          Excel
        </button>
        <button className='sheetsButton'>
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
        />
      </div>
      <div className='submitButtonDiv'>
        <button 
          className='submitButton'
          onClick={() => {
            get();
            setOn(!on);
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
          placeholder={ ready ?  data.message : "Nothing yet..."}
          rows='4'
          cols='50'
          className='mainOutput'
          />
      </div>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
    </div>
  );
}

export default App;
