import React from 'react';
import ReactDOM from 'react-dom';
import AddToCart from './AddToCart.jsx';
import Overview from './Overview.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import { toHaveTextContent, toHaveStyle } from '@testing-library/jest-dom';
import { productId, productInfo, productStyles, styleIndex, productReviews } from './OverviewSampleTestData.js';

describe('add to cart tests', () => {

  test('should not submit a post request if a size is not selected', () => {

    const renderedObject = render (<AddToCart productId={productId} productInfo={productInfo} styleIndex={styleIndex} productStyles={productStyles}/>);

    const selectSizeDropdown = renderedObject.getAllByRole('select-size');
    const addToBagButton = renderedObject.getAllByRole('add-to-bag');
    fireEvent.click(addToBagButton[0]);
    expect(selectSizeDropdown[0]).toHaveTextContent('Select Size');

  });

  test('should fetch quantities after a size is chosen', () => {

    const size = 'XS';
    const fetchQuantitiesHandler = jest.fn();
    const resetQuantityAndSizeHandler = jest.fn();
    const quantities = [];
    const quantity = undefined;

    const renderedObject = render (<AddToCart productStyles={productStyles} styleIndex={styleIndex} fetchQuantitiesHandler={fetchQuantitiesHandler} quantity={quantity} quantities={quantities} size={size} resetQuantityAndSizeHandler={resetQuantityAndSizeHandler}/>);

    fireEvent.change(screen.getByTestId('select-size'), { target: { value: size } });
    expect(fetchQuantitiesHandler).toHaveBeenCalled();

  });

});