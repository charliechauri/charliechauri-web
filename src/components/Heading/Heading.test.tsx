import React from 'react';
import { I18nProvider } from 'test/providers';
import { render, screen } from '@testing-library/react';
import { Heading, Levels } from './index';

describe('Heading', () => {
  it('should render when valid locKey is set', () => {
    render(
      <I18nProvider>
        <Heading locKey="main_heading" level={Levels.ONE} />
      </I18nProvider>
    );
    const heading = screen.getByRole('heading', {
      name: /charliechauri, software engineer/i,
      level: 1,
    });

    expect(heading).toBeVisible();
    expect(heading).toHaveAttribute('class', 'heading ');
    expect(heading).toBeVisible();
  });

  it('should render heading level 2', () => {
    render(
      <I18nProvider>
        <Heading locKey="main_heading" level={Levels.TWO} />
      </I18nProvider>
    );

    const heading = screen.getByRole('heading', {
      name: /charliechauri, software engineer/i,
      level: 2,
    });

    expect(heading).toBeVisible();
    expect(heading).toHaveAttribute('class', 'heading ');
  });

  it('should render heading level 3', () => {
    render(
      <I18nProvider>
        <Heading locKey="main_heading" level={Levels.THREE} />
      </I18nProvider>
    );

    const heading = screen.getByRole('heading', {
      name: /charliechauri, software engineer/i,
      level: 3,
    });

    expect(heading).toBeVisible();
    expect(heading).toHaveAttribute('class', 'heading ');
  });

  it('should render heading level 1 for screen reader only', () => {
    render(
      <I18nProvider>
        <Heading locKey="main_heading" level={Levels.ONE} screenReaderOnly />
      </I18nProvider>
    );

    const heading = screen.getByRole('heading', {
      name: /charliechauri, software engineer/i,
      level: 1,
    });

    expect(heading).toBeVisible();
    expect(heading).toHaveAttribute('class', 'heading heading--sr-only');
  });
});
