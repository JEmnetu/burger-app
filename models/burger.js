// Import the orm to create functions that will interact with the DB
const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    }

}

module.exports = burger;