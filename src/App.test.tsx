import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

/** @todo Add coverage */
test('renders learn react link', () => {
  const { getByAltText, getByLabelText } = render(
    <I18nTestWrapper>
      <App />
    </I18nTestWrapper>
  );
  const logo = getByAltText(/charliechauri's logo/i);
  const languageSwitcher = getByLabelText('language_switcher_indications');

  fireEvent.change(languageSwitcher, { value: 'es' });

  expect(logo).toBeInTheDocument();
});
