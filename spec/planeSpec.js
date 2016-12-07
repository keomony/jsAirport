describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['land']);
  });
  describe('#land', function () {

    beforeEach(function() {
      plane.land(airport);
    });

    it('should not be flying', function () {
      expect(flying).toBeFalsy();
    });

    it('should land the plane', function(){
      expect(airport.land).toHaveBeenCalledWith(plane);
    });

  });
});
