#!/usr/bin/env node

if( typeof(require) !== 'undefined') {
  require('../lib/steel')
    .add('../example/math')
    .add('../example/string');
} else {
  load('lib/steel.js')
    .add('example/math')
    .add('example/string');
}
