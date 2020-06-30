import React from 'react';
import { I18nProvider } from 'test/Providers';
import { render } from '@testing-library/react';
import Description from './Description';

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
