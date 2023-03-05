import * as React from 'react';
import { TitleLink, SubLink, SignLink } from './StyledLink';
import { Outlet } from 'react-router-dom';
import logo from '../images/logoV.png';
import './BarComponent.css';

export default function BarNav() {
    return(
        <div>
            <div
                style={{
                    width: '100%',
                    height: 100,
                    color: 'black',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    justifyContent: 'center',
                    background: 'white',
                    overflow: 'hidden'
                }}
            >
                <img src={logo} height="65px" width="65px" alt="logo"
                    style={{
                        position: 'absolute',
                        top: 17,
                        left: 25
                    }}
                />
                <TitleLink
                    to='/'
                    className='frontPage'
                    style={{
                        position: 'relative',
                        left: 100,
                        fontFamily: 'Helvetica, Arial, sans-serif'
                    }}
                >
                    <h1>
                        Array Assistant
                    </h1>
                </TitleLink>
                <div 
                    className='subDiv'
                    style={{
                        height: 50,
                        width: '30%',
                        color: 'black',
                        position: 'relative',
                        left: '68%',
                        top: -45,
                        display: 'inline-flex'
                    }}
                >
                        <div
                            style={{
                                position: 'relative',
                                top: -10,
                                width: 330,
                                display: 'flex'
                            }}
                        >
                            <SubLink
                                to='/features'
                                className='testPage'
                            >
                                <h3 
                                    className='testTitle'
                                    style={{
                                        width: 110
                                    }}
                                >
                                    Features
                                </h3>
                            </SubLink>
                            <SubLink
                                to='/pricing'
                                className='testPage'
                            >
                                <h3 
                                    className='testTitle'
                                    style={{
                                        width: 100
                                    }}
                                >
                                    Pricing
                                </h3>
                            </SubLink>
                            <SubLink
                                to="/signIn"
                            >
                                <h3
                                    style={{
                                        width: 90
                                    }}
                                >
                                    Sign In
                                </h3>
                            </SubLink>
                        </div>
                        <div
                            id="signUp"
                        >
                            <SignLink
                                to="/createAccount"
                                className='testPage'
                            >
                                <h2 
                                    className='testTitle'
                                    style={{
                                        width: '100%',
                                        position: 'relative',
                                        top: -14
                                    }}
                                >
                                    Sign Up
                                </h2>
                            </SignLink>
                        </div>

                </div>
                <Outlet />
            </div>
        </div>
    )
}

/*

placeholder div for fixed element usage

<div
                style={{
                    width: '100%',
                    height: 100,
                    position: 'relative',
                    top: 0,
                    left: 0,
                }}
            >


*/