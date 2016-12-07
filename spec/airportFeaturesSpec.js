describe('Features Tests', function () {
  var airport;
  var plane;
  var weather;

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

  describe('User story 2', function (){
    var weather;
    beforeEach(function() {
      // weather = jasmine.createSpyObject('weather',['isStormy']);
      weather = {
        isStormy:  function() {
          return true;
        }
      };
      spyOn(weather, 'isStormy');
    });
    it('prevents plane from taking off when wheather is stormy', function(){
      weather.isStormy;
      expect(airport.land(plane)).toThrowError("Cannot land plane: weather is stormy.");
    });
  });
});
