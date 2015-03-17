/*
 make a function call via call() or apply() and specify the value of this explicitly
 */
function func(arg1, arg2){
  console.log(this);  // { name: 'obj' }
  console.log(arg1);  // a
  console.log(arg2);  // b
}
func.call({name: 'obj'}, 'a', 'b');     // (this, arg1, arg2)
func.apply({name: 'obj'}, ['a', 'b']);  // (this, arrayWithArgs)
