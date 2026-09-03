import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { ThemeContext, Themes, Palette } from 'ThemeContext';
import { GlobalSelectors } from 'components/GlobalSelectors';
import { Loading } from 'components/Loading';
import { ErrorBoundary } from './components/ErrorBoundary';

import './App.scss';

const Home = lazy(() => import('pages/Home'));
const Blog = lazy(() => import('pages/Blog'));
const BlogPost = lazy(() => import('pages/BlogPost'));

type AppProps = {};

const RouteSelectors: React.FC = () => {
  const { pathname } = useLocation();
  const isBlogRoute = pathname === '/blog' || pathname.startsWith('/blog/');

  return <GlobalSelectors showLanguage={!isBlogRoute} />;
};

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
                <Route exact path="/blog">
                  <Blog />
                </Route>
                <Route path="/blog/:slug">
                  <BlogPost />
                </Route>
              </Switch>
            </Suspense>
            <RouteSelectors />
          </Router>
        </ErrorBoundary>
      </ThemeContext.Provider>
    </div>
  );
};
