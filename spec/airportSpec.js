describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = {
      isStormy: function () {
      }
    }
  });
  describe('#land', function(){
    it('should land a plane', function(){
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });
    it('should not land a plane when the weather is stormy',function () {
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(function () {
        airport.land(plane);}).toThrow("Cannot land plane: weather is stormy.");
      });
    });
    describe('#takeOff', function (){
      it('should take off a plane', function (){
        airport.takeOff(plane);
        expect(airport.planes.length).toEqual(0);
      });
      it('should not take off the plane when it is stormy.', function(){
        spyOn(weather, "isStormy").and.returnValue(true);
        expect(function(){
          airport.takeOff(plane);}).toThrow("Cannot take off the plane: weather is stormy.");
      });
    });
  });
