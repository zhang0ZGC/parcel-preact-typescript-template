module.exports = {
  plugins: {
    autoprefixer: {
      grid: true
    },
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }
  },
  modules: true
};
