describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  describe('#land', function(){
    it('should land a plane', function(){
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });
  });
  describe('#takeOff', function (){
    it('should take off a plane', function (){
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });
});
