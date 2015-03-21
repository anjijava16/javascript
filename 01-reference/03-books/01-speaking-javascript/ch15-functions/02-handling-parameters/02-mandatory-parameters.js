function foo(mandatory, optional){
  if(mandatory === undefined){
    throw new Error('Missing parameter: mandatory');
  }
  //if (!mandatory) {
  //  throw new Error('Missing parameter: mandatory');
  //}
  //if (arguments.length < 1) {
  //  throw new Error('You need to provide at least 1 argument');
  //}
}

try{
  foo();
}
catch(e){
  console.log(e);  // [Error: Missing parameter: mandatory]
}
