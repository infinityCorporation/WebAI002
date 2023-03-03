import * as React from 'react';
import './Home.css';

export default function Home() {

  return(
    <div className='app'>
      <div className='titleArea'>
        <h1 className='title'>
          Array Assistant
        </h1>
      </div>
      <div className='intro'>
          <h3 className='introText'>
            From formula generators and explainers to data cleaners to spreadsheet plugins, we have everything necessary to make your work easier!
          </h3>
        </div>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
    </div>
  )
}
