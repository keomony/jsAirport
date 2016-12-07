describe('Airport', function() {
  var luton

  beforeEach(function () {
    luton = new airport();
  });

  it("should create an airport", function () {
    expect(luton).toEqual(jasmine.any(airport));
  });



});
