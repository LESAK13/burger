var orm = require("../config.orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        })
    },
    insertOne: function(val, cb) {
        orm.insertOne("burgers", val, function(result) {
            cb(result);
        })
    },
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", condition, function(result) {
            cb(result);
        })
    }
}

module.exports = burger;