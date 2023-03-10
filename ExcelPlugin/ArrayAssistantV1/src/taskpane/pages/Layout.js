import React from 'react';
import './Layout.css';
import { FrontButton } from './StyledButton';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div
        style={{
            width: '100%',
            position: 'relative',
            left: '-5%'
        }}
    >
        <ul>
            <FrontButton
                to="/gen"
            >
                <h2>
                    Formula Generator
                </h2>
            </FrontButton>
            <FrontButton
                to="/exp"
            >
                <h2>
                    Formula Explainer
                </h2>
            </FrontButton>
            <FrontButton
                to="/clean"
            >
                <h2>
                    Data Cleaner
                </h2>
            </FrontButton>
            <FrontButton
                to="/textgen"
            >
                <h2>
                    Text Composer
                </h2>
            </FrontButton>
            <FrontButton
                to="/sum"
            >
                <h2>
                    Summarizer
                </h2>
            </FrontButton>
            <FrontButton
                to='/gram'
            >
                <h2>
                    Grammar Checker
                </h2>
            </FrontButton>
            <FrontButton
                to="/rand"
            >
                <h2>
                    Generate Data
                </h2>
            </FrontButton>
            <FrontButton
                to="/ext"
            >
                <h2>
                    Extract
                </h2>
            </FrontButton>
            <FrontButton
                to="/class"
            >
                <h2>
                    Classify Data
                </h2>
            </FrontButton>
            <FrontButton
                to="/trans"
            >
                <h2>
                    Translate
                </h2>
            </FrontButton>
            <FrontButton
                to="/prof"
            >
                <h2>
                    Profile
                </h2>
            </FrontButton>
            <FrontButton
                to="/help"
            >
                <h2>
                    Help
                </h2>
            </FrontButton>
        </ul>
        <div style={{ height: 10}} />
    </div>
  )
}
