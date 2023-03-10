import React from 'react';
import './Layout.css';
import { FrontButton } from './StyledButton';
import { Link } from 'react-router-dom';

import Formula from './icons/formula.png';
import Explain from './icons/text.png';
import Profile from './icons/profile.png';
import Data from './icons/data.png';
import Help from './icons/help.png';
import Grammar from './icons/grammar.png';
import Translate from './icons/translate.png';
import Compose from './icons/Text2.png';
import Summary from './icons/summary.png';
import Settings from './icons/settings.png';

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
            <h2>
                Math:
            </h2>
            <FrontButton
                to="/gen"
            >
                <img src={Formula} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Formula Generator
                </h2>
            </FrontButton>
            <FrontButton
                to="/exp"
            >
                <img src={Explain} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Formula Explainer
                </h2>
            </FrontButton>
            <FrontButton
                to="/"
            >
                <h2>
                    Problem Solver
                </h2>
            </FrontButton>
            <h2>
                Text:
            </h2>
            <FrontButton
                to="/textgen"
            >
                <img src={Compose} alt="icon" height="30" length="30" style={{ position: 'relative', left: -5, top: 15, marginRight: 0}} />
                <h2>
                    Text Composer
                </h2>
            </FrontButton>
            <FrontButton
                to="/sum"
            >
                <img src={Summary} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Summarizer
                </h2>
            </FrontButton>
            <FrontButton
                to='/gram'
            >
                <img src={Grammar} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Grammar Checker
                </h2>
            </FrontButton>
            <FrontButton
                to="/trans"
            >
                <img src={Translate} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Translate
                </h2>
            </FrontButton>
            <h2>
                Data:
            </h2>
            <FrontButton
                to="/clean"
            >
                <img src={Data} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Data Cleaner
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
            <h2>
                Details:
            </h2>
            <FrontButton
                to="/prof"
            >
                <img src={Profile} alt="icon" height="25" length="25" style={{ position: 'relative', top: 17, marginRight: 5}} />
                <h2>
                    Profile
                </h2>
            </FrontButton>
            <FrontButton
                to="/help"
            >
                <img src={Help} alt="icon" height="20" length="20" style={{ position: 'relative', top: 17, marginRight: 10}} />
                <h2>
                    Help
                </h2>
            </FrontButton>
            <FrontButton
                to="/"
            >
                <img src={Settings} alt="icon" height="30" length="30" style={{ position: 'relative', top: 14, left: -3, marginRight: 0}} />
                <h2>
                    Settings
                </h2>
            </FrontButton>
            <FrontButton
                to="/"
            >
                <img src={Summary} alt="icon" height="30" length="30" style={{ position: 'relative', top: 14, left: -3, marginRight: 0}} />
                <h2>
                    Docs
                </h2>
            </FrontButton>
        </ul>
        <div style={{ height: 10}} />
    </div>
  )
}
