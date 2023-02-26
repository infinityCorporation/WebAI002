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
                    height: 500,
                    width: '100%',
                    position: 'relative',
                    top: 150,
                    fontFamily: 'Inter'

                }}
            >  
                <h2
                    style={{
                        position: 'relative',
                        left: '2.5%',
                        width: '90%',
                        borderBottom: '2px solid black'
                    }}
                >
                    Legal
                </h2>
                <h4
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        borderBottom: '2px solid black'
                    }}
                >
                    The website, content, name, and product are property of Evan Frisbie and Shaalin Patel.
                    Attempts to copy, break, attack, or otherwise cause harm to this website, its operations, 
                    the product, or its owners will be cause for legal action. <br/>
                    <br/>
                    Users are subject to the user agreement, stating that any damage caused or created by the 
                    product while in use is the fault of, and only of, the user, unless determined otherwise by 
                    investigation. Users are liable for any damages caused by the product or any damages they 
                    themselves cause to the product. <br/>
                    <br/>
                    Be are the respective icons that where used when creating this site. They are property of their
                    respective owners.
                </h4>
                <h3
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        top: 50
                    }}
                >
                    Links to owners of Icon Art:
                </h3>
                <a href="https://www.flaticon.com/free-icons/paper" title="paper icons"
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        top: 50
                    }}
                >
                    Paper icons created by Icongeek26 - Flaticon<br/>
                </a>
                <a href="https://www.flaticon.com/free-icons/cpu" title="cpu icons"
                    style={{
                        position: 'relative',
                        width: '90%',
                        left: '2.5%',
                        top: 50
                    }}
                >
                    Cpu icons created by Icongeek26 - Flaticon
                </a>
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