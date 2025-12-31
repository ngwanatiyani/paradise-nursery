import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice';

const plants = {
  Indoor: [
    { id: 1, name: 'Monstera', price: 25, image: './images/plant1.jpg', description: 'Tropical houseplant with split leaves.' },
    { id: 2, name: 'Snake Plant', price: 20, image: './images/plant2.jpg', description: 'Low-maintenance air purifier.' },
    { id: 3, name: 'Pothos', price: 15, image: './images/plant3.jpg', description: 'Trailing vine, easy to care for.' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 40, image: './images/plant4.jpg', description: 'Elegant indoor tree.' },
    { id: 5, name: 'Peace Lily', price: 18, image: './images/plant5.jpg', description: 'Flowering plant with white blooms.' },
    { id: 6, name: 'ZZ Plant', price: 22, image: './images/plant6.jpg', description: 'Drought-tolerant and shiny leaves.' },
  ],
  Outdoor: [
    { id: 7, name: 'Lavender', price: 12, image: './images/plant7.jpg', description: 'Fragrant herb for gardens.' },
    { id: 8, name: 'Rose Bush', price: 30, image: './images/plant8.jpg', description: 'Classic flowering shrub.' },
    { id: 9, name: 'Sunflower', price: 10, image: './images/plant9.jpg', description: 'Tall, bright yellow blooms.' },
    { id: 10, name: 'Hydrangea', price: 28, image: './images/plant10.jpg', description: 'Shrub with large flower clusters.' },
    { id: 11, name: 'Tulip Bulbs', price: 8, image: './images/plant11.jpg', description: 'Spring-blooming bulbs.' },
    { id: 12, name: 'Fern', price: 16, image: './images/plant12.jpg', description: 'Shade-loving outdoor foliage.' },
  ],
  Succulents: [
    { id: 13, name: 'Aloe Vera', price: 14, image: './images/plant13.jpg', description: 'Medicinal plant with healing gel.' },
    { id: 14, name: 'Jade Plant', price: 18, image: './images/plant14.jpg', description: 'Symbol of good luck.' },
    { id: 15, name: 'Echeveria', price: 12, image: './images/plant15.jpg', description: 'Rosette-shaped succulent.' },
    { id: 16, name: 'Cactus', price: 10, image: './images/plant16.jpg', description: 'Spiky desert dweller.' },
    { id: 17, name: 'Sedum', price: 9, image: './images/plant17.jpg', description: 'Groundcover succulent.' },
    { id: 18, name: 'Haworthia', price: 11, image: './images/plant18.jpg', description: 'Small, striped succulent.' },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => new Set(prev).add(plant.id));
  };

  return (
    <div style={{ padding: '20px', paddingTop: '80px' }}>
      <h1>Our Plants</h1>
      {Object.keys(plants).map((category) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2>{category} Plants</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {plants[category].map((plant) => (
              <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px' }} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.has(plant.id)}
                  style={{ padding: '10px', background: addedItems.has(plant.id) ? '#ccc' : '#4CAF50', color: 'white' }}
                >
                  {addedItems.has(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;