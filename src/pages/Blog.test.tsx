import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Blog from './Blog';
import BlogPost from './BlogPost';

describe('Blog', () => {
  it('lists posts and links to their date-based slug', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Blog' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Starting this blog' })).toHaveAttribute(
      'href',
      '/blog/2026-09-02-starting-this-blog'
    );
  });

  it('renders a post and handles unknown slugs', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/blog/2026-09-02-starting-this-blog']}>
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Starting this blog' })
    ).toBeVisible();
    expect(screen.getByText(/Today I’m starting this blog/)).toBeVisible();

    unmount();
    render(
      <MemoryRouter initialEntries={['/blog/missing-post']}>
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'Post not found' })).toBeVisible();
  });
});
