/**
 * @ngdoc service
 * @name order-service.service:two.Orders
 *
 * @description
 * Factory orders
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */
angular.module('order-service').factory('two.Orders', [
  '$http',
  function ($http) {

    var obj = {};

    function sum (data) {
      obj.$sum = 0;
      for ( var i = 0; i < data.length; i+=1 ) {
        obj.$sum += data[i].value;
      }
    }

    function error (data) {
      throw new Error('Server error occured ' + data);
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function get () {
      var urls = [ 'orders.json', 'orders2.json' ];

      $http.get(urls[getRandomInt(0,1)])
        .success(function(data){
          sum(data);
        })
        .error(error);

      return obj;

    }

    return {
      get: get
    };

  }]);
