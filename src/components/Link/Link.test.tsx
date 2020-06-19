import React from 'react';
import { render } from '@testing-library/react';
import ThemeTestWrapper from 'test/ThemeTestWrapper';
import Link, { TargetTypes } from './Link';

describe('Link', () => {
  it('should render, including default theme and custom css classes', () => {
    const { getByText } = render(
      <ThemeTestWrapper>
        <Link href="#some-where" target={TargetTypes.BLANK} className="custom">
          Regular link
        </Link>
      </ThemeTestWrapper>
    );

    const link = getByText('Regular link') as HTMLAnchorElement;

    expect(link.className).toBe('link link--light custom');
    expect(link.href).toContain('#some-where');
    expect(link.rel).toBe('noopener noreferrer');
    expect(link.target).toBe('_blank');
  });
});
