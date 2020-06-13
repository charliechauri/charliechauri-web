import React from 'react';

import Heading from 'components/Heading/Heading';
import Logo from 'components/Logo/Logo';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import SocialNetworks from 'components/SocialNetworks/SocialNetworks';
import Description from 'components/Description/Description';

export default function Home() {
  return (
    <div className="app">
      <header className="header">
        <Heading locKey="main_heading" />

        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </header>
      <Description />
      <SocialNetworks />
      <LanguageSwitcher />
    </div>
  );
}
