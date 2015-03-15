/*
 you get a warning in strict mode (this === undefined):
 */
'use strict';
function Point(x, y){
  this.x = x;
  this.y = y;
}
var p = Point(7, 5);
// TypeError: Cannot set property 'x' of undefined
