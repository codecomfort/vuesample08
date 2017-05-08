const path = require('path');
const projectDir = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(projectDir, './src/main'),
  output: {
    path: path.resolve(projectDir, './build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ],
        exclude: path.resolve(projectDir, './node_modules')
      }
    ]
  }
}
