var Plane = function () {};

var flying = true

Plane.prototype.land = function(airport){
  flying = false;
  airport.land(this);
};
