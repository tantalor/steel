if (typeof require !== 'undefined') {
  // commonjs
  var QUnit = require('../lib/steel');
} else if (typeof(load) !== 'undefined') {
  // jsc
  var QUnit = load('lib/steel.js');
}

with (QUnit) {
  test ('addition', function () {
    ok (1+1 == 2, '1+1=2');
    ok (1-1 == 0, '1-1=0');
  });
  test ('multiplication', function () {
    ok (2*0 == 0, '2*0=0');
    ok (2*1 == 2, '2*1=4');
    ok (2*2 == 4, '2*2=4');
  });
}

if (QUnit.run) QUnit.run(typeof exports !== 'undefined' ? exports : undefined);
