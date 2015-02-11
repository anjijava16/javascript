// It copies properties from one or more source objects.
// All properties get 'mixed' together in this new object.

function mixin(sources, destination){
  var len = sources.length;
  for(var i = 0; i < len; i++){
    var source = sources[i];
    for(var s in source){
      if(source.hasOwnProperty(s)){
        destination[s] = source[s];
      }
    }
  }
}

var Employee = function(name, gender, age){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var employees = [];
employees.push(new Employee("John", "Male", 33));
employees.push(new Employee("Peter", "Male", 45));
employees.push(new Employee("Ann", "Female", 32));
employees.push(new Employee("Tiffany", "Female", 19));

var sortable = {
  sortAge: function(){
    this.sort(function(a, b){
      return a.age - b.age;
    });
  }
};

var enumerable = {
  each: function(callback){
    var len = this.length;
    for(var i = 0; i < len; i++){
      callback(this[i]);
    }
  }
};

mixin([sortable, enumerable], employees);

employees.sortAge();
employees.each(function(item){
 console.log(item.name + " " + item.age);
});
// employees.forEach(function(item){
//   console.log(item.name + " " + item.age);
// });
