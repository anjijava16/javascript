//We can also change argument values and they will still be maintained by the closure.
function Person(name){
  return{
    setName: function(n) {name = n;},
    getName: function() {return name; },
    say: function() {console.log(name);}
  };
}

var person = new Person('Superman');
person.say();
console.log(person.getName());

person.setName('King Kong');
person.say();
