import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { requests } from './requests.js';

const CartList = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    requests.getCart()
      .then((results) => {
        setCartItems(results.data);
      });
  }, []);

  useEffect( async () => {
    const results = await requests.getCart();
    setCartItems(results.data);
  }, []);

  if (!cartItems.length) {
    return (
      <p>Hello</p>
    );
  }

  return (
    <div>
      <h1 className="test-async" role="test-async">{cartItems[1].count}</h1>
    </div>
  );

};

export default CartList;
