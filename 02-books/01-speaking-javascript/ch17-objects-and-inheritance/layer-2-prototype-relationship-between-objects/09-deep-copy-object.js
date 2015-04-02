'use strict';
// it is a deep copy
function copyOwnPropertiesFrom(target, source){
  // Object.getOwnPropertyNames(obj) returns the keys of all own properties of obj.
  Object.getOwnPropertyNames(source)  // Get an array with keys of all own properties of source
    .forEach(function(propKey){   // Iterate over those keys
      var desc = Object.getOwnPropertyDescriptor(source, propKey);  // retrieve a property descriptor
      Object.defineProperty(target, propKey, desc);  // use that property descriptor to create
    });
  return target;
}

function copyObject(orig){
  // 1. copy has same prototype as orig
  var copy = Object.create(Object.getPrototypeOf(orig));

  // 2. copy has all of orig's properties
  copyOwnPropertiesFrom(copy, orig);

  return copy;
}

var person = {
  name: "Karen",
  scores: [212, 310, 89],
  address: {
    street: "1 Main St",
    city: "Baltimore"
  },
  books: [              // Problem: array of objects does not work
    {name: "wpf"},
    {name: "javascript"}
  ],
  say: function(){
    var msg = 'name: ' + this.name;
    msg += '\nscores: ' + this.scores;
    msg += '\naddress.streee: ' + this.address.street;
    msg += '\naddress.city: ' + this.address.city;
    msg += '\nbooks: ' + this.books;
    msg += '\nsalary: ' + this.salary;
    console.log(msg);
  }
};

var employee = {salary: "$35,000"};
copyOwnPropertiesFrom(employee, person);
employee.say();
/*
 name: Karen
 scores: 212,310,89
 address.streee: 1 Main St
 address.city: Baltimore
 books: [object Object],[object Object]
 salary: $35,000
 */
