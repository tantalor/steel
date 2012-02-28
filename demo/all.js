#!/usr/bin/env node

if( typeof(require) !== 'undefined') {
  require('../lib/steel')
    .suite([
      '../demo/math',
      '../demo/string',
      '../demo/fail'
    ]);
} else {
  load('lib/steel.js')
    .add('demo/math')
    .add('demo/string');
}
