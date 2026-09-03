import React from 'react';
import { I18nProvider } from 'test/providers';
import { render, screen } from '@testing-library/react';
import { Logo } from './index';

describe('Logo', () => {
  it('renders', () => {
    render(
      <I18nProvider>
        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </I18nProvider>
    );

    expect(
      screen.getByRole('img', { name: /charliechauri's logo/i })
    ).toBeVisible();
  });

  it('supports internal links', () => {
    render(
      <I18nProvider>
        <Logo href="/" target="_self" />
      </I18nProvider>
    );

    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
    expect(screen.getByRole('link')).not.toHaveAttribute('rel');
  });
});
