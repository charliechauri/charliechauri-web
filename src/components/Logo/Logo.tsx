import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Logo.scss';
import logo from 'img/logo.png';

export interface LogoProps {
  href: string;
}

const Logo: FunctionComponent<LogoProps> = ({ href }) => {
  const { t } = useTranslation();

  return (
    <a href={href} className="logo" target="_blank" rel="noopener noreferrer">
      <img src={logo} className="logo__img" alt={t('logo_alt_text')} />
    </a>
  );
};

export default Logo;
