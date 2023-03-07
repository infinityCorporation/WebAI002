import React from 'react';
import './Help.css';
import { Link } from 'react-router-dom';

export default function Help() {
  return (
    <div>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <h2>
            Contact us at arrayassistant.ai@gmail.com
        </h2>
    </div>
  )
}
