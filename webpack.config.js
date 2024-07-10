const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Translates CSS into CommonJS
          'postcss-loader', // Process CSS with PostCSS
          'resolve-url-loader', // Resolves relative paths in url() statements
          'sass-loader'    // Compiles Sass to CSS
        ]
      }
    ]
  }
};
