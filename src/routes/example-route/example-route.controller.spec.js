describe('Controller: example-route', function() {
  var controller, $rootScope;
    

  beforeEach(module('order-service')); 
    beforeEach(inject(function (_$controller_,_$rootScope_) { 
    
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        

    controller = $controller('example-route', { 
      });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  }); 

});
