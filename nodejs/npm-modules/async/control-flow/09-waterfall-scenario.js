var async = require('async');

var customers = [{name: "Tom"}, {name: "Dick"}, {name: "Harry"}];
var orders = [
  {id: 1, customerName: "Tom", detail: "wpf book"},
  {id: 2, customerName: "Tom", detail: "javascript book"},
  {id: 3, customerName: "Dick", detail: "wpf book"},
  {id: 4, customerName: "Dick", detail: "java book"},
];

function getCustomer(query, cb) {
  setTimeout(function () {
    var result = customers.filter(function (item) {
      return item.name === query;
    })
    cb(null, result[0]);
  }, 500);
}

function getCustomerOrders(query, cb) {
  setTimeout(function () {
    var result = orders.filter(function (item) {
      return item.customerName === query;
    });
    cb(null, result);
  }, 500);
}

// workflow: getCustomer, then getCustomerOrder
async.waterfall(
  [
    function (callback) {
      getCustomer("Tom", function (err, customer) {
        console.log(customer);
        callback(null, customer);
      })
    },
    function (customer, callback) {
      getCustomerOrders(customer.name, function (err, orders) {
        console.log(orders);
        callback(null, orders);
      })
    }
  ],

  function (err, results) {
    console.log("results:", results);
  }
);

console.log('#done');

// WITHOUT async - callback inside callback
//getCustomer("Tom", function(err, customer){
//  console.log(customer);
//  getCustomerOrders(customer.name, function(err, orders){
//    console.log(orders);
//  })
//});
