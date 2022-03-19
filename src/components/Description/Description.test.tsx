import React from 'react';
import { I18nProvider } from 'test/providers';
import { render } from '@testing-library/react';
import { Description } from './index';

describe('Description', () => {
  const renderComponent = () =>
    render(
      <I18nProvider>
        <Description />
      </I18nProvider>
    );

  it('should render', () => {
    const { getByTestId } = renderComponent();
    const description = getByTestId('description');

    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('SECTION');
    expect(description.className).toBe('description');
  });
});
