import React from 'react';
import { I18nProvider } from 'test/providers';
import { render, screen } from '@testing-library/react';
import { Logo } from './index';

describe('Logo', () => {
  it('should render', () => {
    render(
      <I18nProvider>
        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </I18nProvider>
    );

    expect(
      screen.getByRole('img', { name: /charliechauri's logo/i })
    ).toBeVisible();
  });
});
