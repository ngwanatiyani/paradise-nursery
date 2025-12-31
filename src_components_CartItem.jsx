// Note: Renamed to Cart.jsx for clarity, as it's the cart page. If you must use CartItem.jsx, adjust accordingly.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../features/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div style={{ padding: '20px', paddingTop: '80px' }}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span style={{ margin: '0 10px' }}>Quantity: {item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)} style={{ marginTop: '10px', color: 'red' }}>Delete</button>
              </div>
            </div>
          ))}
          <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>
          <button onClick={() => alert('Checkout Coming Soon!')} style={{ padding: '10px', marginRight: '10px' }}>Checkout</button>
          <Link to="/products">
            <button style={{ padding: '10px' }}>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;