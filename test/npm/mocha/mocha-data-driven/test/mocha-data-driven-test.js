var assert = require('assert');
var data_driven = require('data-driven');

describe('#Array', function () {
  describe('#indexOf()', function () {
    data_driven([{value: 0}, {value: 5}, {value: -2}], function () {
      it('should return -1 when the value is not present when searching for {value}', function (ctx) {
        assert.equal(-1, [1, 2, 3].indexOf(ctx.value));
      });
    });
  });
  describe('verify multiple', function () {
    data_driven(
      [
        {input: 1, expected: 1},
        {input: 2, expected: 4},
        {input: 3, expected: 9}
      ],
      function () {
        it('should return {expected} when multiple for {input}', function (ctx) {
          var input = ctx.input;
          var expected = ctx.expected;
          var result = input * input;
          assert.equal(result, expected, 'input: ' + input + ' not equal expected: ' + expected);
        });
      });
  });
});
