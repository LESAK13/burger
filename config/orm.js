var connection = require("../config/connection.js");

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function() {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
      connection.query(queryString, [req.body.burger_name], function(err, result) {
          if (err) throw err;
          console.log(result);
      });
    },
    updateOne: function() {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = (?)"
        connection.query(queryString, [req.body.burger_name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
      }
};

module.exports = orm;