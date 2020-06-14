import React, { FC } from 'react';
import Select, { SelectOptionProps } from 'components/Select/Select';
import ThemeContext, { Themes } from 'ThemeContext';
import { useTranslation } from 'react-i18next';

export interface ThemeSelectorProps {}

const ThemeSelector: FC<ThemeSelectorProps> = () => {
  const { t } = useTranslation();

  const options: SelectOptionProps[] = [
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

export default ThemeSelector;
