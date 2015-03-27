/*
 Most built-in constructors have instances with so-called internal properties,
 whose names are written in double square brackets, like this: [[PrimitiveValue]].
 Internal properties are managed by the JavaScript engine and usually not directly accessible in JavaScript.
 The normal subclassing technique in JavaScript is to call a superconstructor as a function with the this of the subconstructor:

 */

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

/*
 #Workaround#
 MyArray is a subclass of of Array. It has a getter size that returns the actual elements in an array, ignoring holes.
 The trick used to implement MyArray is that it creates an array instance and copies its methods into it.
 */

// it is a deep copy
function copyOwnPropertiesFrom(target, source){
  Object.getOwnPropertyNames(source)  // Get an array with keys of all own properties of source
    .forEach(function(propKey){   // Iterate over those keys
      var desc = Object.getOwnPropertyDescriptor(source, propKey);  // retrieve a property descriptor
      Object.defineProperty(target, propKey, desc);  // use that property descriptor to create
    });
  return target;
}

function MyArray(/*arguments*/){
  var arr = [];
  // Don't use Array constructor to set up elements (doesn't always work)
  Array.prototype.push.apply(arr, arguments);  // (1)
  copyOwnPropertiesFrom(arr, MyArray.methods);
  return arr;
}

MyArray.methods = {
  get size(){  // getter for property
    var size = 0;
    for(var i = 0; i < this.length; i++){
      if(i in this) size++;
    }
    return size;
  }
};

var a = new MyArray('a', 'b');
a.length = 4;
console.log(a.length);  // 4
console.log(a.size);    // 2

// MyArray creates objects that are not its instances
console.log(a instanceof MyArray);  // false
console.log(a instanceof Array);  // true
