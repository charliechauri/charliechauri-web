import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from 'ThemeContext';

import './Logo.scss';
import lightLogo from 'img/logo.png';
import darkLogo from 'img/logo_dark.png';

const logos: Record<'light' | 'dark', string> = {
  light: lightLogo,
  dark: darkLogo,
};

export type LogoProps = {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
};

export const Logo: FC<LogoProps> = ({
  href,
  target = '_blank',
  className = '',
}) => {
  const { t } = useTranslation();

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <a
            href={href}
            className={`logo ${className}`}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
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
