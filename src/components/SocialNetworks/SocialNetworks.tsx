import React, { FC } from 'react';

import { Heading, Levels } from 'components/Heading';
import { Link, TargetTypes } from 'components/Link';

import './SocialNetworks.scss';
import { socialNetworks } from './list';

export type SocialNetworksProps = {};

export const SocialNetworks: FC<SocialNetworksProps> = () => {
  return (
    <section className="social-networks">
      <Heading level={Levels.TWO} locKey="social_networks_heading" />

      <ul className="social-networks__list">
        {socialNetworks.map(({ href, name }) => (
          <li key={name} className="social-networks__list-item">
            <Link href={href} target={TargetTypes.BLANK}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
