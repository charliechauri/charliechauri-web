import React, { FunctionComponent } from 'react';

import './SocialNetworks.scss';
import { socialNetworks } from './list';

export interface SocialNetworksProps {}

const SocialNetworks: FunctionComponent<SocialNetworksProps> = () => (
  <section className="social-networks">
    <h2 className="social-networks__heading">Follow me</h2>
    <ul className="social-networks__list">
      {socialNetworks.map(({ href, name }) => (
        <li key={name} className="social-networks__list-item">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default SocialNetworks;
