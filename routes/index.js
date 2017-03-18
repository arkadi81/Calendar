var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  
  var connection = req.connection; // passed from router in app.js
  //
  //connection.connect();
  connection.query('SELECT * from events', function(err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', rows[0]["name"]);
      res.render('index', { title: 'welcome', events: rows });
      //console.log(typeof(rows));
    }
      
    else
      console.log('Error while performing Query.');
  });
  //connection.end();

});

router.get('/add', function(req, res) {
  // this is adding new event get is for displaying the page/
  // the post will return data to server
  res.render('add', {title: 'Add new user'});

});

router.post('/add', function(req,res) {
  //set internal db variable. req.connection is still there
  var connection = req.connection;
  var name = req.body.name;
  var location = req.body.location;
  //console.log('name is', name);
  //TODO: ESCAPE AND CLEAN VALUES, CHECK INPUT ON BOTH CLIENT AND SERVER SIDE!

  // encapsulate logic into unit function, test said unit function vs either mock db or json file
  var str = 
    'INSERT INTO calendar.events (id, name, location)' + 
    'VALUES (NULL, "' +name + '","' + location + '")';

  // THIS IS SUPER EXPOSED RIGHT NOW

  console.log('query is: ', str);
  
  connection.query(str, function(err, rows, fields) {
    if (!err) {
      console.log('added success');
      //res.render('index', { title: 'welcome', events: rows });
      res.redirect('/');
      //console.log(typeof(rows));
    }
      
    else
      console.log('Error while adding');
  });  

});

router.get('/status', function(req,res) {
  res.send('hai!!');
});

// todo - refactor into smaller chuncks, consider db size and future load balancing
// only query that many first lines, load dynamically for following
// daemon which will populate occurances db
// research how to make the website alert automatically, possibly using a library
// notifyjs or sockets.
// split CRUD tasks into little files.



module.exports = router;
