const path = require('path');
const AsyncAwaitPlugin = require('webpack-async-await') ;
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'))
 // also enter development mode since it's a development webpack configuration 
 // (see below for explanation) 
 .development();


module.exports = {
  entry: './src/static/app/index.jsx',
  output: {   
    path: path.resolve(__dirname, 'src/static'),
    filename: 'bundle.js',      
  },
  module: {  
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new AsyncAwaitPlugin({}),
    webpackIsomorphicToolsPlugin
  ]
}
