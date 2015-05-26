var assert = require('assert');

function removeTaggingFromTitle(test){
  var re = /@\w+/g;
  var matches = test.fullTitle().match(re);
  console.log(matches);
  test.title = test.title.replace(re, '');
}

describe('wpf', function () {
  // @ = test category
  describe('button', function () {
    it('test-1 @button @smoke', function () {
      //var test = this.test;
      removeTaggingFromTitle(this.test);

      console.log(this.test.fullTitle());
      console.log(this.test.title);

      assert.ok(true);
    });
    it('test-2 @button @p1', function () {
      removeTaggingFromTitle(this.test);
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
