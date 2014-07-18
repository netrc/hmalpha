
//var http = require('http');
//var path = require('path');
var express = require('express');
//var router = express();


//var server = http.createServer(router);


//router.use(express.static(path.resolve(__dirname, 'client')));

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
//server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//  var addr = server.address();
//  console.log("Chat server listening at", addr.address + ":" + addr.port);
//});
