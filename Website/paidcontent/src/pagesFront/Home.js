import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Home.css';

export default function HomeFront() {
    return(
        <div className='homeContainer'>
            <div className='frontNav'>
                <h2 className='frontHeader'>
                    Array Assistant
                </h2>
                <ul className='linkRoutes'>
                    <li>
                        <Link
                            to='/'
                            className='frontPage'
                        >
                            <h3 className='homeFrontTitle'>
                                Array Assistant
                            </h3>
                        </Link>
                        <Link
                            to='/customerPortal'
                            className='testPage'
                        >
                            <h3 className='testTitle'>
                                To Customer Portal
                            </h3>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='mainFrontDiv'>
                <h1 className='titleHook'>
                    Spread Sheet Productivity Boosted With AI
                </h1>
            </div>
        </div>
    )
}