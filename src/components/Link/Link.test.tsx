import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'test/providers';
import { Link, TargetTypes } from './index';

describe('Link', () => {
  it('should render, including default theme and custom css classes', () => {
    render(
      <ThemeProvider>
        <Link href="#some-where" target={TargetTypes.BLANK} className="custom">
          Regular link
        </Link>
      </ThemeProvider>
    );

    const link = screen.getByRole('link', { name: 'Regular link' });

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('class', 'link link--light custom');
    expect(link).toHaveAttribute('href', '#some-where');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
