describe('Features Tests', function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
  });

  describe('User story 1', function (){

    it('a plane will land at an airport', function () {
      plane.land(airport);
      expect(airport.planes.length).toEqual(1);
    });
    it('prevents plane from landing off when wheather is stormy', function(){
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(function () {
        airport.land(plane);}).toThrow("Cannot land plane: weather is stormy.");
      });
  });

  describe('User story 2', function (){
    it('a plane will take off from an airport', function(){
      plane.land(airport);
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });

    it('a plane will not take off when it is stormy', function(){
      plane.land(airport);
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(function(){
      airport.takeOff(plane);}).toThrow("Cannot take off the plane: weather is stormy.");
    });
  });

  // describe('User story 3',function(){
  //   it('a plane will not land if the airport is full',function(){
  //     plane.land(airport);
  //   });
  // });

  });
