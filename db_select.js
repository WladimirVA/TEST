var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wad270188!",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM table3", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});