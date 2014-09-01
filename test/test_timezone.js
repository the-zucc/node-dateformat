var dateFormat = require('./../lib/dateformat'),
    assert = require('assert');

// From https://github.com/felixge/node-dateformat/issues/22
var fixtures = [{
  input: '1994-03-08',
  expected: '1994-03-08',
}, {
  input: '1994-03-11',
  expected: '1994-03-11',
}, {
  input: '1994-03-8',
  expected: '1994-03-08',
}];

fixtures.forEach(function(fixture) {
  var actual = dateFormat(fixture.input, 'yyyy-mm-dd');
  console.log(actual);
  assert.strictEqual(actual, fixture.expected);
});
