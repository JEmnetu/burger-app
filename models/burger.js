// Import the orm to create functions that will interact with the DB
const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        })
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, (response) => {
            cb(response);
        });
    }

}

module.exports = burger;