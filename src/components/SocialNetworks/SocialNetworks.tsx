import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './SocialNetworks.scss';
import { socialNetworks } from './list';

export interface SocialNetworksProps {}

const SocialNetworks: FC<SocialNetworksProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="social-networks">
      <h2 className="social-networks__heading">
        {t('social_networks_heading')}
      </h2>
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
};

export default SocialNetworks;
