var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wad270188!",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  var adr = 'Moskov';
  var sql = 'SELECT * FROM table3 WHERE decription = ? ORDER BY name LIMIT 0, 20';
  con.query(sql, [adr], function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});