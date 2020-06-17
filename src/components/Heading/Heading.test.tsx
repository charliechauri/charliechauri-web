import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render } from '@testing-library/react';
import Heading, { Levels } from './Heading';

describe('Heading', () => {
  const renderComponent = (
    locKey: string,
    level: Levels = Levels.ONE,
    screenReaderOnly = false
  ) =>
    render(
      <I18nTestWrapper>
        <Heading
          level={level}
          locKey={locKey}
          screenReaderOnly={screenReaderOnly}
        />
      </I18nTestWrapper>
    );

  it('should render when valid locKey is set', () => {
    const { getByText } = renderComponent('main_heading');
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toContain('heading');
    expect(heading).toBeVisible();
  });

  it("should render locKey when it's not defined", () => {
    const { getByText } = renderComponent('invalid_loc_key');
    const heading = getByText(/invalid_loc_key/i);

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should render heading level 2', () => {
    const { getByText } = renderComponent('main_heading', Levels.TWO);
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading.className).toContain('heading');
    expect(heading).toBeVisible();
  });

  it('should render heading level 3', () => {
    const { getByText } = renderComponent('main_heading', Levels.THREE);
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H3');
    expect(heading.className).toContain('heading');
    expect(heading).toBeVisible();
  });

  it('should render heading level 1 for screen reader only', () => {
    const screenReaderOnly = true;
    const { getByText } = renderComponent(
      'main_heading',
      Levels.ONE,
      screenReaderOnly
    );
    const heading = getByText(/charliechauri, software engineer/i);

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toContain('heading heading--sr-only');
  });
});
