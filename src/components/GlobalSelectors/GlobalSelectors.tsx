import React, { FC } from 'react';

import { LanguageSelector } from 'components/LanguageSelector';
import { ThemeSelector } from 'components/ThemeSelector';

import './GlobalSelectors.scss';

export type GlobalSelectorsProps = {
  showLanguage?: boolean;
};

export const GlobalSelectors: FC<GlobalSelectorsProps> = ({
  showLanguage = true,
}) => {
  return (
    <section className="global-selectors">
      {showLanguage && <LanguageSelector />}
      <ThemeSelector />
    </section>
  );
};
