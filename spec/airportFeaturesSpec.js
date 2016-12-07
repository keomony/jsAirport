describe('Features Tests', function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
    weather = {
      isStormy: function () {
      }
    }

  });

  describe('User story 1', function (){

    it('a plane will land at an airport', function () {
      plane.land(airport);
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe('User story 2', function (){
    it('a plane will take off from an airport', function(){
      plane.land(airport);
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });

    it('prevents plane from taking off when wheather is stormy', function(){
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function () {
        airport.land(plane);}).toThrow("Cannot land plane: weather is stormy.");
      });
    });
  });
