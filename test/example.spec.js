// first test to see if mocha works and learn how to write tests properly
// https://www.sitepoint.com/unit-test-javascript-mocha-chai/

'use strict';
var chai = require('chai');
var assert = chai.assert;

// describe is used for grouping of a block
describe('Sample tests:', function() {
  // more unit tests here
  it('failing test sample: 1 is equal to 2', function(){
    // single test implementation here
    assert.equal(1,2);


  });

  it('Successful test sample: empty array is empty', function(){
    // single test implementation here
    // create empty array, assure its empty:

    var arr =[];
    assert.equal(arr.length, 0);
  });

});