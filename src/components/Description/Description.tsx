import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './Description.scss';

export type DescriptionProps = {};

export const Description: FC<DescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="description" data-testid="description">
      <p>{t('description')}</p>
      <p>{t('description_two')}</p>
    </section>
  );
};
