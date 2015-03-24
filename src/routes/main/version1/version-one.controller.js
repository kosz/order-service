angular.module('order-service')
  .controller('VersionOneController', [
    '$scope',
    'one.Orders',
    function ($scope,Orders) {

      var self = this;

      self.reload = function () {
        Orders.getSum().then(function(sum) {
          self.sum = sum;
        });
      };
      self.reload();

    }]);
