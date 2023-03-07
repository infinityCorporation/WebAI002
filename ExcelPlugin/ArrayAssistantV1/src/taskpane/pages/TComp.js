import React from 'react';
import './TComp.css';
import { Link } from 'react-router-dom';

export default function TComp() {
  return (
    <div>
        <Link to="/">
                <h3>
                    Home
                </h3>
        </Link>
        <h2>
            Compose Text with a Small Prompt!
        </h2>
    </div>
  )
}
