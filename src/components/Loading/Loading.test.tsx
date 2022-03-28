import React from 'react';
import { I18nProvider } from 'test/providers';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Loading } from './index';

describe('Loading', () => {
  jest.useFakeTimers();

  it('renders', async () => {
    render(
      <I18nProvider>
        <Loading />
      </I18nProvider>
    );
    const loadingContent = screen.getByRole('presentation');

    expect(loadingContent).toBeInTheDocument();
    expect(loadingContent).toHaveAttribute('class', 'loading__content');
    expect(loadingContent).toHaveTextContent('Loading .');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(setTimeout).toHaveBeenCalledTimes(4);
    expect(loadingContent).toHaveTextContent('Loading ..');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(setTimeout).toHaveBeenCalledTimes(6);
  });
});
