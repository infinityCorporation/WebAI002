import * as React from 'react';
import { TitleLink, SubLink } from './StyledLink';
import { Outlet } from 'react-router-dom';
import logo from '../images/logoT.png';

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
                    background: 'white'
                }}
            >
                <img src={logo} height="150px" width="150px" 
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: -20
                    }}
                />
                <TitleLink
                    to='/'
                    className='frontPage'
                    style={{
                        position: 'relative',
                        left: 100
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
                        left: '70%',
                        top: -65,
                        display: 'inline-flex'
                    }}
                >
    
                        <SubLink
                            to='/features'
                            className='testPage'
                        >
                            <h2 
                                className='testTitle'
                                style={{
                                    width: 150
                                }}
                            >
                                Features
                            </h2>
                        </SubLink>
                        <SubLink
                            to='/pricing'
                            className='testPage'
                        >
                            <h2 
                                className='testTitle'
                                style={{
                                    width: 150
                                }}
                            >
                                Pricing
                            </h2>
                        </SubLink>
                        <SubLink
                            to="/createAccount"
                            className='testPage'
                        >
                            <h2 
                                className='testTitle'
                                style={{
                                    width: 175,
                                    color: '#4AD388'
                                }}
                            >
                                Sign Up
                            </h2>
                        </SubLink>

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