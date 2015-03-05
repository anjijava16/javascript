var assert = require('assert');
var async = require('async');

describe('unit', function() {
  describe('inner-1', function () {
    before(function () {
      console.log('before is called');
    });
    after(function () {
      console.log('after is called');
    });
    beforeEach(function () {
      console.log('  beforeEach is called');
    });
    afterEach(function () {
      console.log('  afterEach is called');
    });
    it('unit: should do an asynchronous test', function (done) {
      setTimeout(function () {
        assert.ok(true);
        done();
      }, 15);
    });
    it('unit: async wait for last array item finish', function (done) {
      var items = [1, 2];
      var len = items.length;
      var index = 0;
      setTimeout(function () {
        assert.ok(true);
        items.forEach(function () {
            setTimeout(function () {
              console.log('in-inside index=' + index);
              assert.ok(false);
              if(len-1 === index)done();
              index++;
            }, 15)
          }
        );
      }, 15);
    });
    it('unit: wait for async callbacks with args to complete', function (done) {
      var calls = [];

      ['aaa','bbb','ccc'].forEach(function(item){
        calls.push(function(callback) {
          setTimeout(function(){
            console.log(item);
            callback(null, 'tom');
          }, 500);
        })
      });
      async.parallel(calls, function(err, result) {
        /* this code will run after all calls finished the job or
         when any of the calls passes an error */
        if (err)
          return console.log(err);
        console.log(result);
        done();
      });
    });
    it('unit: wait for async callbacks to complete', function (done) {
      var calls = [];

      ['aaa','bbb','ccc'].forEach(function(item){
        calls.push(function(callback) {
          setTimeout(function(){
            console.log(item);
            callback();
          }, 500);
        })
      });
      async.parallel(calls, function() {
        /* this code will run after all calls finished the job or
         when any of the calls passes an error */
        done();
      });
    });
  });
  describe('inner-2', function () {
    it('unit: should do a synchronous test', function () {
      assert.ok(true);
    });
  });
});
