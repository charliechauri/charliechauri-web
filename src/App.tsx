import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext, Themes, Palette } from 'ThemeContext';
import { GlobalSelectors } from 'components/GlobalSelectors';
import { Loading } from 'components/Loading';
import { ErrorBoundary } from './components/ErrorBoundary';

import './App.scss';

const Home = lazy(() => import('pages/Home'));

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [theme, setTheme] = useState(Themes.LIGHT);

  useEffect(() => {
    const body = document.querySelector('body');

    if (theme === Themes.LIGHT) {
      body!.style.backgroundColor = Palette.yellow;
    } else {
      body!.style.backgroundColor = Palette.black;
    }
  }, [theme]);

  return (
    <div className={`app app--${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ErrorBoundary>
          <Router>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Suspense>
          </Router>
          <GlobalSelectors />
        </ErrorBoundary>
      </ThemeContext.Provider>
    </div>
  );
};
