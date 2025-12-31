import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import './App.css';

const App = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: 'center', paddingTop: '200px' }}>
                <h1>Welcome to Paradise Nursery</h1>
                <Link to="/products">
                  <button style={{ padding: '10px 20px', fontSize: '18px' }}>Get Started</button>
                </Link>
              </div>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        {(window.location.pathname === '/products' || window.location.pathname === '/cart') && (
          <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Link to="/products" style={{ margin: '0 20px' }}>Products</Link>
            <Link to="/cart" style={{ margin: '0 20px' }}>
              Cart ({cartQuantity})
            </Link>
          </nav>
        )}
      </div>
    </Router>
  );
};

export default App;
