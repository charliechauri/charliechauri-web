import React from 'react';
import './App.scss';

import Heading from 'components/Heading/Heading';
import Logo from 'components/Logo/Logo';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import SocialNetworks from 'components/SocialNetworks/SocialNetworks';
import Description from 'components/Description/Description';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Heading locKey="main_heading" screenReaderOnly={true} />

        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </header>
      <Description />
      <SocialNetworks />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
