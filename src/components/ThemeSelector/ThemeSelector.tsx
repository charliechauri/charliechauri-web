import React, { FC } from 'react';
import Select, { SelectOptionProps } from 'components/Select/Select';
import ThemeContext, { Themes } from 'ThemeContext';

export interface ThemeSelectorProps {}

const ThemeSelector: FC<ThemeSelectorProps> = () => {
  const options: SelectOptionProps[] = [
    { displayValue: 'LIGHT', value: Themes.LIGHT } /* @todo Add locale */,
    { displayValue: 'DARK', value: Themes.DARK } /* @todo Add locale */,
  ];

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Select
          ariaLabel="Theme selector" /* @todo Add locale */
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
