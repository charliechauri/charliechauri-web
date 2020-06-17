import React from 'react';

import Heading, { Levels } from 'components/Heading/Heading';
import Logo from 'components/Logo/Logo';
import SocialNetworks from 'components/SocialNetworks/SocialNetworks';
import Description from 'components/Description/Description';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Heading
          level={Levels.ONE}
          locKey="main_heading"
          screenReaderOnly={true}
        />

        <Logo href="https://www.linkedin.com/in/carlosechauri" />
      </header>
      <Description />
      <SocialNetworks />
    </div>
  );
}
