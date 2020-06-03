# charliechauri web site

[![Netlify Status](https://api.netlify.com/api/v1/badges/a12d3492-267e-4d6c-953d-f65d5bc5ec56/deploy-status)](https://app.netlify.com/sites/charliechauri/deploys)

## Description

There are two objectives for this project:

1. Be reference about some practices or things should be considered when developing a react application (and many other frontend applications) like: unit testing, internationalization, code structure, coverage, commit conventions, git hooks, linting, formatting, and more topics to be added.
2. Be an entry point when someone looks for charliechauri in the web 👨🏾‍💻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is based on [cra-extended](https://github.com/charliechauri/cra-extended), an initial boiler plate to have more features ootb.

![charliechauri](./charliechauri.gif)

## Before starting

This project is opinionated in the way code should be written in order to prevent errors, styling issues and to have consistency in the code base.

Fork this repo to start your own application.

For this project you'll need [yarn](https://yarnpkg.com)

## Installation

1. Run `nvm use` to set node version
1. Run `yarn` to install dependencies

## Development

Typescript is configured out of the box so as absolute imports based on `src`

This project supports [Sass](https://sass-lang.com/) with absolute imports as well ootbx

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn format:prettier`

Use prettier as code formatter

### `yarn lint`

Run linter configuration to check errors, styling issues and inconsistencies

### `yarn lint:autofix`

Run linter and applies autofix where possible

### `yarn test`

Launches the test runner in the interactive watch mode

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Push to repository

Run before each push `test:nowatch` and `build` in order to maintain quality of the project.
Minimum coverage is required and configured as follows:

```bash
branches: 90
functions: 90
lines: 90
statements: 90
```

This is the default value from jest

However, if you feel confident enough your change doesn't need to run tests (change in docs, config, etc) you can pass `--no-verify` argument to the `git push`

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Git hooks

This project is set to run linter/formatter before a commit and before a pushing it will run tests and build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

```
