import * as React from 'react';
import './Home.css';
import { auth } from '../auth/firebase.js';

export default function Home() {

  console.log(auth.currentUser);
  const user = auth.currentUser;

  return(
    <div className='app'>
      <div className='titleArea'>
        <h1 className='title'>
          Welcome to Array Assistant
        </h1>
      </div>
      <div className='intro'>
          <h3 className='introText'>
            From formula generators and explainers to data cleaners to spreadsheet plugins, we have everything necessary to make your work easier!
          </h3>
        </div>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
    </div>
  )
}
