const path = require('path');
const projectDir = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(projectDir, './src/main'),
  output: {
    path: path.resolve(projectDir, './build'),
    filename: 'main.js',
  },
  module: {
  }
}
