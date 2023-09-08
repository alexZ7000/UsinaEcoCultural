'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('react-refresh/cjs/react-refresh-runtime.production.min.js');
} else {
  module.exports = require('react-refresh/cjs/react-refresh-runtime.development.js');
}
