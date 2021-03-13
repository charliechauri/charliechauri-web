import React, { FC } from 'react';
import ThemeContext, { Themes } from 'ThemeContext';

export interface ThemeProviderProps {
  theme?: Themes;
  setTheme?: (theme: Themes) => void;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = Themes.LIGHT,
  setTheme = () => {},
}) => {
  const themeProviderValue = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
