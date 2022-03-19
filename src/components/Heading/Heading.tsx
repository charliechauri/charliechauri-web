/**
 * Support dark theme out of the box since this is a pure text component
 */
import { createElement, FC } from 'react';
import { useTranslation } from 'react-i18next';

import './Heading.scss';

export enum Levels {
  ONE = '1',
  TWO = '2',
  THREE = '3',
}

export type HeadingProps = {
  level: Levels;
  locKey: string;
  screenReaderOnly?: boolean;
};

export const Heading: FC<HeadingProps> = ({
  level,
  locKey,
  screenReaderOnly = false,
}) => {
  const { t } = useTranslation();
  const heading = `h${level}`;
  const screenReaderOnlyClassName = screenReaderOnly ? 'heading--sr-only' : '';
  const className = `heading ${screenReaderOnlyClassName}`;

  return createElement(heading, { className }, t(locKey));
};
