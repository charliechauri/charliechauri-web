import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nTestWrapper } from 'test/utils';
import { render, waitFor } from '@testing-library/react';
import App from './App';

/** @todo Increase coverage */
it('should render', async () => {
  const { getByAltText, getByLabelText, getByTestId } = render(
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
});
