
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import SunbeamHeader from './components/SunbeamHeader/SunbeamHeader';
import Table3 from './components/Table3/Table3';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <SunbeamHeader />
        <Table3 />
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          



        </Routes>
      </Router>
    </div>
  );
}

export default App;
