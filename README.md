# charliechauri web site

[![Netlify Status](https://api.netlify.com/api/v1/badges/a12d3492-267e-4d6c-953d-f65d5bc5ec56/deploy-status)](https://app.netlify.com/sites/charliechauri/deploys)

## Description

This is a TypeScript React application demonstrating unit testing,
internationalization, code structure, coverage, commit conventions, git hooks,
linting, and formatting.

The application uses [Vite](https://vite.dev/) for development and production
builds and [Vitest](https://vitest.dev/) with React Testing Library for tests.

## Installation

1. Run `nvm use` to set the Node version.
2. Run `yarn` to install dependencies.

## Available Scripts

### `yarn start`

Runs the app in development mode at http://localhost:5173.

### `yarn lint`

Runs the linter.

### `yarn format:prettier`

Formats source files with Prettier.

### `yarn test`

Launches Vitest in watch mode.

### `yarn test:nowatch`

Runs the test suite once with coverage and the configured 90% global coverage
threshold.

### `yarn build`

Builds the production app into `build/` for Netlify deployment.

## Blog

The blog is available at `/blog`. Add posts as Markdown files in
`src/content/blog/` with `title`, `author`, and `publishedDate` frontmatter.
Routes use the `YYYY-MM-DD-title` slug format.

### `yarn analyze`

Analyzes the generated JavaScript source maps.

## Git hooks

The project runs linting and formatting before commits, and tests and a
production build before pushes.

## Learn More

See the [Vite documentation](https://vite.dev/guide/) and
[React documentation](https://react.dev/).
