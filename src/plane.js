var Plane = function () {
  this.flying = true;
};

Plane.prototype.land = function(airport){
  airport.land(this);
  this.flying = false;
};

Plane.prototype.takeOff = function(airport){
  airport.takeOff(this);
  this.flying = true;
};
