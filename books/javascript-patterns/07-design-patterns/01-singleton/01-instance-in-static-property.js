// You can cache in a static property of the constructor. Functions in JavaScript are objects, so they can have properties.
// You can have something like Universe.instance and cache the object there.
// The drawback is that the instance property is publicly accessible, and code outside can change it, so you lose the instance.

function Universe(){
  // do we have an existing instance?
  if(typeof Universe.instance === "object"){
    return Universe.instance;
  }
  // proceed as normal
  this.start_time = 0;
  this.bang = "Big";

  // cache
  Universe.instance = this;

  // implicit return:
  // return this;
}

// testing
var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2);  // true
