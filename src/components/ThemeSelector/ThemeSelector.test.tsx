import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, I18nProvider } from 'test/providers';
import { ThemeSelector } from './index';

describe('ThemeSelector', () => {
  const renderComponent = () =>
    render(
      <I18nProvider>
        <ThemeProvider>
          <ThemeSelector />
        </ThemeProvider>
      </I18nProvider>
    );

  it('should render and change between available themes', () => {
    const { getByLabelText, getByText } = renderComponent();
    const themeSelector = getByLabelText(
      /Select a theme/i
    ) as HTMLSelectElement;
    const lightThemeOption = getByText('Light') as HTMLOptionElement;

    expect(themeSelector).toBeInTheDocument();
    expect(themeSelector.value).toBe('light');
    expect(lightThemeOption).toBeInTheDocument();

    fireEvent.change(themeSelector, { target: { value: 'dark' } });
    const darkThemeOption = getByText('Dark');
    expect(darkThemeOption).toBeInTheDocument();
    expect(themeSelector.value).toBe('dark');
  });
});
