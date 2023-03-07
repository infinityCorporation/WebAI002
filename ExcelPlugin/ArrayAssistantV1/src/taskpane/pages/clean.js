import * as React from 'react';
import './clean.css';
import { Link } from 'react-router-dom';

export default function Clean() {
    return(
        <div className='cleanDiv'>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>
            <h3 className='cleanTitle'>
                Data Cleaning
            </h3>
            <h5 className='cleanIn1'>
                1. Select the Data you want cleaned.
            </h5>
            <h5 className='cleanIn2'>
                2. Click the clean button below!
            </h5>
            <button className='cleanBut'>
                Basic Clean
            </button>
        </div>
    )
}