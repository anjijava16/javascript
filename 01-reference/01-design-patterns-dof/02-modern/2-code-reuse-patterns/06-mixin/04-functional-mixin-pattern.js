// It is the logical next step for Mixin that groups related methods together
// in terms of functional categories. Then use these functional groups and apply
// these to the receiver's prototype.

var Employee = function (name, gender, age) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var Employees = function () { };
Employees.prototype = [];

var sortable = function () {
  this.sortAge = function () {
    this.sort(function (a, b) {
      return a.age - b.age;
    });
  };
  return this;
};

var enumerable = function(){
  this.each = function(callback){
    var len = this.length
    for(var i = 0; i < len; i++){
      callback(this[i]);
    }
  };
  return this;
};

sortable.call(Employees.prototype);
enumerable.call(Employees.prototype);

var employees = new Employees();

employees.push(new Employee("John", "Male", 33));
employees.push(new Employee("Peter", "Male", 45));
employees.push(new Employee("Ann", "Female", 32));
employees.push(new Employee("Tiffany", "Female", 19));

employees.sortAge();
employees.each(function(item){
  console.log(item.name + " " + item.age);
});
