import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render } from '@testing-library/react';
import Description from './Description';

describe('Description', () => {
  const renderComponent = () =>
    render(
      <I18nTestWrapper>
        <Description />
      </I18nTestWrapper>
    );

  it('should render', () => {
    const { getByTestId } = renderComponent();
    const description = getByTestId('description');

    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('SECTION');
    expect(description.className).toBe('description');
  });
});
