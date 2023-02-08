import * as React from 'react';
import './Pricing.css';

export default function Pricing() {
    return(
        <div className='main'>
            <h2 className='pricingTop'>
                Pricing
            </h2>
            <div className='pricingChart'>
                <div className='freeSection'>
                    <div className='freeTitleDiv'>
                        <h2 className='freeTitle'>
                            Free
                        </h2>
                    </div>
                    <h4 className='freeTraits'>
                        - Formula Generator <br/>
                        <br/>
                        - Formula Explainer <br/>
                        <br/>
                        - Chrome Extension <br/>
                        <br/>
                        - 5 Free Templates <br/>
                        <br/>
                        - Bonus Offers <br/>
                        <br/>
                    </h4>
                </div>
                <div className='premiumSection'>
                    <div className='premiumTitleDiv'>
                        <h2 className='premiumTitle'>
                            Premium
                        </h2>
                    </div>
                    <h4 className='premiumTraits'>
                        - Free Tier + <br/>
                        <br/>
                        - Excel Extension <br/>
                        <br/>
                        - Sheets Extension <br/>
                        <br/>
                        - Data Cleaner <br/>
                        <br/>
                        - 10 Templates <br/>
                        <br/>
                    </h4>
                </div>
            </div>
        </div>
    )
}