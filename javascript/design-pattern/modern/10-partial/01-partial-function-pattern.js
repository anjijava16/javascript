function concat(first, last){
  if(typeof last === "undefined"){
    return function(last){      // partial function
      return first + " " + last;
    };
  }
  return first + " " + last;
}

var mary = concat("Mary", "Milliken");   // full application
console.log(mary);

var john = concat('John');       // partial application
var jones = john("Jones");
var sellers = john("Watson");

console.log(jones);
console.log(sellers);
