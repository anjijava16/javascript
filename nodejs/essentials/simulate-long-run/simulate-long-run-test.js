console.log('#begin');
function find(name, cb){
  if(name === 'Tom'){
    // simulate long run
    setTimeout(function(){
      console.log('before invoke callback');
      cb(null, {name: 'Tom'});
    }, 500);
  }
}
find('Tom', function(err, person){
  console.log('callback is invoked');
  console.log(person.name);
});
console.log('#end');
