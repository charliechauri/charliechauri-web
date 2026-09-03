import { findPost, posts } from './posts';

describe('blog posts', () => {
  it('loads posts with date-based slugs and metadata', () => {
    expect(posts).toHaveLength(1);
    expect(posts[0]).toMatchObject({
      title: 'Starting this blog',
      author: 'Charli Echauri',
      publishedDate: '2026-09-02',
      slug: '2026-09-02-starting-this-blog',
    });
    expect(posts[0].contents).toContain('<h2>What to expect</h2>');
    expect(posts[0].contents).toContain('<h3>More soon</h3>');
  });

  it('finds a post by slug', () => {
    expect(findPost('2026-09-02-starting-this-blog')?.title).toBe(
      'Starting this blog'
    );
    expect(findPost('missing-post')).toBeUndefined();
  });
});
