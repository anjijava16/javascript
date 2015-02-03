var fs = require('fs');

console.log('#begin');

fs.readFile('customers.json', 'utf8', function (err, data) {
  if (err) throw err;
  console.log('read done: ' + data);
  fs.writeFile('temp.json', data, function (err) {
    if (err) throw err;
    console.log('write done: ' + data);
    fs.readFile('temp.json', 'utf8', function (err, data) {
      if (err) throw err;
      console.log('read saved json done: ' + data);
    });
  });
});

console.log('#end');
