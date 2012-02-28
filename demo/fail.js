if (typeof require !== 'undefined') {
  // commonjs
  var QUnit = require('../lib/steel');
} else if (typeof(load) !== 'undefined') {
  // jsc
  var QUnit = load('lib/steel.js');
}

with (QUnit) {
  test ('fail', function () {
    ok (false, 'false');
  });
}

if (QUnit.run) QUnit.run(typeof exports !== 'undefined' ? exports : undefined);
