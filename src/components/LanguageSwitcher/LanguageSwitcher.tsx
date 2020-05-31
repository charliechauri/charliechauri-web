import React, { FunctionComponent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import LOCALES from 'locales/locales';

import './LanguageSwitcher.scss';

export interface LanguageSwitcherProps {}

const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const handleLanguageChange = (event: FormEvent<HTMLSelectElement>) => {
    const { value: newLanguage } = event.currentTarget;

    i18n.changeLanguage(newLanguage);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={language}
      className="custom-select"
      aria-label={t('language_switcher_indications')}
    >
      {LOCALES.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
