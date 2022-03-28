import React from 'react';
import { I18nProvider } from 'test/providers';
import { render, fireEvent, screen } from '@testing-library/react';
import { LanguageSelector } from './index';

describe('LanguageSelector', () => {
  it('renders and updates based on user\'s selection', async () => {
    render(
      <I18nProvider>
        <LanguageSelector />
      </I18nProvider>
    );

    const languageSelector = screen.getByRole('combobox', {
      name: /Select an option to change language/i,
    });

    expect(languageSelector).toBeVisible();
    expect(languageSelector).toHaveValue('en');

    fireEvent.change(languageSelector, { target: { value: 'es' } });

    expect(languageSelector).toHaveValue('es');
  });
});
