import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const handleQuantityChange = (amount) => {
    updateQuantity(item.id, amount);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
      <div>
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <div>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span style={{ margin: '0 10px' }}>Quantity: {item.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button onClick={handleRemove} style={{ marginTop: '10px', color: 'red' }}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
