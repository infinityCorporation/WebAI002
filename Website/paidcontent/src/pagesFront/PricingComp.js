import * as React from 'react';
import './PricingComp.css'

export default function PricingComponent() {
    return(
        <div 
            className='mainGrid'
            style={{
                height: 400,
                width: '60%',
                position: 'relative',
                top: 200,
                left: '20%',
                border: '2px solid black',
                borderRadius: 15,
                fontFamily: 'Inter',
                
            }}
        >
            <div
                className='personalAcc'
                style={{
                    height: 400,
                    width: '50%',
                    position: 'relative',
                    top: -20,
                    left: 0,
                    textAlign: 'center'
                }}
            >
                <h1 
                    style={{
                        position: 'relative',
                        top: 25
                        }}
                >
                    Personal
                </h1>
            </div>
            <div
                className='professionalAcc'
                style={{
                    height: 400,
                    width: '50%',
                    position: 'relative',
                    top: -442.5,
                    left: '50%',
                    borderLeft: '2px solid black',
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        position: 'relative',
                        top: 25
                        }}
                >
                    Professional
                </h1>
            </div>
        </div>
    )
}