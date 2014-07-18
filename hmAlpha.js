
var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  );
});

app.listen(process.env.PORT, process.env.IP);
console.log("express hmalpha running");

