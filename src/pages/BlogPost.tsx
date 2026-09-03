import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { findPost } from 'blog/posts';

import './Blog.scss';

type RouteParams = {
  slug: string;
};

export default function BlogPost() {
  const { slug } = useParams<RouteParams>();
  const post = findPost(slug);

  if (!post) {
    return (
      <main className="blog">
        <header className="blog__header">
          <Logo href="/" target="_self" className="blog__logo" />
          <h1>Post not found</h1>
        </header>
        <Link to="/blog" className="blog__link">
          Back to the blog
        </Link>
      </main>
    );
  }

  return (
    <main className="blog blog--post">
      <header className="blog__header">
        <Logo href="/" target="_self" className="blog__logo" />
        <h1>{post.title}</h1>
      </header>
      <p className="blog__metadata">
        By {post.author} ·{' '}
        <time dateTime={post.publishedDate}>{post.publishedDate}</time>
      </p>
      <article
        className="blog__contents"
        dangerouslySetInnerHTML={{ __html: post.contents }}
      />
      <Link to="/blog" className="blog__back">
        ← Back to all posts
      </Link>
    </main>
  );
}
