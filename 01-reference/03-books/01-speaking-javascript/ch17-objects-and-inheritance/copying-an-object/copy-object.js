// it is a deep copy
function copyOwnPropertiesFrom(target, source){
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
    console.log(this.name + ", " + this.scores + ", " + this.address.street + ", " + this.address.city + ", " + this.books);
  }
};

var employee = {salary: "$35,000"};
copyOwnPropertiesFrom(employee, person);
employee.say();
