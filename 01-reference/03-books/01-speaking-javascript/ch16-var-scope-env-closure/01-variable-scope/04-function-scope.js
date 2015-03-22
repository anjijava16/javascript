/*
 JavaScript’s variables are function-scoped: only functions introduce new scopes; blocks are ignored when it comes to scoping.
 */
function main(){
  {  // block starts
    var foo = 4;
  }  // block ends
  console.log(foo);  // 4
}
main();
