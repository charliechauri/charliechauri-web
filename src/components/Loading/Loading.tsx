import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useEllipsis } from './useEllipsis';

import './Loading.scss';

export type LoadingProps = {};

export const Loading: FC<LoadingProps> = () => {
  const { t } = useTranslation();
  const ellipsis = useEllipsis();

  return (
    <section className="loading">
      <div className="loading__content" data-testid="loading-content">
        {t('loading')} {ellipsis}
      </div>
    </section>
  );
};
