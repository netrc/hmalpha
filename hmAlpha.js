
var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  );
});
// Basic REST
app.get('/rest/system/'); // add

app.listen(process.env.PORT, process.env.IP);
console.log("express hmalpha running");

var query = require('pg-query');
//query.connectionParameters = 'postgres://user:password@host:5432/database';
query.connectionParameters = 'postgres://boyoelbefswknr:AjgLG7D3DeY9OIiU-0D71Tu8ya@ec2-23-21-101-129.compute-1.amazonaws.com:5432/d8s5fo5o8n34u7?ssl=true';

//accepts optional array of values as 2nd parameter for parameterized queries
query('SELECT * from system',  function(err, rows, result) {

if (err) {
    console.log('error: ', err.message);
  } else {
    rows.map(function(r) {console.log('ok:'+ r.displayname)});
  }
});