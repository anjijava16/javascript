// add modules properties and methods to "this" that is also "box" (a Sandbox instance)
// it provides an environment for the modules to work without affecting other modules and their personal sandboxes
function Sandbox() {
  var args = Array.prototype.slice.call(arguments);  // turning arguments into an array
  var callback = args.pop();  // the last argument is the callback
  var modules = (args[0] && typeof args[0] === "string") ? args : args[0];  // modules can passed as an array or as individual parameters
  // make sure the function is called as a constructor
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }
  // add properties to 'this' as needed
  this.a = 1;
  this.b = 2;
  // now add modules to the core 'this' object; no modules or "*" both mean "use all modules"
  if (!modules || modules == '*') {
    modules = [];
    for (var m in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(m)) {
        modules.push(m);
      }
    }
  }
  // initialize the required modules - add modules' properties and methods to "this"
  for (var i = 0; i < modules.length; i++) {
    Sandbox.modules[modules[i]](this);
  }
  // call the callback
  callback(this);
}
// any prototype properties as needed
Sandbox.prototype = {
  name: "My App",
  version: "1.0",
  getName: function () {
    return this.name;
  }
};
Sandbox.modules = {};
Sandbox.modules.dom = function(box){
  box.getElement = function(){
    console.log("Sandbox.modules.dom.getElement()");
  };
  box.getStyle = function(){
    console.log("Sandbox.modules.dom.getStyle()");
  };
  box.foo = "bar";
};
Sandbox.modules.event = function(box){
  box.attachEvent = function(){
    console.log("Sandbox.modules.event.attachEvent()");
  };
  box.detachEvent = function(){
    console.log("Sandbox.modules.event.detachEvent()");
  };
};
Sandbox.modules.ajax = function(box){
  box.makeRequest = function(){
    console.log("Sandbox.modules.ajax.makeRequest()");
  };
  box.getResponse = function(){
    console.log("Sandbox.modules.ajax.getResponse()");
  };
};
// Usage
Sandbox(['ajax', 'event'], function(box){  // box = MYAPP
  // your code here...
  console.log(box.a);          // Sandbox instance property
  console.log(box.getName());  // Sandbox instance __proto__ method()
  box.makeRequest();           // Sandbox.modules.ajax.makeRequest()
  box.attachEvent();           // Sandbox.modules.event.attachEvent()
});
Sandbox('ajax', 'dom', function(box){
  // your code here...
  box.getResponse();           // Sandbox.modules.ajax.getResponse()
  box.getStyle();              // Sandbox.modules.dom.getStyle()
});
Sandbox('*', function(box){
  // your code here...
  box.getElement();            // Sandbox.modules.dom.getStyle()
  box.makeRequest();           // Sandbox.modules.ajax.makeRequest()
  box.attachEvent();           // Sandbox.modules.event.attachEvent()
});
