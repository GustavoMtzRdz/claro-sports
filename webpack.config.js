var HtmlWebpackPlugin = require('html-webpack-plugin');
var MCEP = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
/*   resolve: {
    extension: ['.js', '.json', '.css']
  }, */
  cache: true,
  entry: [
    __dirname + '/assets/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    /* contentBase: path.join(__dirname, 'dist'), */
    inline: true,
    compress: true,
    publicPath: '/',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.pug'),
    }),
    new MCEP({
      filename: "assets/css/main.css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [ 'pug-loader' ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', MCEP.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
/*           {
            loader: 'url-loader',
            options: {
              limit: 5000
            }
          } */
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]',
              outputPath: 'assets/img',
              publicPath: 'assets/img',
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
    ]
  }
}
