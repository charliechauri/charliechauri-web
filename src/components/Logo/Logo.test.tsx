import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    const { getByAltText } = render(
      <I18nTestWrapper>
        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </I18nTestWrapper>
    );
    const logo = getByAltText(/charliechauri's logo/i);

    expect(logo).toBeInTheDocument();
  });
});
