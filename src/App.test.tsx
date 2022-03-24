import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from 'test/providers';
import {
  render,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { App } from './App';

/** @todo Increase coverage */
describe('App', () => {
  it('should render', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <I18nProvider>
          <App />
        </I18nProvider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('loading-content')
    );

    expect(
      screen.getByRole('img', { name: /charliechauri's logo/i })
    ).toBeVisible();
    expect(
      screen.getByRole('combobox', {
        name: 'Select an option to change language',
      })
    ).toBeVisible();
    const themeSelector = screen.getByLabelText('Select a theme');

    expect(themeSelector).toHaveValue('light');

    fireEvent.change(themeSelector, { target: { value: 'dark' } });

    expect(themeSelector).toHaveValue('dark');
  });
});
