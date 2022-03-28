import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider, I18nProvider } from 'test/providers';
import { ThemeSelector } from './index';

describe('ThemeSelector', () => {
  it('renders and update theme based on user selection', () => {
    render(
      <I18nProvider>
        <ThemeProvider>
          <ThemeSelector />
        </ThemeProvider>
      </I18nProvider>
    );
    const themeSelector = screen.getByLabelText(/Select a theme/i);

    expect(themeSelector).toBeVisible();
    expect(themeSelector).toHaveValue('light');

    fireEvent.change(themeSelector, { target: { value: 'dark' } });
    expect(themeSelector).toHaveValue('dark');
  });
});
