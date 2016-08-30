function SuperClass(radius, height) {
  this.radius = radius;
  this.height = height;
}

SuperClass.prototype.getVolume = function() {
  return radius * radius * Math.PI * height / 3;
};

function SubClass(radius, height) {
  SuperClass.apply(this, [radius, height]);
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getVolume = function() {
  var result = SuperClass.prototype.getVolume.apply(this, [this.radius, this.height]);
  return result;
};

var object = new SubClass(10, 50);

console.log(object.getVolume());
