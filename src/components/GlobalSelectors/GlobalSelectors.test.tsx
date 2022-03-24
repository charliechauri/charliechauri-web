import React from 'react';
import { I18nProvider } from 'test/providers';
import { fireEvent, render, screen } from '@testing-library/react';
import { GlobalSelectors } from './index';

describe('GlobalSelectors', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    render(
      <I18nProvider>
        <GlobalSelectors />
      </I18nProvider>
    );

    expect(
      screen.getByRole('combobox', {
        name: 'Select an option to change language',
      })
    ).toBeVisible();

    expect(
      screen.getByRole('combobox', {
        name: 'Select a theme',
      })
    ).toBeVisible();
  });

  it('has a language selector with default value and changes based on user selection', () => {
    render(
      <I18nProvider>
        <GlobalSelectors />
      </I18nProvider>
    );

    const languageSelector = screen.getByRole('combobox', {
      name: 'Select an option to change language',
    });

    expect(languageSelector).toHaveValue('en');

    fireEvent.change(languageSelector, { target: { value: 'es' } });

    expect(languageSelector).toHaveValue('es');

    fireEvent.change(languageSelector, { target: { value: 'en' } });

    expect(languageSelector).toHaveValue('en');
  });

  it('has a theme selector with default value and changes based on user selection', () => {
    render(
      <I18nProvider>
        <GlobalSelectors />
      </I18nProvider>
    );

    const themeSelector = screen.getByRole('combobox', {
      name: 'Select a theme',
    });

    expect(themeSelector).toHaveValue('light');

    fireEvent.change(themeSelector, { target: { value: 'dark' } });

    expect(themeSelector).toHaveValue('dark');
  });
});
