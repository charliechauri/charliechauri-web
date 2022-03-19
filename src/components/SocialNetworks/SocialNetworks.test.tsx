import React from 'react';
import { render } from '@testing-library/react';
import { I18nProvider } from 'test/providers';

import { SocialNetworks } from './index';

describe('SocialNetworks', () => {
  const renderComponent = () =>
    render(
      <I18nProvider>
        <SocialNetworks />
      </I18nProvider>
    );

  it('should render title and list of social networks', () => {
    const { getByText } = renderComponent();

    const heading = getByText('Follow me') as HTMLHeadingElement;
    const githubLink = getByText('github') as HTMLAnchorElement;
    const linkedinLink = getByText('linkedin') as HTMLAnchorElement;
    const twitterLink = getByText('twitter') as HTMLAnchorElement;
    const instagramLink = getByText('instagram') as HTMLAnchorElement;
    const links = [githubLink, linkedinLink, twitterLink, instagramLink];

    expect(heading.tagName).toBe('H2');
    expect(githubLink.href).toBe('https://github.com/charliechauri/');
    expect(linkedinLink.href).toBe(
      'https://www.linkedin.com/in/carlosechauri/'
    );
    expect(twitterLink.href).toBe('https://twitter.com/charliechauri/');
    expect(instagramLink.href).toBe('https://instagram.com/charliechauri');

    links.forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toBe('noopener noreferrer');
    });
  });
});
