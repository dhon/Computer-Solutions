var app = angular.module("computer",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    })
    .when('/services', {
      templateUrl: 'services.html',
      controller: 'ServicesCtrl'
    })
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  console.log('MainCtrl works!');
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])
.controller('AboutCtrl', ['$scope', function($scope){
  console.log('AboutCtrl works!');
}])
.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
  console.log('ContactCtrl works!');
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}])
.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
  console.log('ServicesCtrl works!');
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}]);