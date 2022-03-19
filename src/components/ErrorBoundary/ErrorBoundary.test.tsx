/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';
import { I18nProvider } from 'test/providers';

import { ErrorBoundary } from './index';

let consoleSpy: jest.SpyInstance<void, [any?, ...any[]]>; // eslint-disable-line @typescript-eslint/no-explicit-any

beforeAll(() => {
  consoleSpy = jest.spyOn(console, 'error');
  consoleSpy.mockImplementation(() => {});
});

afterAll(() => {
  consoleSpy.mockRestore();
});

afterEach(() => {
  jest.clearAllMocks();
});

function ThrowError({ shouldThrow = false }) {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
}

test('should render error state when error is thrown in children components', () => {
  const { getByLabelText, getByText, rerender } = render(
    <I18nProvider>
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    </I18nProvider>
  );

  rerender(
    <I18nProvider>
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    </I18nProvider>
  );

  expect.any(Error);
  expect(console.error).toHaveBeenCalledTimes(2);
  getByText('Ooops');
  getByText('Something went wrong, please reload the page');
  getByLabelText('Dissapointed face');
  getByText('Reload page');
});
