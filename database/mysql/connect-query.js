var mysql = require('mysql');

var connectionConfig = {
  host: 'localhost',
  user: 'community',
  password: 'mysql01',
  database: 'INVENTORY'
};

var connection = mysql.createConnection(connectionConfig);

connection.connect(function(err){
  console.log('connection::connected');
});

connection.query('SELECT * FROM customer', function(err, rows, fields){
  if(err) throw err;
  rows.forEach(function(row){
    console.log(row.name, row.age);
  });
});

//var will = {name: 'Will', age: 28};
//connection.query('INSERT INTO customer SET ?', will, function(err, results){
//  if(err) throw err;
//  console.log(results);
//});

connection.end(function(err){
  console.log('connection::end');
});
