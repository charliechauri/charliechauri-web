import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './Heading.scss';

export interface HeadingProps {
  locKey: string;
}

const Heading: FC<HeadingProps> = ({ locKey }) => {
  const { t } = useTranslation();

  return <h1 className="heading">{t(locKey)}</h1>;
};

export default Heading;
