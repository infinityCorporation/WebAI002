import * as React from 'react';
import { TitleLink, SubLink } from './StyledLink';
import { Outlet } from 'react-router-dom';

export default function BarNav() {
    return(
        <div>
            <div
                style={{
                    width: '100%',
                    height: 100,
                    position: 'relative',
                    top: 0,
                    left: 0
                }}
            >

            </div>
            <div
                style={{
                    width: '100%',
                    height: 100,
                    color: 'black',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    justifyContent: 'center',
                }}
            >
                <TitleLink
                    to='/'
                    className='frontPage'
                >
                    <h2>
                        Array Assistant
                    </h2>
                </TitleLink>
                <div 
                    className='subDiv'
                    style={{
                        height: 50,
                        width: '30%',
                        color: 'black',
                        position: 'relative',
                        left: '70%',
                        top: -50,
                        display: 'inline-flex'
                    }}
                >
    
                        <SubLink
                            to='/features'
                            className='testPage'
                        >
                            <h3 
                                className='testTitle'
                                style={{
                                    width: 150
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
                                    width: 150
                                }}
                            >
                                Pricing
                            </h3>
                        </SubLink>
                        <SubLink
                            to='/customerPortal'
                            className='testPage'
                        >
                            <h3 
                                className='testTitle'
                                style={{
                                    width: 175,
                                    color: '#4AD388'
                                }}
                            >
                                Sign Up
                            </h3>
                        </SubLink>

                </div>
                <Outlet />
            </div>
        </div>
    )
}