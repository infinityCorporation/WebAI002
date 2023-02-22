import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { BtmLink } from './BottomStyledLink.js';

export default function BottomLinks() {
    return(
        <div
            style={{
                height: 250
            }}
        >
            <h5
                style={{
                    height: 20,
                    width: '150px',
                    fontFamily: 'Inter',
                    fontSize: 18,
                    fontWeight: 200,
                    position: 'relative',
                    left: 40,
                    top: 50
                }}
            >
                Information:
            </h5>
            <BtmLink
                to="/features"
                style={{
                    position: 'relative',
                    top: 50,
                    left: 55
                }}
            >
                Features<br/>
            </BtmLink>
            <BtmLink
                to="/pricing"
                style={{
                    position: 'relative',
                    top: 60,
                    left: 55
                }}
            >
                Pricing<br/>
            </BtmLink>
            <BtmLink
                to="/about"
                style={{
                    position: 'relative',
                    top: 70,
                    left: 55
                }}
            >
                About<br/>
            </BtmLink>
            <BtmLink
                to="/legal"
                style={{
                    position: 'relative',
                    top: 80,
                    left: 55
                }}
            >
                Legal
            </BtmLink>
        </div>
    )
}