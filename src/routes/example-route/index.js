angular.module('order-service').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/example-route', {
    templateUrl: 'routes/example-route/example-route.html',
    controller: 'example-route',
    controllerAs: 'vm'
  });

}]);
