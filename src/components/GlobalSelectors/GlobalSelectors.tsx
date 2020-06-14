import React, { FC } from 'react';

import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ThemeSelector from 'components/ThemeSelector/ThemeSelector';

import './GlobalSelectors.scss';

export interface GlobalSelectorsProps {}

const GlobalSelectors: FC<GlobalSelectorsProps> = () => {
  return (
    <section className="global-selectors">
      <LanguageSwitcher />
      <ThemeSelector />
    </section>
  );
};

export default GlobalSelectors;
