import React from 'react';

import Heading from 'components/Heading/Heading';
import Logo from 'components/Logo/Logo';
import SocialNetworks from 'components/SocialNetworks/SocialNetworks';
import Description from 'components/Description/Description';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Heading locKey="main_heading" />

        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </header>
      <Description />
      <SocialNetworks />
    </div>
  );
}
