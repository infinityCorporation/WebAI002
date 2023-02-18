import * as React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { NavLink } from './navStyle';
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
                        <NavLink 
                            to="/customerPortal/"
                            className='home'
                        >
                            <h3 className='homeTitle'>
                                Home
                            </h3>
                        </NavLink>
                    </li>
                    <h2 className='formSection'>
                        Formulas
                    </h2>
                    <li>
                        <Link 
                            to="/customerPortal/formulaGen"
                            className='formGen'
                        >
                                <h3 className='formGenTitle'>
                                    Formula Generator
                                </h3>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/customerPortal/formulaExp"
                            className='formExp'
                        >
                                <h3 className='formExpTitle'>
                                    Formula Explainer
                                </h3>
                            </Link>
                    </li>
                    <li>
                        <Link
                            to='/customerPortal/formulaBank'
                            className='formBank'
                        >
                            <h3 className='formBankTitle'>
                                Formula Bank
                            </h3>
                        </Link>
                    </li>
                    <h2 className='addonsSection'>
                        Add-Ons
                    </h2>
                    <li>
                        <Link 
                            to="/customerPortal/extensions"
                            className='ext'
                        >
                                <h3 className='extTitle'>
                                    Extensions
                                </h3>
                            </Link>
                    </li>
                    <li>
                        <Link 
                            to="/customerPortal/templates"
                            className='templates'
                        >
                                <h3 className='templateTitle'>
                                    Templates
                                </h3>
                            </Link>
                    </li>
                    <h2 className='infoSection'>
                        Info
                    </h2>
                    <li>
                        <Link 
                            to="/customerPortal/pricing"
                            className='pricing'
                        >
                                <h3 className='pricingTitle'>
                                    Pricing
                                </h3>
                            </Link>
                    </li>
                    <li>
                        <Link 
                            to="/customerPortal/docs"
                            className='docs'
                        >
                                <h3 className='docsTitle'>
                                    Docs
                                </h3>
                            </Link>
                    </li>
                </ul>
                <div className='accountSpace'>
                    <Link
                        to="/customerPortal/account"
                        className='account'
                    >
                        <h3 className='username'>
                            User Account
                        </h3>
                    </Link>
                </div>
            </nav>

            <Outlet />
            <link href='https://fonts.googleapis.com/css?family=inter' rel='stylesheet'/>
        </>
    )
};