/**
 * @ngdoc service
 * @name order-service.service:orders
 *
 * @description
 * Factory orders
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */
angular.module('order-service').factory('Orders', [
  '$http',
  '$rootScope',
  function ($http,$rootScope) {

    function all () {
      var obj = {
        $data: {}
      };

      obj.sum = function () {
        $rootScope.$watch( function () { return obj.$collection; }, function (n) {
          if (!n) { return; }
          var r = 0;
          for ( var i = 0; i < n.length; i+=1 ) {
            r += n[i].value;
          }
          obj.$result = r;
        });
        return obj;
      };

      var urls = [ 'orders.json', 'orders2.json' ];

      $http.get(urls[getRandomInt(0,1)])
        .success(function(data) {
          obj.$collection = data;
        })
        .error(function(data) {
          throw new Error('Server error occured ' + data);
        });

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

      return obj;

    }

    return {
      all: all
    };

  }]);
