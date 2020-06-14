import React, { ReactChild, FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';

export interface I18nTestWrapperProps {
  children: ReactChild;
}

const I18nTestWrapper: FC<I18nTestWrapperProps> = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default I18nTestWrapper;
