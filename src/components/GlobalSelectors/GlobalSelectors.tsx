import React, { FC } from 'react';

import { LanguageSelector } from 'components/LanguageSelector';
import { ThemeSelector } from 'components/ThemeSelector';

import './GlobalSelectors.scss';

export type GlobalSelectorsProps = {};

export const GlobalSelectors: FC<GlobalSelectorsProps> = () => {
  return (
    <section className="global-selectors">
      <LanguageSelector />
      <ThemeSelector />
    </section>
  );
};
