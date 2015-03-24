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
angular.module('order-service').factory('one.Orders', [
  '$http',
  '$q',
  function ($http,$q) {

    var promise;
    var urls = [ 'orders.json', 'orders2.json' ];

    function sum (data) {
      var sum = 0;
      for ( var i = 0; i < data.length; i+=1 ) {
        sum += data[i].value;
      }
      return sum;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getSum () {

      promise = $q(function (resolve, reject) {
        $http.get(urls[getRandomInt(0,1)])
          .success(function (data) {
            resolve(sum(data));
          })
          .error(function(data) {
            reject(data);
          });
      });

      return promise;

    }

    return {
      getSum: getSum
    };

  }]);
