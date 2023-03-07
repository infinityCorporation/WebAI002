import React from 'react';
import './Ext.css';
import { Link } from 'react-router-dom';

export default function Ext() {
  return (
    <div>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <h2>
            Extract a specified aspect of some text!
        </h2>
    </div>
  )
}
