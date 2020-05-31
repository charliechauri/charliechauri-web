import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

/** @todo Add coverage */
test('renders learn react link', () => {
  const { getByAltText, getByText, container } = render(<App />);
  const logo = getByAltText(/logo_alt_text/i);
  const languageSwitcher = getByText('English');

  fireEvent.click(languageSwitcher);

  const spanishOption = getByText('Español');

  fireEvent.click(spanishOption);

  expect(logo).toBeInTheDocument();
  expect(spanishOption).toBeInTheDocument();
});
