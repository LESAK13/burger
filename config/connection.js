var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  port: 3306,
  user: "b35bcbcb605beb",
  password: "ed2bd77b",
  database: "burgers_heroku_4fed1338e7b47c8db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;