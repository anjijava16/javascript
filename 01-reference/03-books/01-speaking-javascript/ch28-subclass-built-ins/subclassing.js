function Super(x, y){
  this.x = x;  // (1)
  this.y = y;  // (1)
}

function Sub(x, y, z){
  // Add superproperties to subinstance
  Super.call(this, x, y);  // (2)
  // Add subproperty
  this.z = z;
}
