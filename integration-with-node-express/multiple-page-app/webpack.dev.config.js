const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    luffy: './src/luffy.js',
    archer: './src/archer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },
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
      {
        // webpack will process loaders from right to left
        // 1st it will convert sass to css and then style loader will use this css to inject in the js file
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      // All the path are relative to output.path directory. To delete something in same level then use absolute path
      cleanOnceBeforeBuildPatterns: [
        '**/*', // delete all files recursively in the dist folder by default
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),
    // Html will take chunk name from entry point configuration
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello World',
      template: 'src/page-template.hbs',
      description: 'Some description',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'luffy.html',
      chunks: ['luffy'],
      title: 'Luffy',
      template: 'src/page-template.hbs',
      description: 'King Of The Pirates',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'archer.html',
      chunks: ['archer'],
      title: 'Archer',
      template: 'src/page-template.hbs',
      description: 'The Best Detective',
      minify: false,
    }),
  ],
};
