import React from 'react';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Palette {
  purple = '#2b0477',
  blue = '#2b0477',
  greenOne = '#7ed0a8',
  greenTwo = '#a2db8a',
  yellow = '#ffffbc',
  orange = '#f9c9bb',
  pinkLight = '#ee9cdd',
  pinkMedium = '#f584c8',
  fuchsia = '#d207c7',
  white = '#ffffff',
  black = '#000000',
}

/* istanbul ignore next */
const ThemeContext = React.createContext({
  theme: Themes.LIGHT,
  setTheme: (theme: Themes) => {},
});

export default ThemeContext;
