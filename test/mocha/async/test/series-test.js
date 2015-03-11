var assert = require('assert');
var async = require('async');

var customers = [{name: "Tom"}, {name: "Dick"}, {name: "Harry"}];
var orders = [
  {id: 1, customerName: "Tom", detail: "wpf book"},
  {id: 2, customerName: "Tom", detail: "javascript book"},
  {id: 3, customerName: "Dick", detail: "wpf book"},
  {id: 4, customerName: "Dick", detail: "java book"},
];

function getCustomer(cb) {
  setTimeout(function () {
    cb(null, {customerName: "Tom"});
  }, 500);
}

function getOrder(cb) {
  setTimeout(function () {
    cb(null, {orderName: "IPhone"});
  }, 500);
}

describe('series test', function () {
  it('success', function (done) {
    async.series(
      [
        function (callback) {
          getCustomer(function (err, customer) {
            console.log("#customer", customer);
            callback(null, customer);
          })
        },
        function (callback) {
          getOrder(function (err, order) {
            console.log("#order", order);
            callback(null, order);
          })
        },
      ],

      function (err, results) {
        console.log("#results:", results);
        done();
      }
    );
  });
});
