import * as React from 'react';
import FormulaGen from './formulaGen';
//import FormulaExp from './formulaExp';
import './App.css';

function App() {
  return(
    <div className='app'>
      <div className='main'>
        <FormulaGen/>
      </div>
      <div className='nav'>
        <div className='navTop'>
          <h2 className='headerTop'>
            Array Assistant
          </h2>
        </div>
          <div className='list'>
            <button className='formGen'>
              <h3 className='formGenTitle'>
                Formula Creator
              </h3>
            </button>
            <button className='formExp'>
              <h3 className='formExpTitle'>
                Formula Explainer
              </h3>
            </button>
          </div>
        <div className='accountSpace'>
          <h3 className='username'>
            User Account
          </h3>
        </div>
      </div>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
    </div>
  )
}

export default App;
