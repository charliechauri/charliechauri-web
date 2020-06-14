import React, { FC, ReactChild, ReactChildren } from 'react';

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
  children: ReactChildren | ReactChild;
}

const Link: FC<LinkProps> = ({ href, target, children, className = '' }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <a
            target={target}
            href={href}
            className={`link link--${context.theme} ${className}`}
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
