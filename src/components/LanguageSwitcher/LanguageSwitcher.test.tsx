import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';

describe('Heading', () => {
  const renderComponent = () =>
    render(
      <I18nTestWrapper>
        <LanguageSwitcher />
      </I18nTestWrapper>
    );

  it('should render when valid locKey is set', async () => {
    const { getByLabelText, getByText } = renderComponent();
    const languageSwitcher = getByLabelText(
      /Select an option to change language/i
    ) as HTMLSelectElement;
    const defaultOption = getByText(/English/i);

    expect(defaultOption).toBeVisible();
    expect(languageSwitcher).toBeInTheDocument();
    expect(languageSwitcher.value).toBe('en');

    fireEvent.change(languageSwitcher, { value: 'es' });

    expect(getByText(/Español/i)).toBeVisible();
  });
});
