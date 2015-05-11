var assert = require('assert');

describe('smoke', function () {
  it('test-1 ', function () {
    console.log(this.test.title);
    console.log(this.test.fullTitle());
    this.test.title += ' $added title$';
    assert.ok(true);
  });
});
