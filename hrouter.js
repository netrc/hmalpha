
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

exports.restPostSystem = function (req, res) {
  var nsn = req.param('systemName');
  var nsl = req.param('location');
  console.log("got nsn: " + nsn + " nsl: " + nsl);
  D.postTableField("system","displayname", nsn, function() {
    res.redirect( "/" );
  });
};
