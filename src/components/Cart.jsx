import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { updateQuantity, removeItem } from '../features/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleUpdateQuantity = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div style={{ padding: '20px', paddingTop: '80px' }}>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} updateQuantity={(id, amount) => handleUpdateQuantity(id, amount)} removeItem={handleRemove} />
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
