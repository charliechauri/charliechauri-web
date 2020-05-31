import React from 'react';
import logo from 'img/logo.png';
import { useTranslation } from 'react-i18next';
import './App.scss';

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

        {/* @todo create logo component */}
        <a
          href="https://www.linkedin.com/in/carlosechauri/"
          className="app__logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="app__logo-img" alt={t('logo_alt_text')} />
        </a>
      </header>
      <Description />
      <SocialNetworks />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
