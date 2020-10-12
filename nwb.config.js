module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    env: {
      targets: ">1% or last 2 versions, not dead, not ie <= 11, not op_mini all, not ie_mob <= 11"
    }
  }
}
