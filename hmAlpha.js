
var express = require('express');
var D = require('./db');
var R = require('./hrouter');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// basic pages
app.get('/', R.frontPage);

// Basic REST
app.get('/rest/system/', R.restGetSystem);
app.get('/rest/system/:sysname', R.restGetSystemName);
app.post('/rest/system/', R.restPostSystem);

app.listen(process.env.PORT, process.env.IP);
console.log("express hmalpha running");
