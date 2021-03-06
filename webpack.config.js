const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

//
// Configuration
//

module.exports = {
  entry: {
    home: path.resolve(__dirname, './src/entries/home.js')//,
    // search: path.resolve(__dirname, './src/entries/search.js'),
    // account: path.resolve(__dirname, './src/entries/account.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './'),
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [new VueLoaderPlugin()]
}
