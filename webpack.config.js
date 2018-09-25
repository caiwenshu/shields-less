var path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shields-less.js',
    library: 'shieldsLess',
    libraryTarget: 'umd',
    globalObject: "(typeof window !== 'undefined' ? window : this)"
  }
}
