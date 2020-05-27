import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/** @todo Add coverage */
test('renders learn react link', () => {
  const { getByAltText } = render(<App />);
  const logo = getByAltText(/charliechauri's logo/i);
  expect(logo).toBeInTheDocument();
});
