import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Description.scss';

export interface DescriptionProps {}

const Description: FunctionComponent<DescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="description">
      <p>{t('description')}</p>
    </section>
  );
};

export default Description;
