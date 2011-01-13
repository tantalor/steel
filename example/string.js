if (typeof require !== 'undefined') {
  // commonjs
  var QUnit = require('../lib/steel');
} else if (typeof(load) !== 'undefined') {
  // jsc
  var QUnit = load('lib/steel.js');
}

with (QUnit) {
  test ('concatenation', function () {
    ok ("a"+"b" == "ab", 'a+b=ab');
  });
  test ('substring', function () {
    ok ("abc".substr(1,1) == "b", 'abc[1:2]=b');
  });
}

if (QUnit.run) QUnit.run(typeof exports !== 'undefined' ? exports : undefined);
