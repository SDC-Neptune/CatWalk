import React from 'react';
import ReactDOM from 'react-dom';
import AddToCart from './AddToCart.jsx';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toHaveTextContent, toHaveStyle, toHaveDisplayValue } from '@testing-library/jest-dom';
import { productId, productInfo, productStyles, styleIndex, productReviews } from './OverviewSampleTestData.js';

describe('add to cart tests', () => {

  test('should allow the user to attempt to add to bag even if no size is selected', () => {

    const renderedObject = render (<AddToCart productId={productId} productInfo={productInfo} styleIndex={styleIndex} productStyles={productStyles}/>);

    const selectSizeDropdown = renderedObject.getAllByRole('select-size');
    const addToBagButton = renderedObject.getAllByRole('add-to-bag');
    fireEvent.click(addToBagButton[0]);
    expect(selectSizeDropdown[0]).toHaveDisplayValue('Select Size');

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

  test('should post error message if add to bag clicked with no size selected', () => {

    const fetchQuantitiesHandler = jest.fn();
    const resetQuantityAndSizeHandler = jest.fn();
    const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const quantity = 10;

    const renderedObject = render (<AddToCart productStyles={productStyles} styleIndex={styleIndex} fetchQuantitiesHandler={fetchQuantitiesHandler} quantity={quantity} quantities={quantities} resetQuantityAndSizeHandler={resetQuantityAndSizeHandler}/>);
    const addToBagButton = renderedObject.getAllByRole('add-to-bag');
    fireEvent.click(addToBagButton[0]);
    screen.getByText('Please select size!');

  });

  test('should not allow you to add a quantity not available', () => {

    const size = 'XS';
    const fetchQuantitiesHandler = jest.fn();
    const resetQuantityAndSizeHandler = jest.fn();
    const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const quantity = 10;

    const renderedObject = render (<AddToCart productStyles={productStyles} styleIndex={styleIndex} fetchQuantitiesHandler={fetchQuantitiesHandler} quantity={quantity} quantities={quantities} size={size} resetQuantityAndSizeHandler={resetQuantityAndSizeHandler}/>);
    const addToBagButton = renderedObject.getAllByRole('add-to-bag');
    fireEvent.change(screen.getByTestId('select-size'), { target: { value: size } });
    fireEvent.change(screen.getByTestId('choose-quantity'), { target: { value: 11}});

    const selectSizeDropdown = renderedObject.getAllByRole('select-size');
    expect(selectSizeDropdown[0]).toHaveDisplayValue('XS');
    const quantityDropdown = renderedObject.getAllByRole('choose-quantity');
    expect(quantityDropdown[0]).not.toHaveDisplayValue(11);

  });

});