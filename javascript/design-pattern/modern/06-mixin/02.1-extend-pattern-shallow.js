function extend(source, destination){
  for(var s in source){
    if(source.hasOwnProperty(s)){
      destination[s] = source[s];
    }
  }
}

var person = {
  color: "blue",
  say: function(){
    console.log("Hi, I have " + this.color + " eyes");
  }
};

var employee = {salary: "$35,000"};
extend(person, employee);   // the extend pattern
employee.say();
