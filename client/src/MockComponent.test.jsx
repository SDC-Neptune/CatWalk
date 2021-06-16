import React from 'react';
import ReactDOM from 'react-dom';
import MockComponent from './MockComponent.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
//explore @testing-library/user-event for simulating user events

test('renders the correct content', () => {

  const { getByText, getByLabelText } = render(<MockComponent />);

  // expect(getByText('TODOs')).not.toBeNull();
  getByText('TODOs'); // line above is equivalent
  getByLabelText('What needs to be done?');
  getByText('Add #1');

});

test('allows users to add items to their list', () => {

  const { getByText, getByLabelText } = render (<MockComponent />);

  const input = getByLabelText('What needs to be done?');
  fireEvent.change(input, {target: {value: 'Canada'}});
  fireEvent.click(getByText('Add #1'));

  getByText('Canada');
  getByText('Add #2');

});