describe('Features Tests', function () {
  var airport = new Airport();
  var plane = new Plane();

  it('a plane will land at an airport', function () {
    plane.land(airport);
    expect(airport.planes.length).toEqual(1);
  });


});
