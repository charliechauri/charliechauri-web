import React, { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

export interface LanguageSwitcherProps {}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const handleLanguageChange = (event: FormEvent<HTMLSelectElement>) => {
    const { value: newLanguage } = event.currentTarget;

    i18n.changeLanguage(newLanguage);
  };

  return (
    <section>
      <select onChange={handleLanguageChange} value={language}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </section>
  );
};

export default LanguageSwitcher;
