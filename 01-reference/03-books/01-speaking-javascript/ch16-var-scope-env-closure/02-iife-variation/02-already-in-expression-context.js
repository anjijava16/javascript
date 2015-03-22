/*
 Note that enforcing the expression context for an IIFE is not necessary, if you are already in the expression context.
 Then you need no parentheses or prefix operators.
 */
var File = function(){
  var UNTITLED = 'Untitled';
  function File(name){
    this.name = name || UNTITLED;
    console.log(this.name);
  }
  return File;
}();
File('JavaScript');
