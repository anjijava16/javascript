var assert = require('assert');

describe('wpf', function () {
  // @ = test category
  describe('button', function () {
    it('test-1 @button @smoke', function () {
      var re = /@\w+/g;
      var matches = this.test.fullTitle().match(re);
      console.log(matches);
      this.test.title = this.test.title.replace(re, '');

      console.log(this.test.fullTitle());
      console.log(this.test.title);

      assert.ok(true);
    });
    it('test-2 @button @p1', function () {
      assert.ok(true);
    });
  });
  describe('textbox', function () {
    it('test-1 @textbox @smoke', function () {
      assert.ok(true);
    });
  });
  describe('calendar', function () {
    it('test-1 @calendar @p1', function () {
      assert.ok(true);
    });
  });
  describe('other', function () {
    it('test-1', function () {
      assert.ok(true);
    });
  });
});
