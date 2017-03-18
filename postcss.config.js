const DEV = process.env.NODE_ENV === 'development';

const plugins = [
  require('postcss-cssnext')
];

if (!DEV) {
  plugins.push(require('cssnano')({}));
}

module.exports = {plugins};