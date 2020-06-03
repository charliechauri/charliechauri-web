import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';

import Logo from 'components/Logo/Logo';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import SocialNetworks from 'components/SocialNetworks/SocialNetworks';
import Description from 'components/Description/Description';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="header">
        {/* @todo create heading component */}
        <h1 className="screen-reader-only">{t('main_heading')}</h1>

        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </header>
      <Description />
      <SocialNetworks />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
