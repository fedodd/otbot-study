const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/styles/common.pcss'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      }
    },
    {
      test: /\.pcss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      })
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '..'
        }
      }
      ]
    },
    {
      test: /\.html$/,
      include: path.resolve(__dirname, 'src/html/includes'),
      use: ['raw-loader']
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './styles/styles.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: './src/fonts',
      to: './fonts'
    },
    {
      from: './src/uploads',
      to: './uploads'
    },
    {
      from: './src/img',
      to: './img'
    }
    ])
  ].concat(htmlPlugins)
};
