import React from 'react';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import './PaymentWall.css';

const perTitle = "Personal";
const perDes = "This is the personal account";
const perPrice = "$9.99";
const perLink= "/personal";

export default function PaymentWall() {
  return (
    <div>
        {displayProduct(perTitle, perDes, perPrice, perLink)}
    </div>
  )
}

function displayProduct(name, des, price, link) {
    const [re, setRe] = useState(false);

    return(
        <div>
            { !re ? (
                <div>
                    <h1>
                        {name}
                    </h1>
                    <h4>
                        {des}
                    </h4>
                    <h2>
                        {price}
                    </h2>
                    <button onClick={() => {
                        setRe(true)
                    }}>
                        Buy
                    </button>
                    
                </div>
            ) : (
                <Navigate to={link} />
            )}
            <Outlet />
        </div>
    )
}
