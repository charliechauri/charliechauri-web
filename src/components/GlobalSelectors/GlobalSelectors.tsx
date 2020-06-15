import React, { FC } from 'react';

import LanguageSelector from 'components/LanguageSelector/LanguageSelector';
import ThemeSelector from 'components/ThemeSelector/ThemeSelector';

import './GlobalSelectors.scss';

export interface GlobalSelectorsProps {}

const GlobalSelectors: FC<GlobalSelectorsProps> = () => {
  return (
    <section className="global-selectors">
      <LanguageSelector />
      <ThemeSelector />
    </section>
  );
};

export default GlobalSelectors;
