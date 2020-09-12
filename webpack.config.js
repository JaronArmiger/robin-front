import path from 'path';

module.exports = {
  entry: './src/index.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	publicPath: '/',
  	filename: 'bundle.js',
  },
  devServer: {
  	contentBase: path.join(__dirname, 'dist'),
  },
};