import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ThemeContext from 'ThemeContext';

import './Logo.scss';
import lightLogo from 'img/logo.png';
import darkLogo from 'img/logo_dark.png';

const logos = {
  light: lightLogo,
  dark: darkLogo,
};

export interface LogoProps {
  href: string;
}

const Logo: FC<LogoProps> = ({ href }) => {
  const { t } = useTranslation();

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <a
            href={href}
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logos[theme]}
              className="logo__img"
              alt={t('logo_alt_text')}
            />
          </a>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Logo;
