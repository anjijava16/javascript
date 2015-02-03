angular.module('httpRequest', []).controller('requestController', ['$http', function($http){
  this.getTest = function getTest() {
    $http.get('http://localhost:3000/contact')
      .success(function(data, status, headers, config){
        console.log(data);
      })
      .error(function(data, status, headers, config){
        console.log(data);
      });
  };
  this.postTest = function postTest() {
    var req = {
      method: 'POST',
      url: 'http://localhost:3000/signup',
      headers: {
      },
      data: {
        "email" : "tom@gmail.com",
        "name" : "Tom"
      }
    };
    $http(req)
      .success(function(data, status, headers, config){
        console.log(data);
      })
      .error(function(data, status, headers, config){
        console.log(data);
      })
  }
}]);
