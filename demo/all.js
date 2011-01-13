#!/usr/bin/env node

if( typeof(require) !== 'undefined') {
  require('../lib/steel')
    .add('../demo/math')
    .add('../demo/string');
} else {
  load('lib/steel.js')
    .add('demo/math')
    .add('demo/string');
}
