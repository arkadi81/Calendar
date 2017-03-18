var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'calendar'
});

connection.connect();

connection.query('SELECT * from events', function(err, rows, fields) {
  if (!err) {
    console.log('The solution is: ', rows[0]["name"]);
    //console.log(typeof(rows));
  }
    
  else
    console.log('Error while performing Query.');
});

connection.end();