describe('Features Tests', function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
    plane.land(airport);
  });

  describe('User story 1', function (){

    it('a plane will land at an airport', function () {
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe('User story 2', function (){
    it('a plane will take off from an airport', function(){
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });





});
