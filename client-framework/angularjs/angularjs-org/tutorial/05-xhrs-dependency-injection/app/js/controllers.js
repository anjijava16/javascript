var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      // limit phones to 5
      //$scope.phones = data.splice(0, 5);
      $scope.phones = data.splice(0);
    });

    $scope.orderProp = 'age';
  }]);
