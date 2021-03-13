import React, { FC } from 'react';

import ThemeContext from 'ThemeContext';

import './Link.scss';

export enum TargetTypes {
  BLANK = '_blank',
  PARENT = '_parent',
  SELF = '_self',
  TOP = '_top',
}

export interface LinkProps {
  href: string;
  target: TargetTypes;
  className?: string;
}

const Link: FC<LinkProps> = ({ href, target, children, className = '' }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <a
            target={target}
            href={href}
            className={`link link--${theme} ${className}`}
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Link;
