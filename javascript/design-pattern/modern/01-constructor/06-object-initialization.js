// Object initialization is a way to complete an object's initialization.
// The init method may accept options that configure the object
// or it is a place where relationships are established with other objects in the app.
function Person(){
  this.name = '';
  this.say = function(){
    console.log(this.name);
  };
  this.age = 0;
  this.profession = 'None';

  this.init = function(options){      // initializer
    this.name = options.name;
    this.age = options.age;
    this.profession = options.profession;
    this.showAge = function(){
      console.log(this.age);
    };
  };
}

var person = new Person();
person.init({name: 'Tom', age: 28, profession: 'teacher'});

person.say();
person.showAge();
