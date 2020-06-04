import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Heading.scss';

export interface HeadingProps {
  locKey: string;
  screenReaderOnly?: boolean;
}

const Heading: FunctionComponent<HeadingProps> = ({
  locKey,
  screenReaderOnly = false,
}) => {
  const { t } = useTranslation();

  return (
    <h1
      className={`heading ${
        screenReaderOnly ? 'heading--screen-reader-only' : ''
      }`}
    >
      {t(locKey)}
    </h1>
  );
};

export default Heading;
