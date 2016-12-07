describe('Plane', function(){
  var plane;
  beforeEach(function(){
    // plane = new Plane();
    airport = jasmine.createSpyObj('airport',['land']);
  });

  it('should land the plane', function(){
    plane = new Plane();
    plane.land(airport);
    expect(this.isFlying).toBeFalsy();
    // expect(airport.land).toHaveBeenCalledWith(plane);
  });
});
