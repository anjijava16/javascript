var users = ['tom', 'dick', 'harry'];
var types = ['gold', 'vip'];

var results = [];
for(var i in types){
  for(var j in users){
    results.push({user: users[j], type: types[i]});
  }
}

console.log(results);
/*
 [ { user: 'tom', type: 'gold' },
 { user: 'dick', type: 'gold' },
 { user: 'harry', type: 'gold' },
 { user: 'tom', type: 'vip' },
 { user: 'dick', type: 'vip' },
 { user: 'harry', type: 'vip' } ]
 */
