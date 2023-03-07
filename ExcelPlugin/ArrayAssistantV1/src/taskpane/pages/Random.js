import React from 'react';
import './Random.css';
import { Link } from 'react-router-dom';

export default function Random() {
  return (
    <div>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <h2>
            Generate Random Data
        </h2>
    </div>
  )
}
