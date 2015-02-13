// Note: there many bugs in the following code
function deepExtend(source, destination){
  for(var s in source){
    if(source.hasOwnProperty(s)){
      if(typeof source[s] === "object"){
        console.log(isArray);
        destination[s] = isArray ? [] : {};   // Problem: isArray is always true because it is function
        console.log(destination[s]);
        deepExtend(source[s], destination[s]);
      }
      else{
        destination[s] = source[s];
      }
    }
  }
  function isArray(o){     // Problem: it is never called
    console.log('#', typeof o);
    return (typeof o === "[object Array]");
  }
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

var employee = {salary: "$45,000"};
deepExtend(person, employee);

employee.say();
person.say();
