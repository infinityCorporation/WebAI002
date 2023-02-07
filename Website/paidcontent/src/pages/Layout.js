import * as React from 'react'
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return(
        <>
            <nav className='nav' >
                <div className='navTop'>
                    <h2 className='headerTop'>
                        Array Assistant
                    </h2>
                </div>
                <ul className='list'>
                    <li>
                        <Link 
                            to="/"
                            className='home'
                            >
                                <h3 className='homeTitle'>
                                    Home
                                </h3>
                            </Link>
                    </li>
                    <li>
                        <Link 
                            to="/formulaGen"
                            className='formGen'
                            >
                                <h3 className='formGenTitle'>
                                    Formula Generator
                                </h3>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/formulaExp"
                            className='formExp'
                            >
                                <h3 className='formExpTitle'>
                                    Formula Explainer
                                </h3>
                            </Link>
                    </li>
                </ul>
                <div className='accountSpace'>
                    <h3 className='username'>
                        User Account
                    </h3>
                </div>
            </nav>

            <Outlet />
            <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
        </>
    )
};