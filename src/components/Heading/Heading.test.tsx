import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  const renderComponent = (locKey: string) =>
    render(
      <I18nTestWrapper>
        <Heading locKey={locKey} />
      </I18nTestWrapper>
    );

  it('should render when valid locKey is set', () => {
    const { getByText } = renderComponent('main_heading');
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toBe('heading');
  });

  it("should render locKey when it's not valid", () => {
    const { getByText } = renderComponent('invalid_loc_key');
    const heading = getByText(/invalid_loc_key/i);

    expect(heading).toBeInTheDocument();
  });
});
