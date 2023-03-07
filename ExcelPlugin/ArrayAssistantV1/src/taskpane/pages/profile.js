import * as React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

export default function ProfileTab() {
    return(
        <div className='profileDiv'>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>
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