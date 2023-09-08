'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('scheduler/cjs/scheduler-unstable_mock.production.min.js');
} else {
  module.exports = require('scheduler/cjs/scheduler-unstable_mock.development.js');
}
