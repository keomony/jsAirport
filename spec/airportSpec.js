describe('Airport', function(){
  var airport;
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

});
