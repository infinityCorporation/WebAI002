import React from 'react';
import './Trans.css';
import { Link } from 'react-router-dom';

export default function Trans() {
  return (
    <div>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <h2>
            Translate Text from Any Language!
        </h2>
    </div>
  )
}
