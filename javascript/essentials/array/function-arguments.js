function sandbox(){
  var args = Array.prototype.slice.call(arguments);

  console.log(args[0]);
  console.log(typeof args[0]);
  console.log(typeof args[0] === "string");

  var modules = (args[0] && typeof args[0] === "string") ? args : args[0];
  console.log(modules);
}

sandbox(['aa', 'bb', 'cc']);
sandbox('aa', 'bb', 'cc');
