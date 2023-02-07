import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Home from './pages/Home';
import Layout from './pages/Layout';
import FormulaExp from './pages/formulaExp';
import FormulaGen from './pages/formulaGen';
import Extensions from './pages/Extensions';
import Docs from './pages/Docs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter className="router">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/formulaGen" element={<FormulaGen />} />
          <Route path="/formulaExp" element={<FormulaExp />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/docs" element={<Docs />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

