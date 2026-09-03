import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { posts } from 'blog/posts';

import './Blog.scss';

export default function Blog() {
  return (
    <main className="blog">
      <header className="blog__header">
        <Logo href="/" target="_self" className="blog__logo" />
        <h1>Blog</h1>
      </header>
      <p className="blog__intro">Notes about what I’m learning and building.</p>
      <ul className="blog__list">
        {posts.map((post) => (
          <li key={post.slug} className="blog__item">
            <Link to={`/blog/${post.slug}`} className="blog__link">
              {post.title}
            </Link>
            <time dateTime={post.publishedDate}>{post.publishedDate}</time>
            <p>{post.author}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
