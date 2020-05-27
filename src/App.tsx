import React from 'react';
import logo from 'img/logo.png';
import './App.scss';

/** @todo move to its own file */
const socialNetworks = [
  {
    name: 'github',
    href: ' https://github.com/charliechauri/',
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/carlosechauri/',
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/charliechauri/',
  },
];

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

      {/* @todo create social networks component and children */}
      <section className="app__social-networks">
        <h2 className="app__social-networks-heading">Follow me</h2>
        <ul className="app__social-networks-list">
          {socialNetworks.map(({ href, name }) => (
            <li key={name} className="app__social-networks-list-item">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
