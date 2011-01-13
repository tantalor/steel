# steel

**steel** is a small Javascript library that adds a [QUnit](http://docs.jquery.com/Qunit)-like testing interface for various JavaScript runtimes.

## Motivation

JavaScript is primarily a browser-based scripting language, but is commonly used for server-side applications. Your app might even run the exact same JavaScript code on the server and client. Wouldn't it be nice if you could easily run the exacty same unit tests in your server runtime as your traditional QUnit browser tests?

## Supported JavaScript Runtimes

 * [Narwhal](http://narwhaljs.org/)
 * [Node](http://nodejs.org/)
 * [JavaScriptCore](http://webkit.org/projects/javascript/)
 * [RingoJS](http://ringojs.org/)

## Demo

You can run all tests.

    $ node demo/all.js
    + Running
      + Running test test addition
      + Running test test multiplication
    Passes: 2, Fails: 0, Errors: 0
    + Running
      + Running test test concatenation
      + Running test test substring
    Passes: 2, Fails: 0, Errors: 0

Or just one test.

    $ node demo/math.js 
    + Running
      + Running test test addition
      + Running test test multiplication
    Passes: 2, Fails: 0, Errors: 0

Narwhal has a special syntax for running a single test.

    $ narwhal -m test demo/math.js 
    + Running /Users/john/Sites/steel/demo/math.js
      + Running test addition
      + Running test multiplication
    Passes: 2, Fails: 0, Errors: 0
