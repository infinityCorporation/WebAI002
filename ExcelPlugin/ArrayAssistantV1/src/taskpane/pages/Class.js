import React from 'react';
import './Class.css';
import { Link } from 'react-router-dom';

export default function Class() {
  return (
    <div>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <h2>
            Classify Data Based on Conditions.
        </h2>
    </div>
  )
}
