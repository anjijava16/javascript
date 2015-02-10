var customersJson = require('./customers.json');

var usernames = Object.keys(customersJson.customers);
console.log(usernames);

// convert string to json object for each item in array
console.log(usernames.map(function(item){
  return {"username": item}
}));
