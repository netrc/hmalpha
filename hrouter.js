
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
  var dorder = req.param('displayorder');
  var dname = nsn + ' ' + nsl;
  var hid = 99;
  console.log("got nsn: " + nsn + " nsl: " + nsl);
  D.modelAddSystem( dname, nsn, nsl, dorder, hid, function() {
    res.redirect( "/" );
  });
};
