
import * as React from 'react';
import './App.css';
import NavBar from './Navbar/index.js';
import Home from './pages/home.js';
import Products from './pages/products.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' exact component={Home} />
        <Route path='/products' component={Products} />
      </Routes>
    </Router>
  );
}

export default App;
