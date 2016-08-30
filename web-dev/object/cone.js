function Cone() {
  var radius;
  var _height;

  this.setBase = function(base) {
    this.radius = base;
  };

  this.setHeight = function(height) {
    this._height = height;
  };

  this.getBase = function() {
    return this.radius;
  };

  this.getHeight = function() {
    return this._height;
  };

  this.getVolume = function() {
    return this.radius * this.radius * Math.PI * this._height / 3;
  };

}
