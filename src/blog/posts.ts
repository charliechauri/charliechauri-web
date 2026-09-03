type PostFrontmatter = {
  title: string;
  author: string;
  publishedDate: string;
};

export type BlogPost = PostFrontmatter & {
  slug: string;
  contents: string;
};

const postFiles = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const slugify = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const renderMarkdown = (content: string) =>
  content
    .trim()
    .split(/\n{2,}/)
    .map((block) => {
      if (block.startsWith('### ')) return `<h3>${block.slice(4)}</h3>`;
      if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`;
      if (block.startsWith('# ')) return `<h1>${block.slice(2)}</h1>`;
      return `<p>${block.replace(/\n/g, ' ')}</p>`;
    })
    .join('');

const toPost = (source: string): BlogPost => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error('Blog posts must start with YAML frontmatter.');
  }

  const [, frontmatter, content] = match;
  const metadata = Object.fromEntries(
    frontmatter.split('\n').map((line) => {
      const [key, ...value] = line.split(':');
      return [key, value.join(':').trim()];
    })
  ) as unknown as PostFrontmatter;

  return {
    ...metadata,
    slug: `${metadata.publishedDate}-${slugify(metadata.title)}`,
    contents: renderMarkdown(content),
  };
};

export const posts = Object.entries(postFiles)
  .map(([, source]) => toPost(source))
  .sort((first, second) =>
    second.publishedDate.localeCompare(first.publishedDate)
  );

export const findPost = (slug: string) =>
  posts.find((post) => post.slug === slug);
