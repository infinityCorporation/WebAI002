import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { db, auth, app } from './auth/firebase.js';
import Stripe from 'stripe';

import Home from './pages/Home';
import Layout from './pages/Layout';
import FormulaExp from './pages/formulaExp';
import FormulaGen from './pages/formulaGen';
import FormulaBank from './pages/formulaBank';
import Extensions from './pages/Extensions';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import Account from './pages/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter className="router">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/formulaGen" element={<FormulaGen />} />
          <Route path="/formulaExp" element={<FormulaExp />} />
          <Route path='/formulaBank' element={<FormulaBank />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

