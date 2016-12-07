var Airport = function () {
  this.planes = [];
};

Airport.prototype.land = function(plane){
  if (weather.isStormy() === true) throw "Cannot land plane: weather is stormy.";
  this.planes.push(plane);

};

Airport.prototype.takeOff = function(plane) {
  for (var i=0 ;i<=this.planes.length; i++) {
    if(this.planes[i] === plane) {
      this.planes.splice(i,1);
    }
  }
};
