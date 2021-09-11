const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
  },
  mode: 'none',

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset', // Will automatically decide for resource or inline type
        parser: {
          // If size is less than 3KB webpack will use asset/inline
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 KB
          },
        },
      },
      {
        // It will tell the webpack, everytime we read the txt file, we want to treat it as asset module type
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        // Tells webpack that everytime it tries to import a css file, it needs to use both css loader and style loader. css loader reads content of the file and returns this content. And style loader takes the css and inject it in the page.
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
