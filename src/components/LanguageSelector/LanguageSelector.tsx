import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LOCALES from 'locales/locales';
import Select from 'components/Select/Select';

export interface LanguageSelectorProps {}

const LanguageSelector: FC<LanguageSelectorProps> = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  const languages = LOCALES.map(({ code, name }) => ({
    value: code,
    displayValue: name,
  }));

  return (
    <Select
      className="language-switcher"
      ariaLabel={t('language_switcher_indications')}
      initialValue={language}
      options={languages}
      onChange={handleLanguageChange}
    />
  );
};

export default LanguageSelector;
