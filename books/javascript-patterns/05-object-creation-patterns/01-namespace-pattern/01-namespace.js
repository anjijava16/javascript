// BEFORE: 5 globals
// Warning: antipattern

// constructors
function Parent(){}
function Child(){}

var some_var = 1;

// some objects
var module1 = {};
module1.data = {a: 1, b: 2};
var module2 = {};

// AFTER: 1 global

// global object
var MYAPP = {};

// constructors
MYAPP.Parent = function(){};
MYAPP.Child = function(){};

// a variable
MYAPP.some_var = 1;

// an object container
MYAPP.modules = {};

// nested objects
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};
