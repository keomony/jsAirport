describe('Features Tests', function () {
  var airport = new Airport();
  var plane = new Plane();

  it('a plane will land at an airport', function () {
    airport.land(plane);
    expect(airport.planes).toEqual(1);
  });
});
