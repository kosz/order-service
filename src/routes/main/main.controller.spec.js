describe('Controller: main', function() {
  var $controller, controller, $rootScope;

  beforeEach(module('order-service'));
  beforeEach(inject(function (_$controller_,_$rootScope_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;


    controller = $controller('main', {
      '$scope': $rootScope.$new()
    });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  });

});
