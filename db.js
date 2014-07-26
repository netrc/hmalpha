
var query = require('pg-query');

var pdbConnStr = 'postgres://boyoelbefswknr:AjgLG7D3DeY9OIiU-0D71Tu8ya@ec2-23-21-101-129.compute-1.amazonaws.com:5432/d8s5fo5o8n34u7?ssl=true';

query.connectionParameters = pdbConnStr;


exports.demoSelect = function () {
    query('SELECT * from system',  function(err, rows, result) {
        if (err) {
            console.log('error: ', err.message);
        } else {
            rows.map(function(r) {console.log('ok:'+ r.displayname)});
        }
    });
};

exports.getTableField = function ( tableName, fieldName, cb ) {
    var q = 'SELECT * from ' + tableName;
    query(q,  function(err, rows, result) {
        if (err) {
            console.log('error: ', err.message);
        } else {
            cb( rows.map(function(r) {return r[fieldName]}) );
        }
    });
};

