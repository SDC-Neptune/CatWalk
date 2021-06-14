import React from 'react';
import ReactDOM from 'react-dom';
import AddToCart from './AddToCart.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import { toHaveTextContent, toHaveStyle } from '@testing-library/jest-dom';
import { productId, productInfo, productStyles } from './OverviewSampleTestData.js';

describe('add to cart tests', () => {

  test('should not submit a post request if a size is not selected', () => {

    

  });

});