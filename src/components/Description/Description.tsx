import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './Description.scss';

export interface DescriptionProps {}

const Description: FC<DescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="description" data-testid="description">
      <p>{t('description')}</p>
    </section>
  );
};

export default Description;
