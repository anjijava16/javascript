/*
 #Solution#
 Delegation is a very clean alternative to subclassing.
 For example, to create your own array constructor, you keep an array in a property:
 */
function MyArray(/*arguments*/){
  this.array = [];
  Array.prototype.push.apply(this.array, arguments);
}
Object.defineProperties(MyArray.prototype, {
  size: {
    get: function(){
      var size = 0;
      for(var i = 0; i < this.array.length; i++){
        if(i in this.array) size++;
      }
      return size;
    }
  },
  length: {
    get: function(){
      return this.array.length;
    },
    set: function(value){
      return this.array.length = value;
    }
  }
});
// The limitation is that you can’t access elements of MyArray via square brackets; you must use methods to do so.
MyArray.prototype.get = function(index){
  return this.array[index];
};
MyArray.prototype.set = function(index, value){
  return this.array[index] = value;
};
// Normal methods of Array.prototype can be transferred via the following bit of metaprogramming.
['toString', 'push', 'pop'].forEach(function(key){
  MyArray.prototype[key] = function(){
    // We derive MyArray methods from Array methods by invoking them on the array this.array that is stored in instances of MyArray.
    return Array.prototype[key].apply(this.array, arguments);
  }
});
// Usage
var a = new MyArray('a', 'b');
console.log(a.length);  // 2
a.length = 4;
console.log(a.length);  // 4
a.push('c');
console.log(a.length);  // 5
console.log(a.size);  // 3
a.set(0, 'x');
console.log(a.toString());  // x,b,,,c
console.log(a instanceof MyArray);  // true
console.log(a instanceof Array);  // false
