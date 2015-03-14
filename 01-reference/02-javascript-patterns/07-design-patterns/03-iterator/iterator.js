// Providing easy access to element of data structure
// Calling next() in sequence must return the next consecutive element, where it's up to you to decide
// what "next" means in your particular data structure.

var agg = (function(){
  var index = 0;
  var data = [1, 2, 3, 4, 5];
  var len = data.length;
  return {
    next: function(){
      var element;
      if(!this.hasNext()){
        return null;
      }
      element = data[index];
      index += 2;
      return element;
    },
    hasNext: function(){
      return index < len;
    }
  }
})();

var element;
while(agg.hasNext()){
  console.log(agg.next());
}
/*
 1
 3
 5
 */
