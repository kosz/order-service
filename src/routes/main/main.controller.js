
angular.module('order-service').controller('main', [
  '$scope',
  'Orders',
  function ($scope,Orders) {
  
    var self = this;

    self.data = Orders.all().sum();

    $scope.$watch('main.data', function (n,v) { 
      console.log('changed data',n,v);
    });

    self.reload = function () {
      self.data = Orders.all().sum();
    };
  
    //self.sum = Orders.all().sum('value');
  
  }]);
