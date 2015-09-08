var numbers = ['1','2','3','4','5','6','7','8'];
var invalidItems = ['3','6'];

var original = numbers;
numbers = numbers.filter(function(el){
    console.log(el);
    return invalidItems.indexOf(el) === -1;
    //return !invalidItems.contains(el);
});

console.log(invalidItems.indexOf('3') > -1);
console.log(invalidItems.indexOf('1'));

console.log(original);
console.log(numbers);
