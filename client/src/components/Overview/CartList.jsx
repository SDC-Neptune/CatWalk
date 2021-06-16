import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const CartList = ({productId}) => {

  const [cartItems, setCartItems] = useState([]);

  const getCart = async () => {
    try {
      const results = await (axios.get('/cart'));
      setCartItems(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  if (!cartItems.length) {
    return (
      <p>Hello</p>
    );
  }

  return (
    <div>
      <h1 className="test-async" role="test-async">{cartItems[0].count}</h1>
    </div>
  );

};

export default CartList;
