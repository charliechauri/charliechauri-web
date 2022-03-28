import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nProvider } from 'test/providers';

import { SocialNetworks } from './index';

describe('SocialNetworks', () => {
  it('renders title and list of social networks', () => {
    render(
      <I18nProvider>
        <SocialNetworks />
      </I18nProvider>
    );

    const heading = screen.getByText('Follow me');
    const githubLink = screen.getByText('github');
    const linkedinLink = screen.getByText('linkedin');
    const twitterLink = screen.getByText('twitter');
    const instagramLink = screen.getByText('instagram');
    const links = [githubLink, linkedinLink, twitterLink, instagramLink];

    expect(heading.tagName).toBe('H2');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/charliechauri/'
    );
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/carlosechauri/'
    );
    expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/charliechauri/'
    );
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/charliechauri'
    );

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
