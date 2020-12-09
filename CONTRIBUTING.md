# Contributing

First, thanks for your interest in contributing to React Inner Image Zoom! I didn't expect the enthusiasm for it so that's been pretty cool to see.

If you're looking for something to work on or want to talk through an idea before you start coding, visit the [issues page](https://github.com/laurenashpole/react-inner-image-zoom/issues).

## Getting Started

This component was bootstrapped using [nwb](https://github.com/insin/nwb)'s `react-component` command to speed through setting up demos, testing, and the basic build process.

Commits to this repo should follow the forking workflow. For an overview, check out this [tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) and use their instructions for copying your personal repo. Once that's done, install your node modules with:

```
npm install
```

and then run:

```
npm start
```

to start your demo app at [http://localhost:3000](http://localhost:3000).

## Development

The basic file structure in your new repo will be:

- `demo` demo app files.
- `src` component source files.
- `tests` tests and testing data.

Changes in the `src` directory will be reflected in the published package. When you've written your code and feel ready to commit, please use the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) when writing your commit messages (feel free to just use `*` for scope). This package uses [Semantic Release](https://github.com/semantic-release/semantic-release) for releases and versioning so that helps keep everything up to date.

If you're adding a new prop, don't forget to include a short description in the props table in the `README.md` file.

## Testing

nwb comes with [Karma](https://github.com/karma-runner/karma) built-in so that's the test runner of choice here. Since accurately testing this component requires actually loading image files, the tests are written using the [ReactDOM testing utilities](https://reactjs.org/docs/test-utils.html).

The following commands are available for testing:

- `npm test` will run the tests once.
- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.
- `npm run test:watch` will run the tests on every change.

Each command will also run [ESLint](https://github.com/eslint/eslint) on the component source files.

If you can, try to include new tests with your changes. Otherwise, just make sure to run `npm test` to check that the existing tests still pass before opening a pull request.
