import * as React from 'react';
import './profile.css';

export default function Profile() {
    return(
        <div className='profileDiv'>
            <h3 className='profileTitle'>
                Profile Information
            </h3>
            <h5 className='nameTitle'>
                User Name:
            </h5>
            <h5 className='emailTitle'>
                User Email:
            </h5>
            <h5 className='subscriptionTitle'>
                Subscription:
            </h5>
            <h5 className='requestsTitle'>
                Requests Remaining:
            </h5>
        </div>
    )
}