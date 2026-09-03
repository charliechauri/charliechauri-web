/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { I18nProvider } from 'test/providers';

import { ErrorBoundary } from './index';

let consoleSpy: ReturnType<typeof vi.spyOn>;

beforeAll(() => {
  consoleSpy = vi.spyOn(console, 'error');
  consoleSpy.mockImplementation(() => {});
});

afterAll(() => {
  consoleSpy.mockRestore();
});

afterEach(() => {
  vi.clearAllMocks();
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
  expect(console.error).toHaveBeenCalledTimes(1);
  getByText('Ooops');
  getByText('Something went wrong, please reload the page');
  getByLabelText('Dissapointed face');
  getByText('Reload page');
});
