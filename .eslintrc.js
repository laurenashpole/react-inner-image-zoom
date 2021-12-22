module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxBracketSameLine: false,
        trailingComma: 'none',
        printWidth: 120,
        endOfLine: 'auto'
      }
    ]
  },
  ignorePatterns: ['**/dist/**', '**/es/**', '**/lib/**'],
  overrides: [
    {
      files: ['*.spec.js'],
      env: {
        mocha: true
      }
    }
  ]
};
