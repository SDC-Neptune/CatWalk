import React from 'react';
import ReactDOM from 'react-dom';
import DescriptiveProductInfo from './DescriptiveProductInfo.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import { toHaveTextContent, toHaveStyle } from '@testing-library/jest-dom';
//explore @testing-library/user-event for simulating user events

const productId = 19089;
const productInfo =
{
  'id': 19089,
  'campus': 'hr-rfe',
  'name': 'Camo Onesie',
  'slogan': 'Blend in to your crowd',
  'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  'category': 'Jackets',
  'default_price': '140.00',
  'created_at': '2021-02-23T19:24:34.450Z',
  'updated_at': '2021-02-23T19:24:34.450Z',
  'features': [
    {
      'feature': 'Fabric',
      'value': 'Canvas'
    },
    {
      'feature': 'Buttons',
      'value': 'Brass'
    }
  ]
};

describe('descriptive product info tests', () => {

  test('correctly renders the slogan', () => {

    const renderedObject = render (<DescriptiveProductInfo productId={productId} productInfo={productInfo} />);

    const slogan = renderedObject.getAllByRole('slogan');
    expect(slogan[0]).toHaveTextContent('Blend in to your crowd');

  });

  test('correctly renders the description', () => {

    const renderedObject = render (<DescriptiveProductInfo productId={productId} productInfo={productInfo} />);

    const description = renderedObject.getAllByRole('description');
    expect(description[0]).toHaveTextContent('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');

  });

  test('correctly changes the color of social media buttons', () => {

    const renderedObject = render (<DescriptiveProductInfo productId={productId} productInfo={productInfo} />);

    const facebook = renderedObject.getAllByRole('facebook');
    const twitter = renderedObject.getAllByRole('twitter');
    const pinterest = renderedObject.getAllByRole('pinterest');

    expect(facebook[0]).toHaveStyle('color: #3B5998');
    expect(twitter[0]).toHaveStyle('color: #00ACEE');
    expect(pinterest[0]).toHaveStyle('color: #E60023');

  });

});
