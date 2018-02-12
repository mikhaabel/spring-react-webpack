const packageJSON = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const API_BASE_URL = {
  local: JSON.stringify('../../app/data.json'),
  // local: JSON.stringify('http://localhost:8070/api/all'),
  build: JSON.stringify('http://localhost:8070/api/all'),
};

const PATHS = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

const common = {
  entry: './app/index.js',
  output: {
    path: PATHS.build,
    filename: 'app-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'API_BASE_URL': API_BASE_URL[TARGET]
    })
  ]
};

if (TARGET === 'local' || !TARGET) {
  module.exports = merge.smart(common, {
    output: {
      publicPath: '/assets/'
    },
    devtool: 'source-map'
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
