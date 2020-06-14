import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nTestWrapper } from 'test/utils';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

/** @todo Increase coverage */
describe('App', () => {
  it('should render', async () => {
    const { getByAltText, getByLabelText, getByTestId, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <I18nTestWrapper>
          <App />
        </I18nTestWrapper>
      </MemoryRouter>
    );

    const loading = getByTestId('loading-content');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    getByAltText(/charliechauri's logo/i);
    getByLabelText('Select an option to change language');
    const themeSelector = getByLabelText('Select a theme') as HTMLSelectElement;

    expect(themeSelector.value).toBe('light');

    fireEvent.change(themeSelector, { target: { value: 'dark' } });

    getByText('Dark');

    expect(themeSelector.value).toBe('dark');
  });
});
