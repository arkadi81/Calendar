
var chai = require('chai');
var assert = chai.assert;
var mysql      = require('mysql');

// describe is used for grouping of a block
describe('Mysql connection test:', function() {
  // more unit tests here
  it('Attempting to select from calendar database', function(){
    // single test implementation here
    // create empty array, assure its empty:

   
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'calendar'
    });

    connection.connect();

    var res = ""; // should be breakfast

    connection.query('SELECT * from events', function(err, rows, fields) {
      res = rows[0].name;
      if (!err) {
        console.log('The solution is: ', rows[0].name);
        //console.log(typeof(rows));
        res = rows[0].name;
      }
        
      else
        console.log('Error while performing Query.');

      // test potentially needs to be async
    });

    connection.end();

    assert.equal(res, "breakfast");
  });

});




