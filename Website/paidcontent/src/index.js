import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

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
import Features from './pagesFront/Features';
import PricingFront from './pagesFront/PricingFront';
import About from './pagesFront/About';
import Legal from './pagesFront/Legal';
import CreateAccount from './pagesFront/CreateAccount';
import PersonalCheckout from './pagesFront/PersonalCheckout';
import SignIn from './pagesFront/SignIn';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter className="router">
      <Routes>
        <Route index element={<HomeFront />} />
        <Route path="/" element={<HomeFront />} />
        <Route path="/features" element={<Features /> } />
        <Route path="/pricing" element={<PricingFront /> } />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/personal" element={<PersonalCheckout />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
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