function Sandbox(){}
Sandbox.modules = {};
Sandbox.modules.dom = function(){
  console.log('dom module');
}
Sandbox.modules.event = function(){
  console.log('event module');
}
Sandbox.modules.ajax = function(){
  console.log('ajax module');
}

var modules = [];
for(var m in Sandbox.modules){
  if(Sandbox.modules.hasOwnProperty(m)){
    modules.push(m);
  }
}
console.log(modules);   // [ 'dom', 'event', 'ajax' ]

modules.forEach(function(m){
  Sandbox.modules[m]();
});

/* output
 dom module
 event module
 ajax module
 */
