import * as React from 'react'
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import { SideLink } from './ListLink';

export default function Layout() {
    return(
        <>
            <nav className='nav' >
                <div className='navTop'>
                    <h2 
                        className='headerTop'
                    >
                        Array Assistant
                    </h2>
                </div>
                <ul className='list'>
                    <li>
                        <SideLink 
                            to="/customerPortal/"
                            className='home'
                        >
                            <h3 className='homeTitle'
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                Home
                            </h3>
                        </SideLink>
                    </li>
                    <h2 className='formSection'
                        style={{
                            fontFamily: 'Inter',
                        }}
                    >
                        Formulas
                    </h2>
                    <li>
                        <SideLink 
                            to="/customerPortal/formulaGen"
                            className='formGen'
                        >
                                <h3 className='formGenTitle'
                                    style={{
                                        fontFamily: 'Inter',
                                    }}
                                >
                                    Formula Generator
                                </h3>
                        </SideLink>
                    </li>
                    <li>
                        <SideLink 
                            to="/customerPortal/formulaExp"
                            className='formExp'
                        >
                                <h3 className='formExpTitle'
                                    style={{
                                        fontFamily: 'Inter',
                                    }}
                                >
                                    Formula Explainer
                                </h3>
                        </SideLink>
                    </li>
                    <li>
                        <SideLink
                            to='/customerPortal/formulaBank'
                            className='formBank'
                        >
                            <h3 className='formBankTitle'
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                Formula Bank
                            </h3>
                        </SideLink>
                    </li>
                    <h2 className='addonsSection'
                        style={{
                            fontFamily: 'Inter',
                        }}
                    >
                        Add-Ons
                    </h2>
                    <li>
                        <SideLink 
                            to="/customerPortal/extensions"
                            className='ext'
                        >
                            <h3 className='extTitle'
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                Extensions
                            </h3>
                        </SideLink>
                    </li>
                    <li>
                        <SideLink 
                            to="/customerPortal/templates"
                            className='templates'
                        >
                            <h3 className='templateTitle'
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                Templates
                            </h3>
                        </SideLink>
                    </li>
                    <h2 className='infoSection'
                        style={{
                            fontFamily: 'Inter',
                        }}
                    >
                        Info
                    </h2>
                    <li>
                        <SideLink 
                            to="/customerPortal/pricing"
                            className='pricing'
                        >
                            <h3 className='pricingTitle'
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                Pricing
                            </h3>
                        </SideLink>
                    </li>
                    <li>
                        <SideLink 
                            to="/customerPortal/docs"
                            className='docs'
                        >
                            <h3 className='docsTitle'
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                Docs
                            </h3>
                        </SideLink>
                    </li>
                </ul>
                <div className='accountSpace'>
                    <SideLink
                        to="/customerPortal/account"
                        className='account'
                    >
                        <h3 className='username'
                            style={{
                                fontFamily: 'Inter',
                            }}
                        >
                            User Account
                        </h3>
                    </SideLink>
                </div>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
            </nav>

            <Outlet />
            
        </>
    )
};