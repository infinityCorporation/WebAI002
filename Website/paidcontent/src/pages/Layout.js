import * as React from 'react'
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import { SideLink } from './ListLink';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../auth/firebase';

export default function Layout() {

    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate("/signIn");
        }
    })

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
                <div className='listDiv'>
                    <ul className='list'>
                        <li>
                            <SideLink 
                                to="/customerPortal/"
                                className='home'
                            >
                                <h3 className='homeTitle'
                                    style={{
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Home
                                </h3>
                            </SideLink>
                        </li>
                        <h2 className='formSection'
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
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
                                            fontFamily: 'Helvetica, Arial, sans-serif',
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
                                            fontFamily: 'Helvetica, Arial, sans-serif',
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Formula Bank
                                </h3>
                            </SideLink>
                        </li>
                        <h2 className='textSection'
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
                            }}
                        >
                            Text
                        </h2>
                        <li>
                            <SideLink 
                                to="/customerPortal/formulaGen"
                                className='formGen'
                            >
                                    <h3 className='formGenTitle'
                                        style={{
                                            fontFamily: 'Helvetica, Arial, sans-serif',
                                        }}
                                    >
                                        Generate Text
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
                                            fontFamily: 'Helvetica, Arial, sans-serif',
                                        }}
                                    >
                                       Summarize Text
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Explainer
                                </h3>
                            </SideLink>
                        </li>
                        <h2 className='codeSection'
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
                            }}
                        >
                            Code
                        </h2>
                        <li>
                            <SideLink
                                to='/customerPortal/formulaBank'
                                className='formBank'
                            >
                                <h3 className='formBankTitle'
                                    style={{
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Python
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    SQL + R
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Sheet Automation
                                </h3>
                            </SideLink>
                        </li>
                        <h2 className='addonsSection'
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Templates
                                </h3>
                            </SideLink>
                        </li>
                        <h2 className='infoSection'
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
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
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Docs
                                </h3>
                            </SideLink>
                        </li>
                    </ul>
                </div>
                <div className='accountSpace'>
                    <SideLink
                        to="/customerPortal/account"
                        className='account'
                    >
                        <h3 className='username'
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
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