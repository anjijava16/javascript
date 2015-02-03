var fs = require('fs');
var promise = require('promise');
var readFile = promise.denodeify(fs.readFile);
var writeFile = promise.denodeify(fs.writeFile);

console.log('#begin');

readFile('customers.json', 'utf8')
  .then(function (data) {
    console.log('read done: ', data);
    return writeFile('temp.json', data);
  })
  .then(function () {
    console.log('write done');
    return readFile('temp.json', 'utf8');
  })
  .then(function (data) {
    console.log('read saved json done: ', data);
  })
  .done();

console.log('#end');
