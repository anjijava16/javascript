/*
 Even though Error and subclasses don’t have instances with internal properties, you still can’t subclass them easily,
 because the standard pattern for subclassing won’t work.
 The problem is that Error always produces a new instance, even if called as a function (1); that is,
 it ignores the parameter this handed to it via call().
 */

function Super(x, y){
  this.x = x;
  this.y = y;
}

function Sub(x, y, z){
  // Add superproperties to subinstance
  Super.call(this, x, y);
  // Add subproperty
  this.z = z;
}

var e = {};
console.log(Object.getOwnPropertyNames(Error.call(e)));  // new instance
console.log(Object.getOwnPropertyNames(e));  // unchanged

/*
 #Workaround#
 Inside the subconstructor, create a new superinstance and copy its own properties to the subinstance.
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

function MyError(){
  // use Error as a function
  var superInstance = Error.apply(this, arguments);
  copyOwnPropertiesFrom(this, superInstance);
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try{
  throw new MyError('Something happened');
}
catch(e){
  console.log('Properties: ' + Object.getOwnPropertyNames(e));
}

console.log(new MyError() instanceof Error);  // true
console.log(new MyError() instanceof MyError);  // true
