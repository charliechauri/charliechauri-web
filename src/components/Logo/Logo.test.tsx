import React from 'react';
import { I18nProvider } from 'test/Providers';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    const { getByAltText } = render(
      <I18nProvider>
        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </I18nProvider>
    );
    const logo = getByAltText(/charliechauri's logo/i);

    expect(logo).toBeInTheDocument();
  });
});
