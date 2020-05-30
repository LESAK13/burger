var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM "+ table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
           throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, val, cb) {
      var queryString = "INSERT INTO " + table + "(burger_name) VALUES (" + printQuestionMarks(val.length) + ")";
      connection.query(queryString, val, function(err, result) {
          if (err) throw err;
          cb(result);
      });
    },
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
      }
};

module.exports = orm;