import React, { FC } from 'react';
import { Select } from 'components/Select';
import { ThemeContext, Themes } from 'ThemeContext';
import { useTranslation } from 'react-i18next';

export type ThemeSelectorProps = {};

export const ThemeSelector: FC<ThemeSelectorProps> = () => {
  const { t } = useTranslation();

  const options = [
    {
      displayValue: t('theme_selector_light'),
      value: Themes.LIGHT,
    },
    {
      displayValue: t('theme_selector_dark'),
      value: Themes.DARK,
    },
  ];

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Select
          ariaLabel={t('theme_selector_label')}
          className="theme-selector"
          initialValue={context.theme}
          options={options}
          onChange={(newTheme: string) => {
            context.setTheme(newTheme as Themes);
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
};
