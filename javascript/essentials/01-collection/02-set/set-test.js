var numbers = [1,2,3,4,3];
console.log(numbers);

var mySet = new Set(numbers);
mySet.forEach(function(value){
    console.log(value);
});
