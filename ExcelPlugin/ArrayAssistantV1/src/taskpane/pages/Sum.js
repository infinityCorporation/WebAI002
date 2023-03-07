import React from 'react';
import "./Sum.css";
import { Link } from 'react-router-dom';

export default function Sum() {
  return (
    <div>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <h2>
            Summarize multiple cells at a time!
        </h2>
    </div>
  )
}
