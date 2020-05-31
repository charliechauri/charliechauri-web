import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

/** @todo Add coverage */
test('renders learn react link', () => {
  const { getByAltText, getByLabelText } = render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  const logo = getByAltText(/charliechauri's logo/i);
  const languageSwitcher = getByLabelText('language_switcher_indications');

  fireEvent.change(languageSwitcher, { value: 'es' });

  expect(logo).toBeInTheDocument();
});
