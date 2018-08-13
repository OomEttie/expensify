// entry -> output
// loader

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, arg) => {
  const isProduction = env == 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    // entry: './src/playground/redux-expensify.js',
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};

// plugins: [CSSExtract],

// {
//   test: /\.s?css$/,
//   use: ['style-loader', 'css-loader', 'sass-loader']
// }

// {
//   test: /\.s?css$/,
//   use: CSSExtract.extract({
//     use: ['css-loader', 'sass-loader']
//   })
// }
