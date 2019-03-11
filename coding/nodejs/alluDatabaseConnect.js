const fs = require('fs');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alluCloud2',
  database: 'eventdb'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM eventdb.events WHERE eventID = '118'", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]['eventName']);
    fs.writeFile('result.txt', result[0]['eventName'], (err) => {
      if (err) throw err;
  });
  });
});


