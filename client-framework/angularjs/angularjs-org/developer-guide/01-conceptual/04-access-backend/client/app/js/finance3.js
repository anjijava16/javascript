angular.module('finance3', [])
  .factory('currencyConverter', ['$http', function($http) {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};
    var convert = function (amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };
    var refresh = function() {
      return $http.get('http://localhost:3000/foreignrates').success(function(data) {
        usdToForeignRates = data;
        console.log(data);
      });
    };
    refresh();
    return {
      currencies: currencies,
      convert: convert,
      refresh: refresh
    };
  }]);
