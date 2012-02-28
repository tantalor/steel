(function () {
  if (typeof(require) !== 'undefined') {
    // common
    
    var any_failed;
  
    try {
      var narwhal = require('narwhal');
    } catch (e) {}
  
    exports.add = function (filename) {
      if (narwhal) {
        require('test').run(require(filename));
      } else {
        require(filename);
      }
      return exports;
    }
    
    exports.suite = function (files) {
      // print("any failed");
      for (var i = 0; i < files.length; i++) {
        exports.add(files[i]);
      }
      if (any_failed) {
        if (narwhal) {
          // narwhal
          require('os').exit(1);
        } else if (typeof(quit) !== "undefined") {
          // ringo
          quit(1);
        } else {
          // node
          process.exit(1);
        }
      }
    }
  
    var assert = require("assert");
  
    try {
      var narwhal = require('narwhal');
    } catch (e) {}
  
    if (narwhal) {
      var tests = {};
      exports.test = function (name, fn) {
        tests['test '+name] = fn;
      };
      exports.ok = function (value, name) {
        try {
          assert.ok(value, name);
        } catch (e) {
          any_failed = 1;
          throw e;
        }
      };
      exports.run = function (local_exports) {
        for (var test in tests) {
          local_exports[test] = tests[test]
        }
        tests = {};
      };
    } else {
      // node, ringo
      var tests = {};
      var _print;
      
      if (typeof print === "undefined") {
        try {
          // node
          var sys = require('sys');
          _print = function (s) {
            sys.print(s+"\n");
          }
        } catch (e) {}
      } else {
        _print = print;
      }
      
      exports.test = function (name, fn) {
        tests['test '+name] = fn;
      };
      exports.ok = function (value, name) {
        try {
          assert.ok(value, name);
        } catch (e) {
          any_failed = 1;
          if (e.name === "AssertionError") {
            _print("    FAIL: "+name);
          }
          throw e;
        }
      };
      exports.run = function () {
        _print("+ Running");
        var passes = 0, fails = 0, errors = 0;
        for (var test in tests) {
          _print("  + Running test "+test);
          try {
            tests[test]();
            passes++;
          } catch (e) {
            if (e.name === "AssertionError") {
              fails++;
            } else {
              errors++;
            }
          }
        }
        _print("Passes: "+passes+", Fails: "+fails+", Errors: "+errors);
        tests = {};
      };
    }
  } else if (typeof(load) !== 'undefined') {
    // jsc
    
    var AssertionError = {};
    var tests = {};
    
    var local_exports = {
      add: function (filename) {
        if (!filename.match("\.js$")) filename += ".js";
        load(filename);
        return local_exports;
      },
      test: function (name, fn) {
        tests['test '+name] = fn;
      },
      ok: function (value, name) {
        if (!value) {
          print("    FAIL: "+name);
          throw AssertionError;
        }
      },
      run: function () {
        print("+ Running");
        var passes = 0, fails = 0, errors = 0;
        for (var test in tests) {
          print("  + Running test "+test);
          try {
            tests[test]();
            passes++;
          } catch (e) {
            if (e === AssertionError) {
              fails++;
            } else {
              errors++;
            }
          }
        }
        print("Passes: "+passes+", Fails: "+fails+", Errors: "+errors);
        tests = {};
      }
    };
    
    return local_exports;
  }
})();
