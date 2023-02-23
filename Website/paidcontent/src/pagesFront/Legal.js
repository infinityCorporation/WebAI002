import * as React from 'react';
import BarNav from './BarComponent';
import BottomLinks from './BottomLinks';
import './Legal.css';

export default function Legal() {
    return(
        <div className='legalMain'>
            <div 
                className='attribution'
                style={{
                    height: 400,
                    width: '100%',
                    position: 'relative',
                    top: 100
                }}
            >  
                <a href="https://www.flaticon.com/free-icons/paper" title="paper icons">Paper icons created by Icongeek26 - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/cpu" title="cpu icons">Cpu icons created by Icongeek26 - Flaticon</a>
            </div>
            <div
                className='infoSection'
                style={{
                    width: '100%',
                    height: 250,
                    position: 'relative',
                    top: 100,
                    left: 0,
                    color: 'white',
                    backgroundColor: '#1F1F1F' 
                }}
            >
                <BottomLinks />
            </div>
            <BarNav />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </div>
    )
}