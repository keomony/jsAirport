describe('Airport feature test', function() {
  var plane;
  var airport;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
  });

  // it("should create an airport", function () {
  //   expect(airport).toEqual(jasmine.any(airport));
  // });

  it('planes can be instructed to land at airport', function () {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
