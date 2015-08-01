var assert = require('assert');

var myDataDriven = function (data, fn) {
  console.log('#myDataDriven');
  console.log(this === global);
  var mochaIt = it;
  var mochaBefore = before;
  data.forEach(function (testData) {
    console.log('#forEach');
    console.log(this === global);
    try {
      it = function (title, func) {
        console.log('#it');
        console.log(this === global);
        for (var key in testData) {
          title = title.replace('{' + key + '}', testData[key]);
        }
        if (func !== undefined) {
          var testFn = func.length < 2 ?
            function () {
              console.log('#invoke func');
              console.log(this);
              func.call(this, testData);
            } :
            function (done) {
              func.call(this, testData, done);
            }
        }
        mochaIt(title, testFn);
      };
      before = function (f) {
        var testFn = f.length < 2 ?
          function () {
            f.call(this, testData);
          } :
          function (done) {
            f.call(this, testData, done);
          };
        mochaBefore(testFn);
      };
      fn();
    } finally {
      it = mochaIt;
      before = mochaBefore;
    }
  })
};

//console.log(myDataDriven);

describe('forEach-vs-module-test', function () {
  var testData = [{name: 'Tom'}, {name: 'Ken'}];
  describe('*data-driven', function () {
    console.log('#my data-driven');
    var describeThis = this;
    //console.log(describeThis);

    myDataDriven(testData,
      function () {
        console.log('#func');
        console.log(this === global);
        it('{name}', function (ctx) {
          console.log(ctx.name);
        });
      });
  });
  describe('*good - my data driven', function(){
    testData.forEach(function(data){
      it(data.name, function(){
        console.log(data.name);
      })
    })
  });
});
