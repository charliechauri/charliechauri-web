import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  const renderComponent = (locKey: string, screenReaderOnly = false) =>
    render(
      <I18nTestWrapper>
        <Heading locKey={locKey} screenReaderOnly={screenReaderOnly} />
      </I18nTestWrapper>
    );

  it('should render when valid locKey is set', () => {
    const { getByText } = renderComponent('main_heading');
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it("should render locKey when it's not valid", () => {
    const { getByText } = renderComponent('invalid_loc_key');
    const heading = getByText(/invalid_loc_key/i);

    expect(heading).toBeInTheDocument();
  });

  it('should render for screen reader only', () => {
    const { getByText } = renderComponent('main_heading', true);
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.className).toBe('heading heading--screen-reader-only');
  });
});
