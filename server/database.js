import { createConnection } from "mysql2";

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

// Create users database and tables if not exist
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE users", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql =
    "CREATE TABLE users ( id INT(255) AUTO_INCREMENT, name VARCHAR(255), password VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
