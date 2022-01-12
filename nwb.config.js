module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  karma: {
    browsers: ['ChromeHeadless'],
    plugins: ['karma-firefox-launcher']
  }
};
