angular.module('order-service')
  .controller('VersionTwoController', [
    '$scope',
    'two.Orders',
    function ($scope,Orders) {

      var self = this;

      self.data = Orders.get();

      self.reload = Orders.get; 

    }]);
