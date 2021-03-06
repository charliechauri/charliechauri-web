import React from 'react';
import { I18nProvider } from 'test/Providers';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Loading from './Loading';

describe('Loading', () => {
  jest.useFakeTimers();

  const renderComponent = () =>
    render(
      <I18nProvider>
        <Loading />
      </I18nProvider>
    );

  it('should render', async () => {
    const { getByTestId } = renderComponent();
    const loadingContent = getByTestId('loading-content');

    expect(loadingContent).toBeInTheDocument();
    expect(loadingContent.tagName).toBe('DIV');
    expect(loadingContent.className).toBe('loading__content');
    expect(loadingContent.textContent).toContain('Loading .');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(setTimeout).toHaveBeenCalledTimes(4);
    expect(loadingContent.textContent).toContain('Loading ..');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(setTimeout).toHaveBeenCalledTimes(6);
  });
});
