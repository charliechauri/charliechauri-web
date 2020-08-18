import React, { ReactChild, FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';

export interface I18nProviderProps {
  children: ReactChild;
}

const I18nProvider: FC<I18nProviderProps> = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default I18nProvider;