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
import HomeFront from './pagesFront/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter className="router">
      <Routes>
        <Route index element={<HomeFront />} />
        <Route path="/" element={<HomeFront />}>
          <Route />
        </Route>
        <Route path="/customerPortal" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/customerPortal/" element={<Home />} />
          <Route path="/customerPortal/formulaGen" element={<FormulaGen />} />
          <Route path="/customerPortal/formulaExp" element={<FormulaExp />} />
          <Route path="/customerPortal/formulaBank" element={<FormulaBank />} />
          <Route path="/customerPortal/extensions" element={<Extensions />} />
          <Route path="/customerPortal/templates" element={<Templates />} />
          <Route path="/customerPortal/pricing" element={<Pricing />} />
          <Route path="/customerPortal/docs" element={<Docs />} />
          <Route path="/customerPortal/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
);