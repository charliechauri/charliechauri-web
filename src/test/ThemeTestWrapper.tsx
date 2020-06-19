import React, { ReactChild, FC } from 'react';
import ThemeContext, { Themes } from 'ThemeContext';

export interface ThemeTestWrapperProps {
  children: ReactChild;
  theme?: Themes;
  setTheme?: (theme: Themes) => void;
}

const ThemeTestWrapper: FC<ThemeTestWrapperProps> = ({
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

export default ThemeTestWrapper;
