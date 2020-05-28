import React from 'react';
import logo from 'img/logo.png';
import './App.scss';

import SocialNetworks from 'SocialNetworks/SocialNetworks';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="screen-reader-only">charliechauri software engineer</h1>

        {/* @todo create logo component */}
        <a
          href="https://www.linkedin.com/in/carlosechauri/"
          className="app__logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logo}
            className="app__logo-img"
            alt="charliechauri's logo"
          />
        </a>
      </header>

      {/* @todo create description component */}
      <section className="app__description">
        <p>
          I'm a <mark>Software Engineer</mark> with experience in different
          industries (travel technology, human resources, legal services and
          energy) with global projects and remote teams.
        </p>
      </section>

      <SocialNetworks />
    </div>
  );
}

export default App;
