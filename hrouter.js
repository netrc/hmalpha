
var D = require('./db');

exports.frontPage = function (req, res) {
  D.getTableField("system","displayname", function(v) {
    res.render('index',  { title : 'Home', sName : v }  );
  });
};

exports.restGetSystem = function (req, res) {
  D.getTableField("system","displayname", function(v) {
    res.send( v );
  });
};
