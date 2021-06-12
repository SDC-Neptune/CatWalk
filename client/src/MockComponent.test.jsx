import React from 'react';
import ReactDOM from 'react-dom';
import MockComponent from './MockComponent.jsx';
import { render, screen, fireEvent } from '@testing-library/react';


test('renders the correct content', () => {

  const { getByText, getByLabelText } = render(<MockComponent />);

  getByText('TODOs');
  getByLabelText('What needs to be done?');
  getByText('Add #1');

});