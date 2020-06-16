import React from 'react';
import { I18nTestWrapper } from 'test/utils';
import { render, fireEvent } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

describe('Heading', () => {
  const renderComponent = () =>
    render(
      <I18nTestWrapper>
        <LanguageSelector />
      </I18nTestWrapper>
    );

  it('should render when valid locKey is set', async () => {
    const { getByLabelText, getByText } = renderComponent();
    const languageSelector = getByLabelText(
      /Select an option to change language/i
    ) as HTMLSelectElement;
    const defaultOption = getByText(/English/i);

    expect(defaultOption).toBeVisible();
    expect(languageSelector).toBeInTheDocument();
    expect(languageSelector.value).toBe('en');

    fireEvent.change(languageSelector, { target: { value: 'es' } });

    expect(getByText(/Español/i)).toBeVisible();
    expect(languageSelector.value).toBe('es');
  });
});
