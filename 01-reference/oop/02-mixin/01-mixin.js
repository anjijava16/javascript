// It copies (shallow copy) properties from one or more source objects.
// All properties get 'mixed' together in this new object.

var MYAPP = MYAPP || {};
MYAPP.util = MYAPP.util || {};
MYAPP.model = MYAPP.model || {};

// util
MYAPP.util.mixin = function(sources, destination){
  var len = sources.length;
  for(var i = 0; i < len; i++){
    var source = sources[i];
    for(var s in source){
      if(source.hasOwnProperty(s)){
        destination[s] = source[s];
      }
    }
  }
};

MYAPP.model.Person = function(){
  this.name;
  this.aka;
  this.print = function(){
    console.log('print hello from ' + this.name);
  }
};

MYAPP.model.Employee = function(){
  this.title;
  var person = new MYAPP.model.Person();
  MYAPP.util.mixin([person], this);
};

var employee = new MYAPP.model.Employee();

employee.name = "Tom";
employee.title = "CTO";
console.dir(employee);
/*
 MYAPP.model.Employee
 name: "Tom"
 print: function (){}
 title: "CTO"
 __proto__: MYAPP.model.Employee
 */
employee.print();
