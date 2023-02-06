import * as React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [on, setOn] = useState(false);

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
          placeholder={ on ? "Nothing yet..." : "You clicked the button."}
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
