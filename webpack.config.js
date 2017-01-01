var path = require('path');
var webpack = require('webpack');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";

module.exports = {
  context: path.resolve(__dirname, 'src'),
  
  entry: [
  'react-hot-loader/patch',
  './src/index.jsx'
  ],

  output: {
    filename: "app.js",
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders:  ["react-hot", "babel-loader"],
    }
    ],
  },
  devServer: {
    contentBase: "./public",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),  
  ]
};